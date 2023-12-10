
import Input from "./Input";
import Select from "./Select";

type FormikControlProps={
  placeholder:string,
  control:string,
  name:string,
  type ?:string,
  options ?:{key:string,value:string}[]   //chon bara select bayad ejbar bashe khata mide 
  //dafe bad ba type script controller nemizaram

}

const FormikControl:React.FC <FormikControlProps> = (props)=> {
  const { control,...rest } = props;
 
  


  switch (control) {
    case "input":
        return <Input {...rest} />
    case "select":
      return <Select {...rest} />
    
    default:return null
  }
}

export default FormikControl;
