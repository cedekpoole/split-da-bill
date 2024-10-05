export default function FriendForm() {
  return (
    <form className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        className="border rounded px-4 py-2"
        placeholder="Enter friend's name"
      />
      <input
        type="url"
        className="border rounded px-4 py-2"
        placeholder="Enter image url"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Friend
      </button>
    </form>
  );
}
