import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/reducers/App';
import { useAppSelector } from './redux/store';
import { fetchUsersServices } from './services/Api.services';
import { Excel } from './models/excel';

import * as XLSX from 'xlsx';

function App() {
  const dispatch = useDispatch();
  const usersState = useAppSelector((state) => state.usersStore.data);
  const [items, setItems] = useState<Excel[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchUsersServices();
      dispatch(fetchUser(data));
      console.log(data);
    })();
  }, [dispatch]);

  let usersComponent: React.ReactNode = <div>กำลังโหลดข้อมูล...</div>;
  if (usersState.length) {
    usersComponent = usersState.map((e) => {
      return <div>{e.address?.city}</div>;
    });
  }
  const readExcel = (file: any) => {
    const promise = new Promise<Excel[]>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target?.result;
        const wb = XLSX.read(bufferArray, { type: 'buffer' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data: Excel[] = XLSX.utils.sheet_to_json(ws);
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
    <div className="bg-red-800">
      <h1 className="2xl:">Hello React</h1>
      {usersComponent}
      <div>
        <input
          type="file"
          onChange={(e) => {
            if (!e.target.files) return;
            const file = e.target.files[0];
            readExcel(file);
          }}
        />

        <table className="table container">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {items.map((data, index) => (
              <tr key={index}>
                <th>{data.ROUTE_NAME}</th>
                <td>{data.ROUTE_CODE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
