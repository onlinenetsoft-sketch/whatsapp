function Conversation() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <h1 className="text-2xl font-bold mb-4">
        Conversation
      </h1>

      <div className="space-y-4">
        <div className="bg-gray-100 p-3 rounded-xl w-fit">
          Customer message example
        </div>

        <div className="bg-primary text-white p-3 rounded-xl w-fit ml-auto">
          Reply message example
        </div>
      </div>
    </div>
  );
}

export default Conversation;