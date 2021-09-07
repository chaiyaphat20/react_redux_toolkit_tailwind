import { Excel } from '../../models/excel';
import * as XLSX from 'xlsx';
import { useRef, useState } from 'react';

import excelIcon from '../../assets/images/excel.png';
import printerIcon from '../../assets/images/printer.png';
import directDownloadIcon from '../../assets/images/direct-download.png';
import userIcon from '../../assets/images/user.png';
import moreIcon from '../../assets/images/more.png';

import homeIcon from '../../assets/images/menu/home.png';
import configIcon from '../../assets/images/menu/config.png';
import maintainIcon from '../../assets/images/menu/add.png';
import dashboardIcon from '../../assets/images/menu/dashboard.png';
import settingIcon from '../../assets/images/menu/settings.png';

import ReactToPrint from 'react-to-print';

import { CSVLink } from 'react-csv';

function Home() {
  const [items, setItems] = useState<Excel[]>([]);
  const refTable = useRef<HTMLTableElement>(null);

  const xslToJson = (workbook: any): Excel[] => {
    var sheet_name_list = workbook.SheetNames;
    return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], { raw: false });
  };

  const readExcel = (e: any) => {
    const file = e.target.files[0];
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target?.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
      /* Get first worksheet */
      let arr = xslToJson(wb);
      console.log(arr);
      setItems(arr);
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  };

  const headers = [
    { label: 'PLANT_CODE', key: 'PLANT_CODE' },
    { label: 'ROUND_NO', key: 'ROUND_NO' },
    { label: 'ROUTE_SEQ', key: 'ROUTE_SEQ' },
    { label: 'ROUTE_CODE', key: 'ROUTE_CODE' },
    { label: 'ROUTE_NAME', key: 'ROUTE_NAME' },
    { label: 'DOCK_NO', key: 'DOCK_NO' },
    { label: 'LOADING_TIME', key: 'LOADING_TIME' },
    { label: 'LEAVE_TIME', key: 'LEAVE_TIME' },
    { label: 'LATE_TIME', key: 'LATE_TIME' },
    { label: 'ARRIVE_TIME', key: 'ARRIVE_TIME' },
  ];

  return (
    <div className="flex flex-col w-screen h-screen overflow-y-hidden min-w-980">
      <div className="flex flex-row w-full h-16 ">
        <div>
          <h1 className="h-full text-5xl font-bold text-white bg-red-300">OPS</h1>
        </div>
        <div className="flex items-center justify-end w-full bg-blue-300">
          <div className="mr-2 cursor-pointer">
            <img src={userIcon} className="w-10 h-10 rounded-full bg-gray-50" alt="images" />
          </div>
          <h1 className="mr-2 font-bold text-white">Chaiyaphat Supharak</h1>
          <img src={moreIcon} className="w-4 h-4 " alt="images" />
        </div>
      </div>
      <div className="flex w-full h-full-4rem">
        <div className="flex flex-col items-center w-20 h-full py-2 bg-gray-200 ">
          <div className="flex flex-col items-center justify-center my-2 cursor-pointer w-14 h-14">
            <img src={homeIcon} width={35} alt="images" />
            <h1 className="text-sm">Home</h1>
          </div>
          <div className="flex flex-col items-center justify-center my-2 cursor-pointer w-14 h-14">
            <img src={configIcon} width={35} alt="images" />
            <h1 className="text-sm">Config</h1>
          </div>
          <div className="flex flex-col items-center justify-center my-2 cursor-pointer w-14 h-14">
            <img src={maintainIcon} width={35} alt="images" />
            <h1 className="text-sm">Maintain</h1>
          </div>
          <div className="flex flex-col items-center justify-center my-2 cursor-pointer w-14 h-14">
            <img src={dashboardIcon} width={35} alt="images" />
            <h1 className="text-sm">Dashboard</h1>
          </div>
          <div className="flex flex-col items-center justify-center my-2 cursor-pointer w-14 h-14">
            <img src={settingIcon} width={35} alt="images" />
            <h1 className="text-sm">Setting</h1>
          </div>
        </div>
        <div className="w-full h-full px-10 ">
          <div className="flex flex-col w-full h-32 ">
            <div className="flex flex-row items-end justify-end ">
              <h1 className="text-2xl font-bold">Window Time</h1>
            </div>
            <div className="flex w-full pt-2">
              <div className="flex flex-row items-center justify-start w-1/2 ">
                <button className="px-4 py-2 mr-3 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500">View Data</button>
                <button className="px-4 py-2 font-bold text-white bg-green-500 border-b-4 border-green-700 rounded hover:bg-green-400 hover:border-green-500">Save</button>
              </div>
              <div className="flex items-center justify-end w-1/2 ">
                <div className="flex flex-col items-center mr-2 justify-evenly ">
                  <label htmlFor="file-input" className="flex flex-col items-center mr-1">
                    <img src={excelIcon} width={30} className="cursor-pointer" alt="images" />
                    <h1 className="cursor-pointer">Import</h1>
                  </label>
                  <input
                    className="hidden"
                    id="file-input"
                    type="file"
                    onChange={(e) => {
                      readExcel(e);
                    }}
                  />
                </div>
                <div className="flex flex-col items-center mr-2">
                  <ReactToPrint
                    pageStyle="@page { size:auto; margin: 0mm; }  @media print { body { -webkit-print-color-adjust: exact; padding: 20px !important; } }"
                    trigger={() => <img src={printerIcon} width={30} className="cursor-pointer " alt="images" />}
                    content={() => refTable.current}
                  />
                  <ReactToPrint
                    pageStyle="@page { size:auto; margin: 0mm; }  @media print { body { -webkit-print-color-adjust: exact; padding: 20px !important; } }"
                    trigger={() => <h1 className="cursor-pointer">Print</h1>}
                    content={() => refTable.current}
                  />
                </div>
                <div className="flex flex-col items-center mr-2">
                  <img src={directDownloadIcon} width={30} className="cursor-pointer " alt="images" />
                  <CSVLink data={items} headers={headers}>
                    <h1>Download</h1>
                  </CSVLink>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pb-4 overflow-y-scroll text-xs 2xl:text-sm h-4/5">
            <table className="w-full text-center " ref={refTable}>
              <thead className="text-white bg-gray-600">
                <tr className="flex w-full py-2 ">
                  <th className="w-1/12 ">รอบที่</th>
                  <th className="w-1/12 ">ลำดับ</th>
                  <th className="w-2/12 ">รหัสเส้นทาง</th>
                  <th className="w-3/12">เส้นทาง</th>
                  <th className="w-1/12 ">Dock</th>
                  <th className="w-1/12">เริ่มโหลด</th>
                  <th className="w-1/12 ">ออกจากโรงงาน</th>
                  <th className="w-1/12">ออกช้าสุด</th>
                  <th className="w-1/12 ">ต้องถึงลูกค้า</th>
                </tr>
              </thead>
              <tbody>
                {items.map((data, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-50'} flex w-full py-2`}>
                    <th className="w-1/12 ">{data.ROUND_NO}</th>
                    <td className="w-1/12 ">{data.ROUTE_SEQ}</td>
                    <td className="w-2/12 ">{data.ROUTE_CODE}</td>
                    <td className="w-3/12 ">{data.ROUTE_NAME}</td>
                    <td className="w-1/12 ">{data.DOCK_NO}</td>
                    <td className="w-1/12 ">{data.LOADING_TIME}</td>
                    <td className="w-1/12 ">{data.LEAVE_TIME}</td>
                    <td className="w-1/12 ">{data.LATE_TIME}</td>
                    <td className="w-1/12 ">{data.ARRIVE_TIME}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
