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
    const isSelected = selectedField === field.id;
    
    switch (field.type) {
      case 'Identifier':
        return (
          <div className={`bg-gray-800 rounded-lg p-4 mb-4 border-2 transition-all cursor-pointer ${
            isSelected ? 'border-blue-500' : 'border-gray-700 hover:border-gray-600'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">🆔</span>
                </div>
                <span className="text-blue-400 text-sm font-medium">{field.type}</span>
              </div>
              <div className="flex gap-2">
                <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
              </div>
            </div>
            <div className="mb-3">
              <label className="text-white text-sm font-medium">
                {field.label} {field.required && <span className="text-red-400">*</span>}
              </label>
            </div>
            <select className="w-full bg-gray-700 text-gray-300 px-3 py-2.5 rounded-md border border-gray-600 focus:border-blue-400 focus:outline-none">
              <option>Select Customer</option>
            </select>
          </div>
        );

      case 'Select One':
        return (
          <div className={`bg-gray-800 rounded-lg p-4 mb-4 border-2 transition-all cursor-pointer ${
            isSelected ? 'border-blue-500' : 'border-gray-700 hover:border-gray-600'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">📊</span>
                </div>
                <span className="text-blue-400 text-sm font-medium">{field.type}</span>
              </div>
              <div className="flex gap-2">
                <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
              </div>
            </div>
            <div className="mb-3">
              <label className="text-white text-sm font-medium">
                {field.label} {field.required && <span className="text-red-400">*</span>}
              </label>
            </div>
            <div className="space-y-3">
              {field.options?.map((option, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name={field.id} 
                    className="w-4 h-4 text-blue-400 bg-gray-700 border-gray-500 focus:ring-blue-400 focus:ring-2" 
                  />
                  <label className="text-white text-sm">{option}</label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Paragraph':
        return (
          <div className={`bg-gray-800 rounded-lg p-4 mb-4 border-2 transition-all cursor-pointer ${
            isSelected ? 'border-blue-500' : 'border-gray-700 hover:border-gray-600'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">📝</span>
                </div>
                <span className="text-blue-400 text-sm font-medium">{field.type}</span>
              </div>
              <div className="flex gap-2">
                <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
              </div>
            </div>
            <div className="mb-3">
              <label className="text-white text-sm font-medium">{field.label}</label>
            </div>
            <textarea 
              className="w-full bg-gray-700 text-gray-300 px-3 py-2.5 rounded-md border border-gray-600 focus:border-blue-400 focus:outline-none resize-none"
              rows="4"
              placeholder="Please share any additional feedback..."
            />
          </div>
        );

      case 'Numeric':
        return (
          <div className={`bg-gray-800 rounded-lg p-4 mb-4 border-2 transition-all cursor-pointer ${
            isSelected ? 'border-blue-500' : 'border-gray-700 hover:border-gray-600'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">#</span>
                </div>
                <span className="text-blue-400 text-sm font-medium">{field.type}</span>
              </div>
              <div className="flex gap-2">
                <Settings className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
              </div>
            </div>
            <div className="mb-3">
              <label className="text-white text-sm font-medium">
                {field.label} {field.required && <span className="text-red-400">*</span>}
              </label>
            </div>
            <input 
              type="number" 
              className="w-full bg-gray-700 text-gray-300 px-3 py-2.5 rounded-md border border-gray-600 focus:border-blue-400 focus:outline-none"
              placeholder="Enter rating from 1 to 10"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-white font-semibold text-lg">Form Builder</span>
              <span className="text-gray-400">Customer Feedback Form</span>
              <button className="text-gray-400 hover:text-white p-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Check
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm transition-colors">
              Audit
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm transition-colors">
              Questionnaire
            </button>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              All
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm transition-colors">
              Basic
            </button>
            <div className="flex gap-1 ml-2">
              <button className="p-2 hover:bg-gray-700 rounded-md transition-colors">
                <RotateCcw className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-md transition-colors">
                <RotateCw className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-md transition-colors">
                <Maximize2 className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-md transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - AI Assistant */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 flex flex-col">
          <div className="mb-6">
            <h3 className="text-white font-semibold text-lg mb-2">AI Assistant</h3>
            <p className="text-gray-400 text-sm mb-4">Ask me to help build your form</p>
            
            <div className="space-y-3">
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">AI</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-300">Hi! I can help you create forms quickly. What type of form would you like to build?</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg p-3 text-left transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white text-sm">Create a customer feedback form with rating fields</span>
                  <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center ml-auto">
                    <span className="text-xs">👤</span>
                  </div>
                </div>
              </button>
              
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">AI</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-300">I've created a customer feedback form with identifier, rating, and comment fields. You can customize each field using the properties panel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Ask AI to modify your form..." 
                className="flex-1 bg-gray-700 text-gray-300 placeholder-gray-500 px-3 py-2 rounded-md border border-gray-600 focus:border-blue-400 focus:outline-none text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-sm transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Form Preview Area */}
          <div className="flex-1 p-6 overflow-y-auto bg-gray-900">
            <div className="max-w-3xl mx-auto">
              {/* Add Field Button */}
              <div className="text-center mb-8">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2 mx-auto transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Field
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {fields.map((field) => (
                  <div key={field.id} onClick={() => setSelectedField(field.id)}>
                    {renderField(field)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Field Properties */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 p-6">
          <h3 className="text-white font-semibold text-lg mb-6">Field Properties</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <span className="flex items-center gap-2">
                  📝 Short Name
                </span>
              </label>
              <input 
                type="text" 
                value={fieldProperties.customer_id}
                onChange={(e) => setFieldProperties({...fieldProperties, customer_id: e.target.value})}
                className="w-full bg-gray-700 text-white px-3 py-2.5 rounded-md border border-gray-600 focus:border-blue-400 focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <span className="flex items-center gap-2">
                  📊 Input Type
                </span>
              </label>
              <select 
                value={fieldProperties.inputType}
                onChange={(e) => setFieldProperties({...fieldProperties, inputType: e.target.value})}
                className="w-full bg-gray-700 text-white px-3 py-2.5 rounded-md border border-gray-600 focus:border-blue-400 focus:outline-none text-sm"
              >
                <option>Select One</option>
                <option>Identifier</option>
                <option>Paragraph</option>
                <option>Numeric</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <span className="flex items-center gap-2">
                  ⚙️ Options
                </span>
              </label>
              <div className="space-y-3">
                {fieldProperties.options.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input 
                      type="text" 
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...fieldProperties.options];
                        newOptions[index] = e.target.value;
                        setFieldProperties({...fieldProperties, options: newOptions});
                      }}
                      className="flex-1 bg-gray-700 text-white px-3 py-2.5 rounded-md border border-gray-600 focus:border-blue-400 focus:outline-none text-sm"
                    />
                    <button 
                      onClick={() => {
                        const newOptions = fieldProperties.options.filter((_, i) => i !== index);
                        setFieldProperties({...fieldProperties, options: newOptions});
                      }}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => {
                    setFieldProperties({
                      ...fieldProperties, 
                      options: [...fieldProperties.options, 'New Option']
                    });
                  }}
                  className="w-full bg-gray-700 hover:bg-gray-600 px-3 py-2.5 rounded-md text-sm text-gray-300 flex items-center justify-center gap-2 border border-gray-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Option
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-gray-300 text-sm font-medium flex items-center gap-2">
                ⭐ Required
              </span>
              <div className="relative">
                <input type="checkbox" id="required" defaultChecked className="sr-only" />
                <label htmlFor="required" className="block w-12 h-6 bg-blue-600 rounded-full cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform translate-x-6 mt-0.5"></div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-gray-300 text-sm font-medium flex items-center gap-2">
                🔍 Filterable
              </span>
              <div className="relative">
                <input type="checkbox" id="filterable" defaultChecked className="sr-only" />
                <label htmlFor="filterable" className="block w-12 h-6 bg-blue-600 rounded-full cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform translate-x-6 mt-0.5"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;