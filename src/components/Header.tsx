import moreIcon from '../assets/images/more.png';
import titleIcon from '../assets/images/OP_cpf_icon.png';
import userIcon from '../assets/images/user.png';

function Header() {
  return (
    <div className="flex flex-row w-full h-16 ">
      <div>
        <img src={titleIcon} className="h-16" alt="images" />
      </div>
      <div className="flex items-center justify-end w-full bg-title_blue">
        <div className="mr-2 cursor-pointer">
          <img src={userIcon} className="w-10 h-10 rounded-full bg-gray-50" alt="images" />
        </div>
        <h1 className="mr-2 font-bold text-white">Chaiyaphat Supharak</h1>
        <img src={moreIcon} className="w-4 h-4 " alt="images" />
      </div>
    </div>
  );
}

export default Header;
