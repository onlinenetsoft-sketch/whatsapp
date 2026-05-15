function StatsCard({
  title,
  value,
  icon,
  color = 'bg-primary',
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`${color} text-white p-4 rounded-xl`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;