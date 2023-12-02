import { Formik, Form, FormikHelpers, FormikProps,FieldProps,FieldAttributes,FieldInputProps } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { useContacts } from "@/contexts/ContactContext";
import { SetData } from "@/services/api/ApiContacts";

type FormikValuesType = {
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
const FormikContainer: React.FC = () => {

  const{dispatch}=useContacts()
  const initialValues: FormikValuesType = {
    email: "",
    // description:'',
   // selectOption: [],
   //selectOption: "",
    ////radioOption:'',
    //checkboxOption:[],
    // birthDate:null
    group:"",
    fullName: "",
    srcPicture: "",
    mobile: "",
    //email:"",
    job: "",
    //group:""
  };

  //const onSubmit = (values:FormikValuesType, onSubmitProps:FormikProps<FormikValuesType>) => { console.log(values);
  const onSubmit = (
    values: FormikValuesType,
    { resetForm, setSubmitting }: FormikHelpers<FormikValuesType>
  ) => {
    console.log(values);

    // { setSubmitting }: FormikHelpers<Values>
    console.log("saved data", JSON.parse(JSON.stringify(values)));
    SetData({endPoint:"contacts",data:values})
    dispatch({ type: "add", payload: values});
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
      validationSchema={validationSchema}
      //validateOnMount
      //enableReinitialize
    >
      {(formik) => (
        <>
       
      
       
    {/* FormikProps,FieldProps,FieldAttributes,FieldInputProps  */}
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
             ساخت مخاطب
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
