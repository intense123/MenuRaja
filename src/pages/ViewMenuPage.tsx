import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  name: string;
  items: MenuItem[];
}

interface MenuData {
  restaurantName: string;
  sections: MenuSection[];
  templateId?: number;
}

export default function ViewMenuPage() {
  const { menuId } = useParams();
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    try {
      if (!menuId) return;
      
      // Decode the base64 menu data
      const decodedData = atob(menuId);
      const parsedData = JSON.parse(decodedData);
      setMenuData(parsedData);
    } catch (err) {
      setError('Unable to load menu data');
    }
  }, [menuId]);

  if (error) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-50 p-4 rounded-md">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!menuData) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {menuData.restaurantName}
          </h1>

          {menuData.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                {section.name}
              </h2>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <div className="ml-4">
                      <span className="text-lg font-medium text-gray-900">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}