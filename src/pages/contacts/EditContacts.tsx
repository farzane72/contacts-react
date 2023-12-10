import { GetContacts } from "@/services/api/ApiContacts";
import { LoaderFunctionArgs } from "react-router-dom";
import { useContacts } from "@/contexts/ContactContext";
import { useLoaderData } from "react-router-dom";
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


function EditContacts() {
   const {groups}=useContacts()
   const contact = useLoaderData() as ContactValues;
   const newContact={
    id:contact.id,
    email: contact.email,
    group:groups.find(item=>item.id === contact.group)?.name||"",
    fullName: contact.fullName,
    srcPicture: contact.srcPicture,
    mobile: contact.mobile,
    job:contact.job
  } 
  // console.log("in edit",contact);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center border-b pb-4">
        <h1 className="text-lg text-orange-500  ">
          ویرایش مخاطب
        </h1>
      </div>
      <div className="bg-slate-700 p-5 rounded-md  w-full  flex  gap-2 mt-4 ">
        <div className="basis-2/5">
          
            {/* <FormikContainerEdit {...contact}/> */}
             <FormikContainer {...newContact}/>
        </div>
       
       
        <div className=" flex items-center justify-center basis-2/5  ">
          <img
            className="w-full h-[250px] rounded-md "
            
           src={contact.srcPicture}
          />
        </div>
      </div>
    </div>
  );
}

export async function loader( {params }: LoaderFunctionArgs) {
    const contact = GetContacts({ endPoint: "contacts/" ,
    params: params.contactId,
});
        //dispatch({type:"setEditContact",data:contact})
   // console.log("edit",contact);
    return contact;
  }

export default EditContacts;
//   {`/contacts/edit/${id}`}>