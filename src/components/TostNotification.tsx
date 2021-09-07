import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TostNotification = () => {
  return <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />;
};

export default TostNotification;
