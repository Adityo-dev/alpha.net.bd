function PremiumHostingPlan({ plans }) {
  return (
    <main className="container mx-auto px-3 lg:px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#1f2933]">
        PREMIUM HOSTING PLAN
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-green-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-green-800">
              {plan.name}
            </h2>
            <p className="text-4xl font-bold text-center my-4 text-green-900">
              TK {plan.price}/<span className="text-xl">mo</span>
            </p>
            <ul className="text-sm space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-600 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 bg-green-700 text-white py-2 rounded hover:bg-green-600">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default PremiumHostingPlan;
