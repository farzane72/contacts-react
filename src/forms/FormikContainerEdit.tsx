import { Formik, Form, FormikHelpers,Field } from "formik";
//import { FormEvent } from "react";

import * as Yup from "yup";
//import FormikControl from "./FormikControl";
//import { useContacts } from "@/contexts/ContactContext";
//import { SetData } from "@/services/api/ApiContacts";
import Input from "./Input";
//import Select from "./Select";
//import { useNavigate } from "react-router-dom";

type FormikValuesType = {
  id?:number,
  fullName: string;
  srcPicture: string;
  mobile: string;
  email: string;
  job: string;
  //group:string,
//  selectOption: { key: string; value: string }[];
//selectOption:string
group:string
};
type OptionTypes = {
  key: string;
  value: string;
}[];


const FormikContainer: React.FC <FormikValuesType>= (props:FormikValuesType) => {
  console.log(props)
  const {id,fullName,srcPicture,mobile,email,job,group}=props

 // const{dispatch,editValue}=useContacts()
  //--------------------------------------------------------------------
  const initialValues: FormikValuesType = {
    
    // email: "",
    // group:"",
    // fullName: "",
    // srcPicture: "",
    // mobile: "",
    // job: "",

    email: email,
     group:group,
     fullName: fullName,
     srcPicture: srcPicture,
     mobile: mobile,
    job: job,
   
  };
  // function handlerChangeTest( { setFieldValue }: FormikHelpers<FormikValuesType>,event:React.ChangeEvent<{ value: string }>){
  //   console.log("event"+event?.target?.value);
  //  // let target=event.target as HTMLInputElement
  //  setFieldValue(fullName,fullName)
  // }

  //const onSubmit = (values:FormikValuesType, onSubmitProps:FormikProps<FormikValuesType>) => { console.log(values);
  const onSubmit = (
    values: FormikValuesType,
    { resetForm, setSubmitting,setFieldValue }: FormikHelpers<FormikValuesType>,
    //e :FormEvent<HTMLFormElement>
   // e:React.FormEvent<HTMLInputElement>
  ) => {
    console.log("before set",values);
    console.log("before set fullname",fullName);
   // let target=e.target as HTMLInputElement
 //console.log(target.value);
setFieldValue(fullName,fullName)
console.log("values.fullName",values.fullName);
console.log("after set",values.fullName);
    // { setSubmitting }: FormikHelpers<Values>
    console.log("saved data", JSON.parse(JSON.stringify(values)));
   // SetData({endPoint:"contacts",data:values})
   // dispatch({ type: "add", payload: values});
    resetForm();
    setSubmitting(false);
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    email: Yup.string().email("آدرس ایمیل نا معتبر است").required("آدرس ایمیل الزامی می باشد"),
    srcPicture: Yup.string().required("تصویر مخاطب الزامی می باشد"),
    mobile: Yup.string()
      .required("شماره تماس الزامی می باشد")
      .min(11, "شماره تماس باید ۱۱ رقم باید باشد")
      .max(11, "شماره تماس بایذ ۱۱ رقم باید باشد"),
   // selectOption: Yup.string().required("انتخاب گروه الزامی می باشد"),
    group: Yup.string().required("انتخاب گروه الزامی می باشد"),
  });
  const dropdownOptions: OptionTypes = [
    { key: "انتخاب گروه", value: "" },
    { key: "همکار", value: "همکار" },
    { key: "دوست", value: "دوست" },
    { key: "فامیل", value: "فامیل" },
    { key: "آشنا", value: "آشنا" },
    { key: "سرویس", value: "سرویس" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
     
     // validationSchema={validationSchema}
      validateOnMount
      enableReinitialize={true}

    >
       {({handleChange}) => (
        <>
       
      
       
    {/* FormikProps,FieldProps,FieldAttributes,FieldInputProps  */}
        <Form className="flex flex-col">

        <Field
        id={fullName}
        name={fullName}
        className=" border border-violet-700 bg-slate-700 p-1 my-4 rounded-md text-white w-3/4"
        value={fullName}
        onChange={handleChange}
       
      >

      </Field> 

           {/* <Input
            type="text"
            name="fullName"
            valueinput={fullName}
            //onChange={({ setFieldValue }: FormikHelpers<FormikValuesType>)=>setFieldValue(fullName,"test")}
           
             />  */}
             {/* <input
              type="text"
              name="fullName"
              value={fullName}
            //  onChange={({ setFieldValue }: FormikProps<FormikValuesType>)=>setFieldValue(fullName,"test")}
              /> */}
         
          <Input
            type="text"
            name="srcPicture"
            valueinput={srcPicture}
          />
          <Input
            type="string"
            name="mobile"
            valueinput={mobile}
          />
          <Input
            type="email"
            name="email"
            valueinput={email}
          />
          <Input
            type="text"
            name="job"
            valueinput={job}
          />
          <Input
            type="text"
            name="group"
            valueinput={group}
          />

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-violet-700 p-2 rounded-md "
            >
            ویرایش مخاطب
            </button>
            <button
              type="submit"
              className=" bg-slate-700 p-2 rounded-md  "
            >
             انصراف
            </button>
          </div>
        </Form>
        </>
      )}
     
    </Formik>
  );
};

export default FormikContainer;
