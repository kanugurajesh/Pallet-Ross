import React from 'react';
import { ShoppingCart, CreditCard, Package } from 'lucide-react';

const ECommerce: React.FC = () => {
  return (
    <section id="e-commerce" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">E-Commerce Solutions</h2>
          <p className="mt-4 text-lg text-gray-600">Sell your artwork globally with our powerful e-commerce tools</p>
        </div>
        <div className="mt-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <ShoppingCart className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold">Easy Shopping</h3>
              <p className="mt-2 text-center text-gray-600">Intuitive shopping experience for your customers</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <CreditCard className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold">Secure Payments</h3>
              <p className="mt-2 text-center text-gray-600">Multiple payment options with enhanced security</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Package className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold">Global Shipping</h3>
              <p className="mt-2 text-center text-gray-600">Worldwide shipping with tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ECommerce;