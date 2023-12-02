import { Link } from "react-router-dom";
import { useContacts } from "@/contexts/ContactContext";
interface ContacProps {
  id:number,
  fullName: string;
  srcPicture: string;
  mobile: string;
  email: string;
  job: string;
  //selectOption?: string;
  group:string
}

const CartContact: React.FunctionComponent<ContacProps> = (props) => {
  const { fullName, srcPicture, mobile, email,id } = props;
  //const Contac= (props: ContacProps)=>{
  const {deleteContact}=useContacts()
  return (
    <div className="bg-slate-700 p-5 rounded-md  w-full h-[150px] flex justify-between gap-4 mt-4 ">
      <div className=" flex items-center justify-center basis-2/5 ">
        <img
          className="w-full h-full rounded-md "
          //src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg"
          src={srcPicture}
        />
      </div>
      <div className="flex gap-2 justify-between mr-4  basis-3/5 ">
        <div className="flex flex-col rounded-md bg-zinc-100 overflow-hidden text-sm basis-full ">
          <p className="border border-b flex p-2 whitespace-nowrap">
            <span> نام و نام خانوادگی:</span>
            {/* <span>فرزانه جهانپور </span> */}
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
        </div>
        <div className="flex flex-col justify-between ">
          <Link to={`/contacts/${id}`}>
            <div className="flex justify-center items-center bg-orange-300 rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                <path
                  fillRule="evenodd"
                  d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
          <Link to={`/contacts/edit/${id}`}>
            <div className="flex justify-center items-center bg-blue-300 rounded-md p-2 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
              </svg>
            </div>
          </Link>
          {/* <Link to={`/contacts/edit/${id}`}> */}
            <div className="flex justify-center items-center bg-red-300 rounded-md p-2 mt-1"
             onClick={()=>deleteContact(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CartContact;
