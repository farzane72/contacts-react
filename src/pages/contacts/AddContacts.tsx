import FormikContainer from "@/forms/FormikContainer";


interface ContactValues {
  id:number,
  fullName: string;
  srcPicture: string;
  mobile: string;
  email: string;
  job: string;
  //selectOption: string;
  group:string
}
const contact={
   id:0,
  fullName: "",
  srcPicture: "",
  mobile: "",
  email: "",
  job:"",
  group:""
}

const AddContacts: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <h1 className="text-green-600 font-bold text-lg text-center p-4 border-b border-gray-100/10">
          ساخت مخاطب جدید
        </h1>
      </div>
      <div className=" flex gap-8 ">
       
        <div className="basis-1/2 h-full">
            <FormikContainer { ...contact} />

        </div>
        <div className="basis-1/2 min-h-screen">
          <img className="w-full h-full object-cover" src="../src/assets/images/1.avif" />
        </div>
      </div>


    </div>
    
  );
};

export default AddContacts;
