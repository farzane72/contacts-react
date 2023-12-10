import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { useContacts } from "@/contexts/ContactContext";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

type FormikValuesType = {
  id:number
  fullName: string;
  srcPicture: string;
  mobile: string;
  email: string;
  job: string;
  group:string
};
type OptionTypes = {
  key: string;
  value: string;
}[];
const FormikContainer: React.FC <FormikValuesType> = ( props: FormikValuesType) => {
  //const {  fullName, srcPicture, mobile, email, job, group } = props;
  const {statusFormik, editContact,addContact,groups}=useContacts()

  const initialValues: FormikValuesType =props
  const navigate=useNavigate()
 

  //const onSubmit = (values:FormikValuesType, onSubmitProps:FormikProps<FormikValuesType>) => { console.log(values);
  const onSubmit = (
    values: FormikValuesType,
    { resetForm, setSubmitting }: FormikHelpers<FormikValuesType>
  ) => {
    console.log(values);

   
     const newValues={
      id:values.id,
      fullName: values.fullName,
      srcPicture: values.srcPicture,
      mobile: values.mobile,
      email: values.email,
      job:values.job,
      group:groups.find(item=>item.name === values.group )?.id
    }
    //-------------------------------------------------------
    if(statusFormik==="add") 
    {
     // addContact(values)
     addContact(newValues)
      toast.success('مخاطب با موفقیت ایجاد شد!',{
        position: 'top-left',
      } )
    }
      else
    {
      //editContact(props.id, values)
      editContact(props.id,newValues)
      toast.success('مخاطب با موفقیت ویرایش شد!',{
        position: 'top-left',
      } 
  )

    }
    navigate('/contacts')
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

 function Failure(e:React.MouseEvent){
  e.preventDefault(),
  navigate('/contacts')

 }


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
      enableReinitialize
    >
      {(formik) => (
        <>
       
      
       
    
        <Form className="flex flex-col">
          <FormikControl
            control="input"
            placeholder="نام و نام خانوادگی"
            type="text"
            name="fullName"
           
          />
          <FormikControl
            control="input"
            placeholder="آدرس تصویر "
            type="text"
            name="srcPicture"
          />
          <FormikControl
            control="input"
            placeholder="شماره موبایل"
            type="string"
            name="mobile"
          />
          <FormikControl
            control="input"
            placeholder="آدرس ایمیل"
            type="email"
            name="email"
          />
          <FormikControl
            control="input"
            placeholder="شغل"
            type="text"
            name="job"
          />
          <FormikControl
            control="select"
            placeholder="انتخاب گروه"
           // name="selectOption"
            name="group"
            options={dropdownOptions}
          />

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-violet-700 p-2 rounded-md "
            >
             {statusFormik==="add"?"ساخت مخاطب":"ویرایش"}
            </button>
            <button
              
              className=" bg-slate-700 p-2 rounded-md  "
              onClick={(e)=>Failure(e)}    
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
