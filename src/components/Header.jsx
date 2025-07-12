import { auth } from "../firebase";
const Header = ({room, setRoom}) => {
  return (
    <header className="flex justify-between p-5 border border-gray-300 shadow-lg">
      <p>{auth.currentUser.displayName}</p>
      <p className="font-semibold">{room} </p>
      <button
        onClick={() => setRoom(null)} className="bg-black text-white p-2 px-4 rounded-md text-sm hover:bg-black/80 transition cursor-pointer">
        Farklı Oda
      </button>
    </header>
  );
};

export default Header;
