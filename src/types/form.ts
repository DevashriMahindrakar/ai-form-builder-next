export interface FormField {
  id: string;
  type: 'identifier' | 'select' | 'paragraph' | 'numeric';
  label: string;
  required: boolean;
  filterable?: boolean;
  placeholder?: string;
  options?: string[];
  min?: number;
  max?: number;
}

export interface FormData {
  title: string;
  fields: FormField[];
  currentPage: number;
  totalPages: number;
}
