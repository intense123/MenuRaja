import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface MenuSection {
  name: string;
  items: MenuItem[];
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuTemplateProps {
  template: {
    id: number;
    name: string;
    preview: string;
  };
  onSave: (data: any) => void;
}

export default function MenuTemplate({ template, onSave }: MenuTemplateProps) {
  const [menuData, setMenuData] = useState<{
    restaurantName: string;
    sections: MenuSection[];
  }>({
    restaurantName: '',
    sections: [
      {
        name: 'Starters',
        items: [{ name: '', description: '', price: '' }],
      },
    ],
  });

  const addSection = () => {
    setMenuData((prev) => ({
      ...prev,
      sections: [...prev.sections, { name: '', items: [{ name: '', description: '', price: '' }] }],
    }));
  };

  const addMenuItem = (sectionIndex: number) => {
    setMenuData((prev) => {
      const newSections = [...prev.sections];
      newSections[sectionIndex].items.push({ name: '', description: '', price: '' });
      return { ...prev, sections: newSections };
    });
  };

  const updateSection = (index: number, name: string) => {
    setMenuData((prev) => {
      const newSections = [...prev.sections];
      newSections[index].name = name;
      return { ...prev, sections: newSections };
    });
  };

  const updateMenuItem = (sectionIndex: number, itemIndex: number, field: keyof MenuItem, value: string) => {
    setMenuData((prev) => {
      const newSections = [...prev.sections];
      newSections[sectionIndex].items[itemIndex][field] = value;
      return { ...prev, sections: newSections };
    });
  };

  const handleSave = () => {
    onSave({
      templateId: template.id,
      ...menuData,
    });
  };

  return (
    <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Restaurant Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={menuData.restaurantName}
          onChange={(e) => setMenuData((prev) => ({ ...prev, restaurantName: e.target.value }))}
          placeholder="Enter restaurant name"
        />
      </div>

      {menuData.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8 p-4 border border-gray-200 rounded-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Section Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={section.name}
              onChange={(e) => updateSection(sectionIndex, e.target.value)}
              placeholder="e.g., Appetizers, Main Course, Desserts"
            />
          </div>

          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} className="mb-4 p-4 bg-gray-50 rounded-md">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Item Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={item.name}
                    onChange={(e) => updateMenuItem(sectionIndex, itemIndex, 'name', e.target.value)}
                    placeholder="Item name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={item.price}
                    onChange={(e) => updateMenuItem(sectionIndex, itemIndex, 'price', e.target.value)}
                    placeholder="Price"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={item.description}
                    onChange={(e) => updateMenuItem(sectionIndex, itemIndex, 'description', e.target.value)}
                    placeholder="Item description"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => addMenuItem(sectionIndex)}
            className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            Add Item
          </button>
        </div>
      ))}

      <div className="mt-4 flex justify-between">
        <button
          type="button"
          onClick={addSection}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
        >
          Add Section
        </button>

        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Save Menu
          <Save className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}