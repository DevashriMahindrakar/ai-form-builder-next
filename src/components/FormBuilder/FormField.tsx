import React from 'react';
import { FormField as FormFieldType } from '@/types/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Label from '../ui/label';
import { Hash, List, Type, MessageSquare, Trash2, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  field: FormFieldType;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onDuplicate?: () => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, isSelected, onSelect, onDelete, onDuplicate }) => {
  const getFieldIcon = () => {
    switch (field.type) {
      case 'identifier':
        return <Hash className="h-4 w-4 text-blue-400" />;
      case 'select':
        return <List className="h-4 w-4 text-green-400" />;
      case 'paragraph':
        return <MessageSquare className="h-4 w-4 text-purple-400" />;
      case 'numeric':
        return <Type className="h-4 w-4 text-orange-400" />;
      default:
        return <Type className="h-4 w-4 text-gray-400" />;
    }
  };

  const renderField = () => {
    switch (field.type) {
      case 'identifier':
      case 'select':
        if (field.type === 'select') {
          return (
            <RadioGroup>
              {field.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`${field.id}-${index}`} />
                  <Label htmlFor={`${field.id}-${index}`} className="text-sm text-gray-300">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          );
        }
        return (
          <Select>
            <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-300">
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option, index) => (
                <SelectItem key={index} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 'paragraph':
        return (
          <Textarea
            placeholder={field.placeholder}
            className="bg-gray-700 border-gray-600 text-gray-300 min-h-[100px]"
          />
        );
      case 'numeric':
        return (
          <div>
            <Input
              type="number"
              placeholder={field.placeholder}
              min={field.min}
              max={field.max}
              className="bg-gray-700 border-gray-600 text-gray-300"
            />
            {field.min !== undefined && field.max !== undefined && (
              <div className="text-xs text-gray-500 mt-1">
                Min: {field.min}, Max: {field.max}
              </div>
            )}
          </div>
        );
      default:
        return (
          <Input
            placeholder={field.placeholder}
            className="bg-gray-700 border-gray-600 text-gray-300"
          />
        );
    }
  };

  return (
    <div
      className={cn(
        "relative p-4 rounded-lg border-2 transition-all cursor-pointer",
        isSelected
          ? "border-blue-500 bg-gray-800/50"
          : "border-gray-700 bg-gray-800 hover:border-gray-600"
      )}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          {getFieldIcon()}
          <span className="text-xs font-medium text-gray-400 capitalize">
            {field.type === 'identifier' ? 'Identifier' : field.type.replace('_', ' ')}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          {onDuplicate && (
            <Button
              className="h-6 w-6 text-gray-400 hover:text-gray-200"
              onClick={e => {
                e.stopPropagation();
                onDuplicate();
              }}
            >
              <Copy className="h-3 w-3" />
            </Button>
          )}
          <Button
            className="h-6 w-6 text-gray-400 hover:text-red-400"
            onClick={e => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="mb-2">
        <Label className="text-sm font-medium text-gray-200">
          {field.label}
          {field.required && <span className="text-red-400 ml-1">*</span>}
        </Label>
      </div>
      {renderField()}
    </div>
  );
};

export default FormField;