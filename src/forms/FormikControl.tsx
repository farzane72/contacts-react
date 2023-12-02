//import CheckboxGroup from "./CheckboxGroup";
//import DatePiker from "./DatePiker";
import Input from "./Input";
//import RadioButtons from "./RadioButtons";
import Select from "./Select";
//import Textarea from "./Textarea";
type FormikControlProps={
  placeholder:string,
  control:string,
  name:string,
  type ?:string,
  options ?:{key:string,value:string}[]


}

const FormikControl:React.FC <FormikControlProps> = (props)=> {
  const { control,...rest } = props;
 
  


  switch (control) {
    case "input":
        return <Input {...rest} />
    // case "textarea":
    //   return <Textarea {...rest} />
    case "select":
      return <Select {...rest} />
    // case "radio":
    //   return <RadioButtons {...rest} />
    // case "checkbox":
    //   return <CheckboxGroup {...rest} />
    // case "date":
    //   return <DatePiker  {...rest} />
    default:return null
  }
}

export default FormikControl;
