function ChatbotFlow() {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <h2 className="text-2xl font-bold mb-4">
        Chatbot Flow Builder
      </h2>

      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-xl">
          Welcome Message
        </div>

        <div className="bg-primary text-white p-4 rounded-xl">
          Ask Customer Query
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          Assign to Agent
        </div>
      </div>
    </div>
  );
}

export default ChatbotFlow;