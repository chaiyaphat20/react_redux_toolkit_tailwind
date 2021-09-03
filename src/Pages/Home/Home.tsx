import { Excel } from '../../models/excel';
import * as XLSX from 'xlsx';
import { useState } from 'react';

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
    <div className="h-screen w-screen min-w-980">
      <div className="h-14 bg-gray-600"></div>
      <div className="w-full bg-green-500 justify-center flex items-center flex-col">
        <input
          type="file"
          onChange={(e) => {
            if (!e.target.files) return;
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
        <div className="bg-gray-300 w-10/12 h-600 overflow-y-auto">
          <table className="table-fixed w-full">
            <thead className="bg-gray-500">
              <tr>
                <th className="w-20">รอบที่</th>
                <th className="w-20">ลำดับ</th>
                <th className="w-28">รหัสเส้นทาง</th>
                <th className="w-40">เส้นทาง</th>
                <th className="w-12">Dock</th>
                <th className="w-20">เริ่มโหลด</th>
                <th className="w-20">ออกจากโรงงาน</th>
                <th className="w-20">ออกช้าสุด</th>
                <th className="w-20">ต้องถึงลูกค้า</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {items.map((data, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-200' : null} `}>
                  <th className="w-1/2 ">{data.ROUND_NO}</th>
                  <td className="w-1/2">{data.ROUTE_SEQ}</td>
                  <td className="w-1/2">{data.ROUTE_CODE}</td>
                  <td className="w-1/2">{data.ROUTE_NAME}</td>
                  <td className="w-1/2">{data.DOCK_NO}</td>
                  <td className="w-1/2">{data.LOADING_TIME}</td>
                  <td className="w-1/2">{data.LEAVE_TIME}</td>
                  <td className="w-1/2">{data.LATE_TIME}</td>
                  <td className="w-1/2">{data.ARRIVE_TIME}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
