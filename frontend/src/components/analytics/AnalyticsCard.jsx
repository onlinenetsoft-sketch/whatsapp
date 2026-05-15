function AnalyticsCard({
  title,
  value,
  percentage,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <p className="text-gray-500">
        {title}
      </p>

      <div className="flex items-end justify-between mt-3">
        <h2 className="text-4xl font-bold">
          {value}
        </h2>

        <span className="text-green-500 font-medium">
          {percentage}
        </span>
      </div>
    </div>
  );
}

export default AnalyticsCard;