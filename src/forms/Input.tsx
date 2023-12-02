import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
type InputProps = {
  placeholder?: string;
  name: string;
  type?: string;
  valueinput ?:string
};

//function Input(props: InputProps) {
const Input: React.FC<InputProps> = (props: InputProps) => {
  const {valueinput, placeholder, name, ...rest } = props;
  

  return (
    <div>
      <Field
        id={name}
        name={name}
        {...rest}
        placeholder={placeholder}
        className=" border border-violet-700 bg-slate-700 p-1 my-4 rounded-md text-white w-3/4"
        value={valueinput}
      >

      </Field>
      <div className=" text-sm text-red-500">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
  // component={TextError}
};

export default Input;
