import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";
function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <>
      <label className="" htmlFor={name}>
        {label}
      </label>
      <Field as='textarea'
        id={name}
        name={name}
        {...rest}
        className=" border border-blue-500 p-1 my-4"
      ></Field>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
}

export default Textarea;
