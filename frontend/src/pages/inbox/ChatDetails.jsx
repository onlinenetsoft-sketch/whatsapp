function ChatDetails() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <h1 className="text-2xl font-bold mb-6">
        Chat Details
      </h1>

      <div className="space-y-4">
        <div>
          <p className="text-gray-500">
            Customer Name
          </p>

          <h3 className="font-semibold">
            John Doe
          </h3>
        </div>

        <div>
          <p className="text-gray-500">
            Phone Number
          </p>

          <h3 className="font-semibold">
            +91 9876543210
          </h3>
        </div>

        <div>
          <p className="text-gray-500">
            Last Interaction
          </p>

          <h3 className="font-semibold">
            2 hours ago
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ChatDetails;