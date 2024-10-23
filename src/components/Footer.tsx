import React from 'react';
import { QrCode } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <div className="flex items-center">
            <QrCode className="h-6 w-6 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">MenuRaja</span>
          </div>
        </div>
        <div className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} MenuRaja. All rights reserved.
        </div>
      </div>
    </footer>
  );
}