function LeadCard({ lead }) {
  return (
    <div className="bg-white p-5 rounded-2xl border shadow-sm">
      <h3 className="text-xl font-semibold">
        {lead.name}
      </h3>

      <p className="text-gray-500 mt-1">
        {lead.email}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
          {lead.status}
        </span>

        <button className="text-primary font-medium">
          View
        </button>
      </div>
    </div>
  );
}

export default LeadCard;