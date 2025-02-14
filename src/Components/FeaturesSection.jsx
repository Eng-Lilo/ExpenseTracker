import React from "react";

const features = [
  {
    title: "Smart Expense Tracking",
    description: "Easily record and categorize your daily expenses with a few taps.",
    icon: "💰",
  },
  {
    title: "Detailed Analytics",
    description: "Gain insights into your spending habits with interactive charts.",
    icon: "📊",
  },
  {
    title: "Budget Management",
    description: "Set monthly budgets and get alerts when you're close to exceeding them.",
    icon: "💡",
  },
  {
    title: "Secure & Private",
    description: "Your financial data is encrypted and kept safe from unauthorized access.",
    icon: "🔒",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#0D1B2A] to-[#415A77]  py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
        Why Choose Xpenso?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 shadow-md rounded-xl p-6 text-center hover:scale-105 hover:bg-opacity-20 transition-all"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg text-black font-semibold">{feature.title}</h3>
            <p className="text-gray-600  text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
