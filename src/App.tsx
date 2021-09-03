import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/reducers/App';
import { useAppSelector } from './redux/store';
import { fetchUsersServices } from './services/Api.services';
function App() {
  const dispatch = useDispatch();
  const usersState = useAppSelector((state) => state.usersStore.data);

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

  return (
    <div className="bg-red-800">
      <h1 className="2xl:">Hello React</h1>
      {usersComponent}
    </div>
  );
}

export default App;
