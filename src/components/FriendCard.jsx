export default function FriendCard({ friend }) {
  return (
    <div className="flex bg-white shadow-md rounded-lg p-4 max-w-xs">
      <img
        src={friend.image}
        alt={friend.name}
        className="rounded-full w-16 mb-4"
      />
      <div className="flex flex-col ml-4">
        <h2 className="text-xl font-semibold">{friend.name}</h2>
        <p>{`£${friend.total} is owed`}</p>
      </div>
    </div>
  );
}
