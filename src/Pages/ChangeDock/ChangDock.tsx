import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

function ChangDock() {
  const data = [
    {
      round: 1,
      seq: 1,
      lineCode: 'NBB01',
      line: 'CDC นครสวรรค์ ไส้กรอก PO1',
      dock: '1',
    },
    {
      round: 1,
      seq: 2,
      lineCode: 'NBB01',
      line: 'CDC นครสวรรค์ ไส้กรอก PO2',
      dock: '2',
    },
    {
      round: 1,
      seq: 3,
      lineCode: 'NBB03',
      line: 'CDC นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
    },
    {
      round: 2,
      seq: 4,
      lineCode: 'NBB01',
      line: 'CDC2 นครสวรรค์ ไส้กรอก PO5',
      dock: '2',
    },
    {
      round: 2,
      seq: 1,
      lineCode: 'NBB01',
      line: 'CDC2 นครสวรรค์ ไส้กรอก PO1',
      dock: '1',
    },
    {
      round: 2,
      seq: 2,
      lineCode: 'NBB01',
      line: 'CDC2 นครสวรรค์ ไส้กรอก PO2',
      dock: '2',
    },
    {
      round: 2,
      seq: 3,
      lineCode: 'NBB03',
      line: 'CDC2 นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
    },
    {
      round: 2,
      seq: 4,
      lineCode: 'NBB01',
      line: 'CDC2 นครสวรรค์ ไส้กรอก PO5',
      dock: '2',
    },
  ];

  let componentTable: React.ReactNode = (
    <div className="flex items-center justify-center h-full">
      <h1>ยังไม่มีข้อมูล</h1>
    </div>
  );
  if (data.length !== 0) {
    componentTable = (
      <table className="w-full text-center ">
        <thead className="text-white bg-gray-600">
          <tr className="flex w-full py-2 ">
            <th className="w-1/6 ">ลำดับ</th>
            <th className="w-2/6 ">รหัสเส้นทาง</th>
            <th className="w-2/6 ">เส้นทาง</th>
            <th className="w-1/6 ">Dock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-50'} flex w-full py-2`}>
              <th className="w-1/6 ">{data.seq}</th>
              <td className="w-2/6 ">{data.lineCode}</td>
              <td className="w-2/6 ">{data.line}</td>
              <td className="w-1/6 ">{data.dock}</td>
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
        {componentTable}
      </div>
    </div>
  );
}

export default ChangDock;
