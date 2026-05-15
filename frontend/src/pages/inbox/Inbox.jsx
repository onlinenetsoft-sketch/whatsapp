import { useState } from 'react';

function Inbox() {
  const [selectedChat, setSelectedChat] =
    useState('John Doe');

  const conversations = [
    'John Doe',
    'Sarah Smith',
    'Michael Johnson',
    'Emma Watson',
  ];

  return (
    <div className="grid grid-cols-12 gap-6 h-[85vh]">
      <div className="col-span-4 bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <input
            type="text"
            placeholder="Search conversation..."
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        <div>
          {conversations.map((chat, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedChat(chat)
              }
              className={`w-full text-left px-5 py-4 border-b hover:bg-gray-50 ${
                selectedChat === chat
                  ? 'bg-gray-100'
                  : ''
              }`}
            >
              {chat}
            </button>
          ))}
        </div>
      </div>

      <div className="col-span-8 bg-white rounded-2xl border shadow-sm flex flex-col">
        <div className="p-5 border-b font-semibold text-lg">
          {selectedChat}
        </div>

        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          <div className="bg-gray-100 p-3 rounded-xl w-fit">
            Hello 👋
          </div>

          <div className="bg-primary text-white p-3 rounded-xl w-fit ml-auto">
            Hi, how can I help you?
          </div>
        </div>

        <div className="p-4 border-t flex gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-lg px-4 py-3"
          />

          <button className="bg-primary text-white px-6 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inbox;