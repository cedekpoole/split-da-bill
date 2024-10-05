export default function FriendCard({ friend }) {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 max-w-xs">
      <img src={friend.image} alt={friend.name} className="rounded-lg mb-4" />
      <h2 className="text-xl font-semibold">{friend.name}</h2>
    </div>
  );
}
