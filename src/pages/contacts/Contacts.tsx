
import { GetContacts } from "@/services/api/ApiContacts.tsx";
import { useLoaderData ,Link} from "react-router-dom";
import CartContact from "@/components/contact/CartContact";
import { useContacts } from "@/contexts/ContactContext";
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
type ContactItemsProps =ContactValues[] | []
;
function Contacts() {
  //const contacts = useLoaderData() as ContactItemsProps;
  const {contacts}=useContacts()



  console.log(contacts);
  return (
    <div className="pt-4 px-2">
      <Link to={"/contacts/add"}>
      <div className="bg-violet-700 p-2 rounded-md flex gap-2 w-[180px]  ">
        <p className=""> ساخت مخاطب جدید</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000"
          viewBox="0 0 24 24"
          strokeWidth={3.5}
          stroke="rgb(109 40 217)"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      </Link>
     

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
          {
          contacts.map((contact) => (
            <CartContact {...contact} key={contact.id} />
          ))
          }
        </div>
      </div>
    </div>
  );
}
export async function loader() {
  const contacts = GetContacts({ endPoint: "contacts" });
  console.log("loader",contacts);
  return contacts;
}

export default Contacts;
