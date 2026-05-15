function NotificationItem({
  notification,
}) {
  return (
    <div className="bg-white p-4 rounded-xl border shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">
            {notification.title}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            {notification.message}
          </p>
        </div>

        <span className="text-xs text-gray-400">
          {notification.time}
        </span>
      </div>
    </div>
  );
}

export default NotificationItem;