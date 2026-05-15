function MessageBubble({
  message,
  isOwn = false,
}) {
  return (
    <div
      className={`max-w-xs px-4 py-3 rounded-2xl ${
        isOwn
          ? 'bg-primary text-white ml-auto'
          : 'bg-gray-100 text-gray-800'
      }`}
    >
      {message}
    </div>
  );
}

export default MessageBubble;