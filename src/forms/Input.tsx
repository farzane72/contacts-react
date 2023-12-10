import { Field, ErrorMessage,useFormikContext } from "formik";

//import TextError from "./TextError";
type InputProps = {
  placeholder?: string;
  name: string;
  type?: string;
 
  
};

//function Input(props: InputProps) {
const Input: React.FC<InputProps> = (props: InputProps) => {
  const { placeholder, name, ...rest } = props;
  const { setFieldValue} = useFormikContext<InputProps>();
  const {errors}=useFormikContext<InputProps>()
  console.log("errors.name",errors.name) 
  return (
    
    <div>
      <Field
        id={name}
        name={name}
        {...rest}
        placeholder={placeholder}
        className=" border border-violet-700 bg-slate-700 p-1 my-4 rounded-md text-white w-3/4"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFieldValue(name, e.target.value as string);
        }}

      >

      </Field>
      
        
        {
          errors.name??(
          <div className=" text-sm text-red-500">
          <ErrorMessage name={name}  />
        </div>
        )

        }
        
        
        
       

     
      
    </div>
  );
  // component={TextError}
};

export default Input;
