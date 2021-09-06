import { Excel } from '../../models/excel';
import * as XLSX from 'xlsx';
import { useState } from 'react';
import excelIcon from '../../assets/images/excel.png'
function Home() {
  const [items, setItems] = useState<Excel[]>([]);
  const readExcel = (file: any) => {
    const promise = new Promise<Excel[]>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target?.result;
        const wb = XLSX.read(bufferArray, { type: 'buffer' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data: Excel[] = XLSX.utils.sheet_to_json(ws, { raw: false });
        resolve(data);
        console.log(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      setItems(d);
    });
  };

  return (
    <div className="flex flex-col w-screen h-screen overflow-y-hidden min-w-980">
      <div className="w-full h-16 bg-gray-600">
        <h1>Header</h1>
      </div>
      <div className="flex w-full h-full-4rem">
        <div className="w-20 h-full bg-red-300">ggg</div>
        <div className="w-full h-full px-10 ">
          <div className="w-full h-32 bg-gray-100">

            <div className="flex items-center justify-evenly w-96">
              <label htmlFor="file-input">
                <img src={excelIcon} width={30} className="cursor-pointer" alt="images"/>
              </label>

              <input
                id="file-input"
                type="file"
                onChange={(e) => {
                  if (!e.target.files) return;
                  const file = e.target.files[0];
                  readExcel(file);
                }}
              />
            </div>
          </div>
          <div className="w-full pb-4 overflow-y-scroll text-xs 2xl:xl:text-sm h-4/5">
            <table className="w-full text-center ">
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
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-200' : null} flex w-full py-2`}>
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
