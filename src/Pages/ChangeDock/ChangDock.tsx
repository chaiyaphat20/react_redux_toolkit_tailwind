import { useState } from 'react';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BiEdit, BiSave } from 'react-icons/bi';
function ChangDock() {
  const [searchItem, setSearchItem] = useState('');
  const [selectItem, setSelectItem] = useState('');
  const [dock, setDock] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [data, setData] = useState([
    {
      round: 1,
      seq: 1,
      lineCode: 'NBB01',
      line: 'CDC นครสวรรค์ ไส้กรอก PO1',
      dock: '1',
      isChange: false,
    },
    {
      round: 1,
      seq: 2,
      lineCode: 'NBB01',
      line: 'CDC นครสวรรค์ ไส้กรอก PO2',
      dock: '2',
      isChange: false,
    },
    {
      round: 1,
      seq: 3,
      lineCode: 'NBB03',
      line: 'CDC นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
      isChange: false,
    },
    {
      round: 1,
      seq: 4,
      lineCode: 'NBB03',
      line: 'CDC นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
      isChange: false,
    },
    {
      round: 1,
      seq: 5,
      lineCode: 'NBB03',
      line: 'CDC นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
      isChange: false,
    },
    {
      round: 1,
      seq: 6,
      lineCode: 'NBB03',
      line: 'CDC นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
      isChange: false,
    },
    {
      round: 1,
      seq: 7,
      lineCode: 'NBB03',
      line: 'CDC นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
      isChange: false,
    },
    {
      round: 1,
      seq: 8,
      lineCode: 'NBB03',
      line: 'CDC นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
      isChange: false,
    },
    {
      round: 1,
      seq: 9,
      lineCode: 'NBB03',
      line: 'CDC นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
      isChange: false,
    },
    {
      round: 1,
      seq: 10,
      lineCode: 'NBB03',
      line: 'CDC นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
      isChange: false,
    },
    {
      round: 1,
      seq: 11,
      lineCode: 'NBB03',
      line: 'CDC นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
      isChange: false,
    },
    {
      round: 1,
      seq: 12,
      lineCode: 'NBB03',
      line: 'CDC นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
      isChange: false,
    },
    {
      round: 2,
      seq: 4,
      lineCode: 'NBB01',
      line: 'CDC2 นครสวรรค์ ไส้กรอก PO5',
      dock: '2',
      isChange: false,
    },
    {
      round: 2,
      seq: 1,
      lineCode: 'NBB01',
      line: 'CDC2 นครสวรรค์ ไส้กรอก PO1',
      dock: '1',
      isChange: false,
    },
    {
      round: 2,
      seq: 2,
      lineCode: 'NBB01',
      line: 'CDC2 นครสวรรค์ ไส้กรอก PO2',
      dock: '2',
      isChange: false,
    },
    {
      round: 2,
      seq: 3,
      lineCode: 'NBB03',
      line: 'CDC2 นครสวรรค์ ไส้กรอก PO3',
      dock: '2',
      isChange: false,
    },
    {
      round: 2,
      seq: 5,
      lineCode: 'NBB01',
      line: 'CDC2 นครสวรรค์ ไส้กรอก PO5',
      dock: '2',
      isChange: false,
    },
  ]);

  const saveData = () => {
    const dataForSave = data.filter((items) => items.isChange);
    console.log(dataForSave);
  };

  const checkOn = () => {
    const roundSelect = Number(selectItem.split('-')[0]);
    const dockSelect = Number(selectItem.split('-')[1]);
    const newData = data.map((e) => {
      let checkRound = roundSelect === e.round ? true : false;
      let checkSeq = dockSelect === e.seq ? true : false;
      if (checkRound && checkSeq) {
        return { ...e, dock: dock, isChange: true };
      }
      return e;
    });
    setIsSaved(true);
    setData(newData);
  };

  let componentTable: React.ReactNode = (
    <div className="flex items-center justify-center h-full">
      <h1>ยังไม่มีข้อมูล</h1>
    </div>
  );
  if (data.length !== 0) {
    let dataFilter = data;
    let dataSorted = dataFilter;
    if (searchItem !== '') {
      dataFilter = data.filter((e) => e.round === Number(searchItem));
    }
    dataSorted = dataFilter?.sort((a, b) => a.seq - b.seq);
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
          {dataSorted?.map((data, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-50'} flex w-full py-2`}>
              <th className="w-1/6 ">{data.seq}</th>
              <td className="w-2/6 ">{data.lineCode}</td>
              <td className="w-2/6 ">{data.line}</td>
              <td className="w-1/6 ">
                <div className="flex flex-row items-center justify-center cursor-pointer ">
                  {(Number(selectItem.split('-')[0]) === data.round ? true : false) && (Number(selectItem.split('-')[1]) === data.seq ? true : false) ? (
                    <div className="flex flex-row items-center">
                      <input
                        type="number"
                        min={1}
                        value={dock}
                        className="w-12"
                        onChange={(e) => {
                          setIsSaved(false);
                          if (dock !== data.dock) {
                            setDock(e.target.value);
                          }
                        }}
                      />
                      <BiSave
                        color={isSaved ? 'grey' : 'green'}
                        onClick={() => {
                          setSelectItem('');
                          if (dock !== data.dock) {
                            checkOn();
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className="flex flex-row items-center"
                      onClick={() => {
                        setDock('');
                        setIsSaved(false);
                        setSelectItem(`${data.round}-${data.seq}`);
                      }}>
                      <h1 className={`mr-2 text-gray-900 ${data.isChange ? 'text-green-500' : null}`}>{data.dock}</h1>
                      <BiEdit />
                    </div>
                  )}
                </div>
              </td>
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
          <div className="flex flex-row items-end justify-end ">
            <h1 className="my-2 text-3xl font-bold">แก้ไข Dock กับเส้นทาง</h1>
          </div>
          <div className="flex flex-row items-end justify-start ">
            <div className="flex border border-grey-light">
              <input
                className="w-full ml-1 rounded"
                type="text"
                placeholder="Search..."
                value={searchItem}
                onChange={(e) => {
                  setSearchItem(e.target.value);
                }}
              />
              <button onClick={saveData}>Save</button>
              <button className="border-l shadow bg-grey-lightest border-grey hover:bg-grey-lightest">
                <span className="flex items-center justify-end w-auto p-2 text-grey hover:text-grey-darkest">
                  <BiSearchAlt2 />
                </span>
              </button>
            </div>
          </div>
          <div className="w-full pb-6 overflow-y-auto text-base h-4/5">{componentTable}</div>
        </div>
      </div>
    </div>
  );
}

export default ChangDock;
