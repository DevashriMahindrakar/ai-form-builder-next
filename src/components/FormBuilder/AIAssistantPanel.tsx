import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const AIAssistantPanel: React.FC = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-700 p-4 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-200 mb-2">AI Assistant</h3>
        <p className="text-sm text-gray-400">Ask me to help build your form</p>
      </div>
      <div className="space-y-4 mb-6">
        <div className="flex items-start space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">AI</div>
          <div className="bg-blue-600 text-white text-sm p-3 rounded-lg max-w-[200px]">
            Hi! I can help you create forms quickly. What type of form would you like to build?
          </div>
        </div>
        <div className="bg-blue-700 text-white text-sm p-3 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
          Create a customer feedback form with rating fields
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">AI</div>
          <div className="bg-gray-700 text-gray-200 text-sm p-3 rounded-lg max-w-[200px]">
            I&apos;ve created a customer feedback form with identifier, rating, and comment fields. You can customize each field using the properties panel.
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <div className="flex space-x-2">
          <Input
            placeholder="Ask AI to modify your form..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="bg-gray-800 border-gray-600 text-gray-300 text-sm"
          />
          <Button className="bg-blue-600 hover:bg-blue-700">
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPanel;
