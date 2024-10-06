export default function FriendCard({
  friend,
  removeFriend,
  setSelectedFriend,
  selectedFriend,
}) {
  return (
    <div
      className={` ${
        selectedFriend?.id === friend.id ? `bg-slate-200` : `bg-white`
      } flex shadow-md rounded-lg px-1 items-center cursor-pointer hover:bg-slate-200`}
      onClick={() => setSelectedFriend(friend)}
    >
      <img
        src={friend.image}
        alt={friend.name}
        className="rounded-full w-16 my-2"
      />
      <div className="flex flex-col ml-4">
        <h2 className="text-xl font-semibold">{friend.name}</h2>
        <p
          className={
            friend.total > 0
              ? `text-red-500`
              : friend.total === 0
              ? `text-orange-500`
              : `text-green-500`
          }
        >
          {friend.total > 0
            ? `You owe $${friend.total}`
            : friend.total === 0
            ? `You are even`
            : `You are owed $${Math.abs(friend.total)}`}
        </p>
      </div>
      <button
        className="ml-auto border rounded-full w-10 h-10 hover:bg-blue-500 hover:text-[#f1f1f1]"
        onClick={(e) => {
          e.stopPropagation();
          removeFriend(friend.id);
        }}
      >
        🗑️
      </button>
    </div>
  );
}
