function PlanCard({ plan }) {
  return (
    <div className="bg-white border rounded-2xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        {plan.name}
      </h2>

      <p className="text-5xl font-bold mt-4">
        ₹{plan.price}
      </p>

      <ul className="mt-6 space-y-3">
        {plan.features.map(
          (feature, index) => (
            <li key={index}>
              ✅ {feature}
            </li>
          )
        )}
      </ul>

      <button className="w-full mt-8 bg-primary text-white py-3 rounded-xl">
        Choose Plan
      </button>
    </div>
  );
}

export default PlanCard;