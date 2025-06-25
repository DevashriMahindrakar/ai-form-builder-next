import { useState, useCallback } from 'react';
import { FormField, FormData } from '@/types/form';
import { FormService } from '@/services/FormService';

export const useFormBuilder = () => {
  const [formData, setFormData] = useState<FormData>({
    title: 'Customer Feedback Form',
    fields: [
      {
        id: 'customer_id',
        type: 'identifier',
        label: 'Customer ID',
        required: true,
        placeholder: 'Select Customer',
        options: ['Customer A', 'Customer B'],
      },
      {
        id: 'satisfaction_rating',
        type: 'select',
        label: 'Overall Satisfaction Rating',
        required: true,
        options: ['Excellent', 'Good', 'Fair', 'Poor'],
      },
      {
        id: 'additional_comments',
        type: 'paragraph',
        label: 'Additional Comments',
        required: false,
        placeholder: 'Please share any additional feedback...',
      },
      {
        id: 'service_rating',
        type: 'numeric',
        label: 'Service Rating (1-10)',
        required: true,
        min: 1,
        max: 10,
        placeholder: 'Enter rating from 1 to 10',
      },
    ],
    currentPage: 2,
    totalPages: 2,
  });
  
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>('customer_id');
  const formService = FormService.getInstance();
  
  const addField = useCallback(() => {
    const newField = formService.createField('paragraph', 'New Field');
    setFormData(prev => ({
      ...prev,
      fields: [...prev.fields, newField],
    }));
    setSelectedFieldId(newField.id);
  }, [formService]);
  
  const updateField = useCallback((fieldId: string, updates: Partial<FormField>) => {
    setFormData(prev => ({
      ...prev,
      fields: prev.fields.map(field =>
        field.id === fieldId ? { ...field, ...updates } : field
      ),
    }));
  }, []);
  
  const deleteField = useCallback((fieldId: string) => {
    setFormData(prev => ({
      ...prev,
      fields: prev.fields.filter(field => field.id !== fieldId),
    }));
    
    if (selectedFieldId === fieldId) {
      setSelectedFieldId(null);
    }
  }, [selectedFieldId]);
  
  const duplicateField = useCallback((fieldId: string) => {
    const fieldToDuplicate = formData.fields.find(field => field.id === fieldId);
    if (fieldToDuplicate) {
      const duplicatedField = {
        ...fieldToDuplicate,
        id: `field_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        label: `${fieldToDuplicate.label} (Copy)`,
      };
      
      setFormData(prev => ({
        ...prev,
        fields: [...prev.fields, duplicatedField],
      }));
      setSelectedFieldId(duplicatedField.id);
    }
  }, [formData.fields]);
  
  const getSelectedField = useCallback(() => {
    return formData.fields.find(field => field.id === selectedFieldId) || null;
  }, [formData.fields, selectedFieldId]);
  
  return {
    formData,
    selectedFieldId,
    setSelectedFieldId,
    addField,
    updateField,
    deleteField,
    duplicateField,
    getSelectedField,
  };
};