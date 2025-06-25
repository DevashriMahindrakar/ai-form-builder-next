import React from 'react';
import { FormField } from '@/types/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import Label from '@/components/ui/label';
import { Plus, X } from 'lucide-react';

interface FieldPropertiesPanelProps {
  field: FormField | null;
  onUpdateField: (updates: Partial<FormField>) => void;
}

const FieldPropertiesPanel: React.FC<FieldPropertiesPanelProps> = ({ field, onUpdateField }) => {
  if (!field) {
    return (
      <div className="w-80 bg-gray-900 border-l border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Field Properties</h3>
        <p className="text-gray-400 text-sm">Select a field to edit its properties</p>
      </div>
    );
  }

  return (
    <div className="w-80 bg-gray-900 border-l border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-200 mb-4">Field Properties</h3>
      <div className="space-y-4">
        <div>
          <Label className="text-sm text-gray-300 mb-2 block">Short Name</Label>
          <Input value={field.id} className="bg-gray-800 border-gray-600 text-gray-300" disabled />
        </div>
        <div>
          <Label className="text-sm text-gray-300 mb-2 block">Input Type</Label>
          <Select value={field.type} onValueChange={(value: string) => onUpdateField({ type: value as FormField['type'] })}>
            <SelectTrigger className="bg-gray-800 border-gray-600 text-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="identifier">Identifier</SelectItem>
              <SelectItem value="select">Select One</SelectItem>
              <SelectItem value="paragraph">Paragraph</SelectItem>
              <SelectItem value="numeric">Numeric</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {(field.type === 'select' || field.type === 'identifier') && (
          <div>
            <Label className="text-sm text-gray-300 mb-2 block">Options</Label>
            <div className="space-y-2">
              {field.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    value={option}
                    onChange={e => {
                      const newOptions = [...(field.options || [])];
                      newOptions[index] = e.target.value;
                      onUpdateField({ options: newOptions });
                    }}
                    className="bg-gray-800 border-gray-600 text-gray-300 flex-1"
                  />
                  <Button
                    className="h-8 w-8 text-red-400 hover:text-red-300"
                    onClick={() => {
                      const newOptions = field.options?.filter((_, i) => i !== index);
                      onUpdateField({ options: newOptions });
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 border"
                onClick={() => {
                  const newOptions = [...(field.options || []), 'New Option'];
                  onUpdateField({ options: newOptions });
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Option
              </Button>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <Label className="text-sm text-gray-300">Required</Label>
          <Switch checked={field.required} onCheckedChange={(checked: boolean) => onUpdateField({ required: checked })} />
        </div>
        <div className="flex items-center justify-between">
          <Label className="text-sm text-gray-300">Filterable</Label>
          <Switch checked={field.filterable} onCheckedChange={(checked: boolean) => onUpdateField({ filterable: checked })} />
        </div>
      </div>
    </div>
  );
};

export default FieldPropertiesPanel;
