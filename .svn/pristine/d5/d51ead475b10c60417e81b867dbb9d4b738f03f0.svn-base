interface Field {
  field_id: string;
  field_label: string;
  field_mandatory?: string;
  field_minlength?: number;
  field_maxlength?: number;
  field_minvalue?: string;
  field_maxvalue?: string;
  field_value_type?: string;
  field_error_msg_required?: string;
  field_error_msg_minlength?: string;
  field_error_msg_maxlength?: string;
  field_error_msg_minvalue?: string;
  field_error_msg_maxvalue?: string;
}

export const validateField = (field: Field, value: any): string => {
  let error = "";

  // Required Field Validation
  if (field.field_mandatory === "yes" && (!value || value.trim() === "")) {
    return field.field_error_msg_required || `${field.field_label} is required.`;
  }

  // Minimum Length Validation
  if (field.field_minlength && value.length < field.field_minlength) {
    return field.field_error_msg_minlength || `Minimum ${field.field_minlength} characters required.`;
  }

  // Maximum Length Validation
  if (field.field_maxlength && value.length > field.field_maxlength) {
    return field.field_error_msg_maxlength || `Maximum ${field.field_maxlength} characters allowed.`;
  }

  // Minimum Value Validation (for numbers & dates)
  if (field.field_minvalue && Number(value) < Number(field.field_minvalue)) {
    return field.field_error_msg_minvalue || `Value should be greater than ${field.field_minvalue}.`;
  }

  // Maximum Value Validation (for numbers & dates)
  if (field.field_maxvalue && Number(value) > Number(field.field_maxvalue)) {
    return field.field_error_msg_maxvalue || `Value should be less than ${field.field_maxvalue}.`;
  }

  return error;
};