import { GetContacts } from "@/services/api/ApiContacts";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { useContacts } from "@/contexts/ContactContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface SingleContactProps {
  fullName: string;
  srcPicture: string;
  mobile: string;
  email: string;
  job: string;
  group: string;
}

const SingleContact: React.FunctionComponent = () => {
  const product = useLoaderData() as SingleContactProps;
  const { fullName, srcPicture, mobile, email, job, group } = product;
  const {editGroup,groups}=useContacts()
  useEffect(() => {
    editGroup()
    
   }, []);

  return (
    // <div className="container mx-auto">
    <div className="bg-slate-700 p-5 rounded-md   ">
      <div className=" flex gap-8  h-[190px] ">
        <div className=" flex items-center justify-center w-[400px] ">
          <img className=" w-full h-full rounded-md " src={srcPicture} />
        </div>
        <div className="w-full h-full ">
          <div className="flex flex-col rounded-md bg-zinc-100 overflow-hidden text-sm  ">
            <p className="border border-b flex p-2 whitespace-nowrap">
              <span> نام و نام خانوادگی:</span>
              <span>{fullName}</span>
            </p>
            <p className="border border-b p-2">
              <span> شماره موبایل:</span>
              <span>{mobile} </span>
            </p>
            <p className="border border-b p-2">
              <span> آدرس ایمیل:</span>
              <span> {email}</span>
            </p>
            <p className="border border-b p-2">
              <span>: شغل</span>
              <span> {job}</span>
            </p>
            <p className="border border-b p-2">
              <span>گروه:</span>
              <span> {groups.find(item=>item.id === group)?.name}</span>
            </p>
          </div>
        </div>
      </div>
      <Link to="/contacts">
      <div className="flex justify-center mt-4">
        <button className="bg-violet-700 p-2 rounded-md sm:w-[300px] md:sm:w-[500px]">برگشت به صفحه اصلی</button>
      </div>
      </Link>
    </div>

    // </div>
  );
};

export async function loader({ params }: LoaderFunctionArgs) {
  console.log(params);
  const contact = GetContacts({
    endPoint: "contacts/",
    params: params.contactId,
  });
  return contact;
}

export default SingleContact;
