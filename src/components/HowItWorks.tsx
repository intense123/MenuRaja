import React from 'react';
import { Upload, QrCode, Smartphone } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Upload Your Menu',
      description: 'Simply upload your menu items, prices, and photos through our easy-to-use dashboard.',
      icon: Upload,
    },
    {
      title: 'Get Your QR Code',
      description: 'We generate a unique QR code for your menu that you can print and display.',
      icon: QrCode,
    },
    {
      title: 'Customers Scan & Order',
      description: 'Customers scan the QR code to view your beautiful digital menu on their phones.',
      icon: Smartphone,
    },
  ];

  return (
    <div className="py-16 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Three simple steps to go digital
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-24 transform translate-x-1/2">
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}