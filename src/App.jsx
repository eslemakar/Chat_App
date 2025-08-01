import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";
import Loader from "./components/Loader";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(undefined);
  const [room, setRoom] = useState(null);
  useEffect(() => {
    //kullanıcı her oturumu değştirdiğinde güncel bilgileri getirir.
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    //kullanıcı sayfadan ayrılınca oturumu durdur
    return () => unsub();
  }, []);
  //kullanıcı verisi henüz yüklenmediyse
  if (user === undefined) {
    return <Loader /> ;
  }
  //kullanıcı oturum açmadıysa
  if (user === null) return <LoginPage />;
  //kullanıcı oturum actıysa ve oda secildiyse
  if (room) return <ChatPage room={room} setRoom={setRoom} />;
  //kullanıcı oturum açtıysa ve oda secilmediyse
  return <RoomPage setRoom={setRoom} />;
};

export default App;
