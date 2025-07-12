import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { addDoc,collection,serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";

const Form = ({ room }) => {
  const [text, setText] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //mesaj boşsa iptal et
    if (text.trim() === "") return;
    //referans
    const collectionRef = collection(db, "messages");

    await addDoc(collectionRef, {
      text,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 border border-gray-200 shadow-lg flex justify-center gap-3 relative"
    >
      <input
        type="text"
        placeholder="Mesajınızı yazınız"
        className="border border-gray-200 shadow-sm p-2 px-4 rounded-md-w-1/2"
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <div className="absolute top-[-450px] right-[140px] ">
          <EmojiPicker
            open={isOpen}
            onEmojiClick={(e) => setText(text + e.emoji)}
          />
        </div>
          
        <button onClick={() => setIsOpen(!isOpen)} className="btn text-base">
          😃
        </button>
      </div>

      <button type="submit" className="btn">
        Gönder
      </button>
    </form>
  );
};

export default Form;
