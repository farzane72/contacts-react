import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";
import React from "react";
function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label className="" >
        {label}
      </label>
      <Field name={name} {...rest} >
        {({ field }) => {
          console.log(field);
          return options.map((option) => {
             return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                 checked={field.value.includes(option.value)}
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

export default CheckboxGroup;
