import homeIcon from '../assets/images/menu/home.png';
import configIcon from '../assets/images/menu/config.png';
import maintainIcon from '../assets/images/menu/add.png';
import dashboardIcon from '../assets/images/menu/dashboard.png';
import settingIcon from '../assets/images/menu/settings.png';
function Navbar() {
  return (
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
  );
}

export default Navbar;
