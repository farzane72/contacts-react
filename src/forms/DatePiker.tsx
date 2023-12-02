import { useState } from "react";
import { Field, ErrorMessage } from "formik";

import DatePicker from "react-datepicker";
import DateView from "react-datepicker";
import TextError from "./TextError";

import "react-datepicker/dist/react-datepicker.css";

function DatePiker(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label className="" htmlFor={name}>
        {label}
      </label>
      <Field name={name} >
        {({ form,field }) => {
        console.log(form,field);
         const {setFieldValue}=form
         const {value} =field
         return(
       // <div>'jhh'</div>
            <DateView id={name} {...field} {...rest} 
            selected={value} onChange={val=>setFieldValue(name,val)} />
            // <DatePicker id={name} {...field} {...rest} 
            // selected={value} onchange={val=>setFieldValue(name,val)} />

         ) 
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePiker;
