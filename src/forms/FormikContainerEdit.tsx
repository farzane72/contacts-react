import {
  Formik,
  Form,
  FormikHelpers,
  Field,
  useFormikContext,
  ErrorMessage,
} from "formik";
import { useEffect, useState } from "react";
import { useContacts } from "@/contexts/ContactContext";

import * as Yup from "yup";


type Group = {
  id: string;
  name: string;
};
type FormikValuesType = {
  id?: number;
  fullName: string;
  srcPicture: string;
  mobile: string;
  email: string;
  job: string;
  group: string;
};
type OptionTypes = {
  key: string;
  value: string;
}[];
//export const BusinessLogic :React.FC<FormikValuesType>=(props: FormikValuesType) => {
//const { id, fullName, srcPicture, mobile, email, job, group } = props;

//  const { values,setFieldValue,setValues} = useFormikContext<FormikValuesType>();

//  const [user, setUser] = useState <any>({props});
//   useEffect(() => {

//    setUser(props)

//     const fields = ['fullName', 'srcPicture', 'mobile', 'email', 'job','group'];
//    fields.forEach(field => setFieldValue(field, user[field], true));

//   console.log(user);
// console.log("values",values);
//dispatch({ type: "dataGroup", payload:id })
// useEffect(() => {
//   editGroup(props.id)

//  }, []);
//  return null;
//};

const FormikContainerEdit: React.FC<FormikValuesType> = (
  props: FormikValuesType
) => {
  //console.log(props);
  const { id, fullName, srcPicture, mobile, email, job, group } = props;
  const { editContact, groupValue, editGroup,groups } = useContacts();
  // const { values,setFieldValue,setValues} = useFormikContext<FormikValuesType>();

  const onSubmit = (values: FormikValuesType) => {
    console.log("values", values);
    editContact(id, values);
  };
  const initialValues: FormikValuesType = {
    // email: "",
    // group: "",
    // fullName: "",
    // srcPicture: "",
    // mobile: "",
    // job: "",
    id: id,
    email: email,
    //group:groupValue.name ,
  //  group: groupValue.name,
    group:groups.find(item=>item.id === group)?.name||"",
    fullName: fullName,
    srcPicture: srcPicture,
    mobile: mobile,
    job: job,
  };
  const validationSchema = Yup.object({
    fullName: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    email: Yup.string()
      .email("آدرس ایمیل نا معتبر است")
      .required("آدرس ایمیل الزامی می باشد"),
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

  useEffect(() => {
   // editGroup(group);
   editGroup()
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
      enableReinitialize={true}
    >
      {({ handleChange, values, setFieldValue }) => (
        <>
          <Form>
            <Field
              id={fullName}
              name="fullName"
              className=" border border-violet-700 bg-slate-700 p-1 my-4 rounded-md text-white w-3/4"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("fullName", e.target.value as string);
              }}
            ></Field>
            <div className=" text-sm text-red-500">
              <ErrorMessage name="fullName" />
            </div>
            <Field
              id={srcPicture}
              name="srcPicture"
              className=" border border-violet-700 bg-slate-700 p-1 my-4 rounded-md text-white w-3/4"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("srcPicture", e.target.value as string);
              }}
            ></Field>
            <div className=" text-sm text-red-500">
              <ErrorMessage name="srcPicture" />
            </div>
            <Field
              id={mobile}
              name="mobile"
              className=" border border-violet-700 bg-slate-700 p-1 my-4 rounded-md text-white w-3/4"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("mobile", e.target.value as string);
              }}
            ></Field>
            <div className=" text-sm text-red-500">
              <ErrorMessage name="mobile" />
            </div>
            <Field
              id={email}
              name="email"
              type="email"
              className=" border border-violet-700 bg-slate-700 p-1 my-4 rounded-md text-white w-3/4"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("email", e.target.value as string);
              }}
            ></Field>
            <div className=" text-sm text-red-500">
              <ErrorMessage name="email" />
            </div>
            <Field
              id={job}
              name="job"
              className=" border border-violet-700 bg-slate-700 p-1 my-4 rounded-md text-white w-3/4"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue("job", e.target.value as string);
              }}
            ></Field>
            <div className=" text-sm text-red-500">
              <ErrorMessage name="job" />
            </div>
            <Field
                as="select"
              id={group}
              name="group"
              // options={dropdownOptions}
              className=" border border-violet-700 bg-slate-700 p-1 my-4 rounded-md text-white w-3/4"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const selectedGroup=groups.find(item=>item.name === e.target.value )?.id 
               // setFieldValue("group", e.target.value as string);
               setFieldValue("group", selectedGroup);
               
              }}
            >
              {dropdownOptions.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.key}
                  </option>
                );
              })}
            </Field>
            <div className=" text-sm text-red-500">
              <ErrorMessage name="group" />
            </div>

            {/* <BusinessLogic {...props} />  */}
            <button type="submit" className="bg-violet-700 p-2 rounded-md ">
              ویرایش مخاطب
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default FormikContainerEdit;
