import React from 'react';

const PricingTier: React.FC<{
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}> = ({ name, price, features, highlighted }) => (
  <div className={`p-6 rounded-lg ${highlighted ? 'bg-blue-600 text-white' : 'bg-white'}`}>
    <h3 className="text-2xl font-bold">{name}</h3>
    <p className="mt-4">
      <span className="text-4xl font-bold">${price}</span>
      <span className="text-sm">/month</span>
    </p>
    <ul className="mt-6 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className={`h-5 w-5 ${highlighted ? 'text-white' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="ml-3">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`mt-8 w-full py-3 px-4 rounded-md ${
      highlighted ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
    } hover:opacity-90 transition-opacity`}>
      Get Started
    </button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-gray-600">Choose the plan that works best for you</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <PricingTier
            name="Basic"
            price="9.99"
            features={[
              "5 artworks per month",
              "Basic analytics",
              "Community access"
            ]}
          />
          <PricingTier
            name="Pro"
            price="19.99"
            features={[
              "Unlimited artworks",
              "Advanced analytics",
              "Priority support",
              "Custom profile"
            ]}
            highlighted
          />
          <PricingTier
            name="Enterprise"
            price="49.99"
            features={[
              "Everything in Pro",
              "API access",
              "Custom solutions",
              "Dedicated support"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;