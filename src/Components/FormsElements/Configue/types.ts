export interface FieldOption {
  option_label: string;
  value: string;
}

export interface FieldOptionSrc {
  field_option_check_local_storage: string;
  field_option_src_context: string;
  field_option_src_critieria: string;
  field_option_label: string;
  field_option_value: string;
  field_select_all_label: string;
  field_select_all_value: string;
  field_option_attributes: string[];
}

export interface Field {
  field_id: string;
  field_label: string;
  field_value: string;
  field_mandatory: string;
  field_placeholder: string;
  field_default_value: string;
  field_option_src: FieldOptionSrc;
  field_options: FieldOption[];
  field_type: string;
  field_minlength: string;
  field_maxlength: string;
  field_minvalue: string;
  field_maxvalue: string;
  field_value_type: string;
  field_past_Disable: string;
  field_on_blur: string;
  field_disabled: string;
  field_error_msg_required: string;
  field_error_msg_minlength: string;
  field_error_msg_maxlength: string;
  field_error_msg_minvalue: string;
  field_error_msg_maxvalue: string;
  field_error_msg_uq: string;
  field_apipath: string;
}
