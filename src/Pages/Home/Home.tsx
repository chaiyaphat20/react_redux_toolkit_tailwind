import { Excel } from '../../models/excel';
import * as XLSX from 'xlsx';
import { useRef, useState } from 'react';

import excelIcon from '../../assets/images/excel.png';
import printerIcon from '../../assets/images/printer.png';
import directDownloadIcon from '../../assets/images/direct-download.png';

import ReactToPrint from 'react-to-print';

import { CSVLink } from 'react-csv';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

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

  let componentTable: React.ReactNode = (
    <div className="flex items-center justify-center h-full">
      <h1>ยังไม่มีข้อมูล</h1>
    </div>
  );
  if (items.length !== 0) {
    componentTable = (
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
    );
  }
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-hidden min-w-980">
      <Header />
      <div className="flex w-full h-full-4rem">
        <Navbar />
        <div className="w-full h-full px-10 ">
          <div className="flex flex-col w-full h-32 ">
            <div className="flex flex-row items-end justify-end ">
              <h1 className="my-2 text-3xl font-bold">Window Time</h1>
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
                <div>
                  <CSVLink data={items} headers={headers}>
                    <div className="flex flex-col items-center mr-2">
                      <img src={directDownloadIcon} width={30} className="cursor-pointer " alt="images" />
                      <h1>Download</h1>
                    </div>
                  </CSVLink>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pb-6 overflow-y-auto text-xs 2xl:text-sm h-4/5">{componentTable}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
