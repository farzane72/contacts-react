import { Field, ErrorMessage,useFormikContext } from "formik";

import { useContacts } from "@/contexts/ContactContext";
//import TextError from "./TextError";
type SelectProps = {
  placeholder ?: string;
  name: string;
  //type?: string;
  options : { key: string; value: string }[];
  
};

function Select(props: SelectProps) {
  const { placeholder, name, options, ...rest } = props;
 // const {editGroup,groups}=useContacts()
  //const { setFieldValue} = useFormikContext<SelectProps>();

 
 
  return (
    <div>
      <Field
        as="select"
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
        className=" border border-violet-700 bg-slate-700 p-1 my-4 rounded-md text-white placeholder:text-white w-3/4"
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        //   const selectedGroup=groups.find(item=>item.name === e.target.value )?.id 
        //  // setFieldValue("group", e.target.value as string);
        //  setFieldValue("group", selectedGroup);
         
        //}}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <div className=" text-sm text-red-500">
        <ErrorMessage name={name} />
      </div>
      {/* <ErrorMessage name={name} component={TextError} /> */}
    </div>
  );
}

export default Select;
