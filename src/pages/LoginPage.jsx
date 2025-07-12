import { signInWithPopup } from "firebase/auth";
import {auth, provider} from "../firebase";
const LoginPage = () => {
  //google ile giriş
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => (console.log(res.data)))
      .catch((err) => console.log("giriş yaparken hata!", err));
  };
  return (
    <div className="wrapper">
      <div className="box h-[450px] font-poppins 
   flex flex-col justify-center items-center gap-[50px]"
      >
        <h1 className="text-4xl">Chat odası</h1>
        <p>Devam etmek için giriş yap</p>
        <button
          className="flex gap-7 items-center  p-2 px-4 
          rounded-md shadow-lg border border-gray-300
           hover:bg-gray-100 transition cursor-pointer"
          onClick={handleLogin}
        >
          <img src="/google.png" alt="google" className="w-[30px] " />
          <span>Google ile giriş yap</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
