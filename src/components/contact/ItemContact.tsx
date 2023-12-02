import CartContact from "./CartContact";
import { GetContacts } from "@/services/api/ApiContacts";
import { useLoaderData } from "react-router-dom";

interface ContactItemsProps {
  fullName: string;
  srcPicture: string;
  mobile: string;
  email: string;
  job: string;
 // selectOption: string;
 group:string
}[] =[];

const ItemContact: React.FunctionComponent = () => {
  const contacts = useLoaderData() as ContactItemsProps ;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
      {contacts.map((contact) => (
         <CartContact  contact={contact} />

      )
            
      
       
      )}

      {/* <Contac namep='test'  />
             <Contac namep='test'  />
             <Contac namep='test'  />
             <Contac namep='test'  />
             <Contac namep='test'  /> */}
    </div>
  );
};
export async function loader() {
  const products = GetContacts({ endPoint: "products" });
  return products;
}

export default ItemContact;
