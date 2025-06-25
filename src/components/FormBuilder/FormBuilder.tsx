"use client";

import React, { useState } from 'react';
import { Settings, Trash2, Plus, ChevronLeft, ChevronRight, RotateCcw, RotateCw, Maximize2, MoreHorizontal, Save, Eye, FileText, Layers } from 'lucide-react';

const FormBuilder = () => {
  const [selectedField, setSelectedField] = useState('customer_id');
  const [currentPage, setCurrentPage] = useState(2);
  const [totalPages] = useState(2);
  const [fieldProperties, setFieldProperties] = useState({
    customer_id: 'customer_id',
    inputType: 'Select One',
    options: ['Customer A', 'Customer B']
  });

  const fields = [
    {
      id: 'customer_id',
      type: 'Identifier',
      label: 'Customer ID',
      required: true,
      icon: '🆔'
    },
    {
      id: 'satisfaction_rating',
      type: 'Select One',
      label: 'Overall Satisfaction Rating',
      required: true,
      icon: '📊',
      options: ['Excellent', 'Good', 'Fair', 'Poor']
    },
    {
      id: 'additional_comments',
      type: 'Paragraph',
      label: 'Additional Comments',
      required: false,
      icon: '📝'
    },
    {
      id: 'service_rating',
      type: 'Numeric',
      label: 'Service Rating (1-10)',
      required: true,
      icon: '#️⃣'
    }
  ];

  const FieldIcon = ({ type }) => {
    const icons = {
      'Identifier': '🆔',
      'Select One': '📊',
      'Paragraph': '📝',
      'Numeric': '#️⃣'
    };
    return <span className="text-blue-400">{icons[type] || '📝'}</span>;
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'Identifier':
        return (
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FieldIcon type={field.type} />
                <span className="text-blue-400 text-sm font-medium">{field.type}</span>
              </div>
              <div className="flex gap-2">
                <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
              </div>
            </div>
            <div className="mb-2">
              <label className="text-white text-sm">
                {field.label} {field.required && <span className="text-red-400">*</span>}
              </label>
            </div>
            <select className="w-full bg-gray-600 text-gray-300 px-3 py-2 rounded border border-gray-500 focus:border-blue-400 focus:outline-none">
              <option>Select Customer</option>
            </select>
          </div>
        );

      case 'Select One':
        return (
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FieldIcon type={field.type} />
                <span className="text-blue-400 text-sm font-medium">{field.type}</span>
              </div>
              <div className="flex gap-2">
                <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
              </div>
            </div>
            <div className="mb-3">
              <label className="text-white text-sm">
                {field.label} {field.required && <span className="text-red-400">*</span>}
              </label>
            </div>
            <div className="space-y-2">
              {field.options?.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name={field.id} 
                    className="w-4 h-4 text-blue-400 bg-gray-600 border-gray-500 focus:ring-blue-400" 
                  />
                  <label className="text-white text-sm">{option}</label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Paragraph':
        return (
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FieldIcon type={field.type} />
                <span className="text-blue-400 text-sm font-medium">{field.type}</span>
              </div>
              <div className="flex gap-2">
                <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
              </div>
            </div>
            <div className="mb-2">
              <label className="text-white text-sm">{field.label}</label>
            </div>
            <textarea 
              className="w-full bg-gray-600 text-gray-300 px-3 py-2 rounded border border-gray-500 focus:border-blue-400 focus:outline-none resize-none"
              rows="4"
              placeholder="Please share any additional feedback..."
            />
          </div>
        );

      case 'Numeric':
        return (
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FieldIcon type={field.type} />
                <span className="text-blue-400 text-sm font-medium">{field.type}</span>
              </div>
              <div className="flex gap-2">
                <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
              </div>
            </div>
            <div className="mb-2">
              <label className="text-white text-sm">
                {field.label} {field.required && <span className="text-red-400">*</span>}
              </label>
            </div>
            <input 
              type="number" 
              className="w-full bg-gray-600 text-gray-300 px-3 py-2 rounded border border-gray-500 focus:border-blue-400 focus:outline-none"
              placeholder="Enter rating from 1 to 10"
            />
            <div className="text-gray-400 text-xs mt-1">Min: 1, Max: 10</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">Form Builder</span>
              <span className="text-gray-400">Customer Feedback Form</span>
              <button className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded text-sm font-medium">
              Check
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded text-sm">
              Audit
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded text-sm">
              Questionnaire
            </button>
            <button className="bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded text-sm font-medium">
              All
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded text-sm">
              Basic
            </button>
            <div className="flex gap-1 ml-2">
              <button className="p-1.5 hover:bg-gray-700 rounded">
                <RotateCcw className="w-4 h-4" />
              </button>
              <button className="p-1.5 hover:bg-gray-700 rounded">
                <RotateCw className="w-4 h-4" />
              </button>
              <button className="p-1.5 hover:bg-gray-700 rounded">
                <Maximize2 className="w-4 h-4" />
              </button>
              <button className="p-1.5 hover:bg-gray-700 rounded">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Left Sidebar - AI Assistant */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
          <div className="mb-6">
            <h3 className="text-white font-medium mb-2">AI Assistant</h3>
            <p className="text-gray-400 text-sm mb-4">Ask me to help build your form</p>
            
            <div className="space-y-3">
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs">🤖</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-300">Hi! I can help you create forms quickly. What type of form would you like to build?</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg p-3 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white text-sm font-medium">Create a customer feedback form with rating fields</span>
                  <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">👤</span>
                  </div>
                </div>
              </button>
              
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs">🤖</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-300">I've created a customer feedback form with identifier, rating, and comment fields. You can customize each field using the properties panel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="bg-gray-700 rounded-lg p-3 mb-4">
              <input 
                type="text" 
                placeholder="Ask AI to modify your form..." 
                className="w-full bg-transparent text-gray-300 placeholder-gray-500 outline-none text-sm"
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg p-2 text-sm">
              Send
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Form Preview Area */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-2xl mx-auto">
              {/* Add Field Button */}
              <div className="text-center mb-6">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 mx-auto">
                  <Plus className="w-4 h-4" />
                  Add Field
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {fields.map((field) => (
                  <div key={field.id} onClick={() => setSelectedField(field.id)}>
                    {renderField(field)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center py-4 border-t border-gray-700">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <span className="text-gray-800 text-sm font-medium">
                {currentPage} / {totalPages}
              </span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Field Properties */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 p-4">
          <h3 className="text-white font-medium mb-4">Field Properties</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                <span className="flex items-center gap-1">
                  📝 Short Name
                </span>
              </label>
              <input 
                type="text" 
                value={fieldProperties.customer_id}
                onChange={(e) => setFieldProperties({...fieldProperties, customer_id: e.target.value})}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-400 focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                <span className="flex items-center gap-1">
                  📊 Input Type
                </span>
              </label>
              <select 
                value={fieldProperties.inputType}
                onChange={(e) => setFieldProperties({...fieldProperties, inputType: e.target.value})}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-400 focus:outline-none text-sm"
              >
                <option>Select One</option>
                <option>Identifier</option>
                <option>Paragraph</option>
                <option>Numeric</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                <span className="flex items-center gap-1">
                  ⚙️ Options
                </span>
              </label>
              <div className="space-y-2">
                {fieldProperties.options.map((option, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <input 
                      type="text" 
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...fieldProperties.options];
                        newOptions[index] = e.target.value;
                        setFieldProperties({...fieldProperties, options: newOptions});
                      }}
                      className="flex-1 bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-400 focus:outline-none text-sm mr-2"
                    />
                    <button 
                      onClick={() => {
                        const newOptions = fieldProperties.options.filter((_, i) => i !== index);
                        setFieldProperties({...fieldProperties, options: newOptions});
                      }}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => {
                    setFieldProperties({
                      ...fieldProperties, 
                      options: [...fieldProperties.options, `Option ${fieldProperties.options.length + 1}`]
                    });
                  }}
                  className="w-full bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm text-gray-300 flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Option
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm flex items-center gap-1">
                ⭐ Required
              </span>
              <div className="relative">
                <input type="checkbox" defaultChecked className="sr-only" />
                <div className="w-10 h-6 bg-blue-600 rounded-full shadow-inner"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform translate-x-4"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm flex items-center gap-1">
                🔍 Filterable
              </span>
              <div className="relative">
                <input type="checkbox" defaultChecked className="sr-only" />
                <div className="w-10 h-6 bg-blue-600 rounded-full shadow-inner"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform translate-x-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;