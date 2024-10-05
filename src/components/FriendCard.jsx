export default function FriendCard({ friend }) {
  return (
    <div className="flex bg-white shadow-md rounded-lg px-1 items-center">
      <img
        src={friend.image}
        alt={friend.name}
        className="rounded-full w-16 mb-4"
      />
      <div className="flex flex-col ml-4">
        <h2 className="text-xl font-semibold">{friend.name}</h2>
        <p>{`£${friend.total} is owed`}</p>
      </div>
      <button className="ml-auto border rounded-full w-10 h-10 hover:bg-blue-500 hover:text-[#f1f1f1]">
        🗑️
      </button>
    </div>
  );
}
