import { FormField } from '@/types/form';

export class FormService {
  private static instance: FormService;
  
  private constructor() {}
  
  public static getInstance(): FormService {
    if (!FormService.instance) {
      FormService.instance = new FormService();
    }
    return FormService.instance;
  }
  
  public createField(type: FormField['type'], label: string): FormField {
    const baseField: FormField = {
      id: `field_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type,
      label,
      required: false,
      filterable: false,
    };
    
    switch (type) {
      case 'identifier':
        return {
          ...baseField,
          placeholder: 'Select Customer',
          options: ['Customer A', 'Customer B'],
        };
      case 'select':
        return {
          ...baseField,
          options: ['Excellent', 'Good', 'Fair', 'Poor'],
        };
      case 'paragraph':
        return {
          ...baseField,
          placeholder: 'Please share any additional feedback...',
        };
      case 'numeric':
        return {
          ...baseField,
          min: 1,
          max: 10,
          placeholder: 'Enter rating from 1 to 10',
        };
      default:
        return baseField;
    }
  }
  
  public validateField(field: FormField): string[] {
    const errors: string[] = [];
    
    if (!field.label.trim()) {
      errors.push('Field label is required');
    }
    
    if (field.type === 'numeric') {
      if (field.min !== undefined && field.max !== undefined && field.min >= field.max) {
        errors.push('Minimum value must be less than maximum value');
      }
    }
    
    if ((field.type === 'select' || field.type === 'identifier') && (!field.options || field.options.length === 0)) {
      errors.push('At least one option is required');
    }
    
    return errors;
  }
}
