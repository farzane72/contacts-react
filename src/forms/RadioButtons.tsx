import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";
import React from "react";
function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label className="" htmlFor={name}>
        {label}
      </label>
      <Field name={name} {...rest} className=" border border-blue-500 p-1 my-4">
        {({ field }) => {
          console.log(field);
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioButtons;
