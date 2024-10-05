export default function FriendForm() {
  return (
    <form className="flex flex-col space-y-4 p-4 bg-[#f1f1f1] shadow-md rounded-lg max-w-xs">
      <div>
        <label htmlFor="name" className="text-lg font-semibold mr-4">
          Name:
        </label>
        <input
          type="text"
          className="border rounded px-4 py-2"
          placeholder="Enter friend's name"
        />
      </div>
      <div>
        <label htmlFor="image" className="text-lg font-semibold mr-4">
          Image:
        </label>
        <input
          type="url"
          className="border rounded px-4 py-2"
          placeholder="Enter image url"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-36"
        >
          Add New Friend
        </button>
      </div>
    </form>
  );
}
