import { auth } from "../firebase";

const Message = ({ data }) => {
  // Eğer data ya da author eksikse bileşeni render etme
  if (!data || !data.author) return null;

  const isCurrentUser = data.author.id === auth.currentUser?.uid;

  if (isCurrentUser) {
    return (
      <p className=" bg-black text-white rounded-[7px_7px_0_7px] self-end message">
        {data.text}
      </p>
    );
  }

  // Diğer kullanıcıdan gelen mesaj
  return (
    <div className="flex items-start gap-1">
      <img
        src={data.author.photo}
        alt="User"
        className="size-[40px] rounded-full"
      />
      <div className="flex flex-col gap-1 w-full">
        <span className="font-bold whitespace-nowrap text-zinc-700 ">
          {data.author.name}
        </span>
        <p className="message text-zinc-800 bg-zinc-200 rounded-[0_7px_7px_7px]">{data.text}</p>
      </div>
    </div>
  );
};

export default Message;
