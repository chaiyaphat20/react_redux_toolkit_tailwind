import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

function ChangDock() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-hidden min-w-980">
      <Header />
      <div className="flex w-full h-full-4rem">
        <Navbar />
      </div>
    </div>
  );
}

export default ChangDock;
