// import React, { useState } from "react";
// import "../FormsElements/formstyle.css"
// import data from "../utils/formJson.json"
// import SelectElement from "../FormsElements/SelectElement";
// import SearchableSelect from "../FormsElements/SearchableSelect";
// import MultiSelect from "../FormsElements/MultiSelect";
// import InputElement from "../FormsElements/InputElement";
// import DateInput from "../FormsElements/DateInput";
// import CheckboxElement from "../FormsElements/CheckBoxElement";
// import RadioElement from "../FormsElements/RadioElements";
// import TimePicker from "../FormsElements/TimePicker";
// import DateTimeRangePicker from "../FormsElements/RangePicker";
// import TextareaElement from "../FormsElements/MultilineText";
// import FileUploadElement from "../FormsElements/UploadFile";

// const fields  = data.Parameter.fields;
// const FormPage = () => {
//   const [formValues, setFormValues] = useState<{ [key: string]: any }>({});
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

 

 
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

  
//     const newErrors: { [key: string]: string } = {};
//     fields.forEach((field) => {
//       if (field.field_mandatory === "yes" && !formValues[field.field_id]) {
//         newErrors[field.field_id] = field.field_error_msg_required;
//       }
//     });

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }


//     console.log("Form Values:", formValues);
//     alert("Form submitted successfully!");
//   };

//   return (
//     <form
//   onSubmit={handleSubmit}
//   className="form"
// >
//   {fields.map((field) => {
//     const fieldProps = {
//       ...field,
//       field_value: formValues[field.field_id] || "",
//       field_options: field.field_options || [],
//     };

//     switch (field.field_type) {
//       case "select":
//         return (
//           <SelectElement
//             key={field.field_id}
//             field={{ ...field, field_options: field.field_options || [] }}
//             style={{ width: "100%" }} 
//           />
//         );
//       case "searchableSelect":
//         return (
//           <SearchableSelect
//             key={field.field_id}
//             field={{ ...field, field_options: field.field_options || [] }}
//             style={{ width: "100%" }} 
//           />
//         );
//         case "multiSelect":
//           return (
//             <MultiSelect
//             key={field.field_id}
//             field={{ ...field, field_options: field.field_options || [] }}
//             style={{ width: "100%" }} 
//           />
//           );
//           case "checkbox":
//             return (
//               <CheckboxElement
//               key={field.field_id}
//               field={{ ...field, field_options: field.field_options || [] }}
//               style={{ width: "100%" }} 
//             />
//             );
//             case "date":
//               return (
//                 <DateInput
//                 key={field.field_id}
//                 field={{ ...field}}
//                 style={{ width: "100%" }} 
//               />
//               );
//               case "text":
//               case "email":
//               case "phone":
//                 return (
//                   <InputElement
//                   key={field.field_id}
//                   field={{ ...field }}
//                   style={{ width: "100%" }} 
//                 />
//                 );
//                 case "radio":
//                   return (
//                     <RadioElement
//                     key={field.field_id}
//                     field={{ ...field, field_options: field.field_options || [] }}
//                     style={{ width: "100%" }} 
//                   />
//                   );
//                   case "time":
//                     return (
//                       <TimePicker
//                       key={field.field_id}
//                       field={{ ...field }}
//                       style={{ width: "100%" }} 
//                     />
//                     );
//                     case "uploadFile":
//                       return (
//                         <FileUploadElement
//                         key={field.field_id}
//                         field={{ ...field }}
//                         style={{ width: "100%" }} 
//                       />
//                       );
//                       // case "startDateToEndDate":
//                       //   return (
//                       //     <DateTimeRangePicker
//                       //     key={field.field_id}
//                       //     field={{ ...field }}
//                       //     style={{ width: "100%" }} 
//                       //   />
//                       //   );
//                       case "multilineText":
//                       return (
//                         <TextareaElement
//                         key={field.field_id}
//                         field={{ ...field }}
//                         style={{ width: "100%" }} 
//                       />
//                       );
                

              
      
//       default:
//         return null;
//     }
//   })}

//   <div style={{ gridColumn: "1 / -1", textAlign: "center" }}>
//     <button
//     onClick={handleSubmit}
//       type="submit"
//       className="formbtn"
//     >
//       Submit
//     </button>
//   </div>
// </form>
//   );
// };

// export default FormPage;