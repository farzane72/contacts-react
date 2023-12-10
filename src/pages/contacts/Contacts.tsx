import { GetContacts } from "@/services/api/ApiContacts.tsx";
import { useNavigate, useNavigation } from "react-router-dom";
import CartContact from "@/components/contact/CartContact";
import { useContacts } from "@/contexts/ContactContext";
import Header from "@/components/header/Header";
import Loading from "@/components/loading/loading";
import { Toaster, ToastBar ,toast} from "react-hot-toast";
interface ContactValues {
  id ?:number|string,
  fullName: string;
  srcPicture: string;
  mobile: string;
  email: string;
  job: string;
  //selectOption?: string;
  group:string,
  key ?:number|string
}
type ContactItemsProps = ContactValues[] | [];
function Contacts() {
  //const contacts = useLoaderData() as ContactItemsProps;
  const { contacts, searchValues, changeStatusFormik } = useContacts();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  //console.log(contacts);
  return (
    <div>
      {isLoading && <Loading />}
      <Header />
      <main className=" min-h-screen bg-slate-800  ">
        <div className="md:container pt-4 mx-auto ">
          <div className="pt-4 px-2">
            <div
              className="bg-violet-700 p-2 rounded-md flex gap-2 w-[180px] "
              onClick={() => {
                changeStatusFormik("add");
                navigate("/contacts/add");
              }}
            >
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

            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
                {searchValues.length > 0
                  ? searchValues.map((contact) => (
                      <CartContact {...contact} key={contact.id} />
                    ))
                  : contacts.map((contact) => (
                      <CartContact {...contact} key={contact.id} />
                    ))}
              </div>
            </div>
          </div>
        </div>
        <Toaster
       containerStyle={{
        top: 20,
        // left: 20,
        // bottom: 20,
        // right: 20,
      }}
       // position="top-left"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            // background: "#363636",
            background: "#363636",
            color: "#fff",
          },
          
        }}  
      />
      </main>
    </div>
  );
}
export async function loader() {
  const contacts = GetContacts({ endPoint: "contacts" });
  console.log("loader", contacts);
  return contacts;
}

export default Contacts;
