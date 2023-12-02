import { createContext, useContext, useReducer, useEffect } from "react";
import { SetData ,DeleteData,GetContacts,UpdateData} from "@/services/api/ApiContacts";
import axios from "axios";

//import { useActionData } from "react-router-dom";
//-------------------------reducer-------------------
type contactType = {
  id?: number;
  fullName: string;
  srcPicture: string;
  mobile: string;
  email: string;
  job: string;
  group: string;
};
type contactsType = {
  contacts: contactType[];
  editValue:contactType
};
// const initialValues: contactsType = {
//   contacts: [
//     {
//       id: 0,
//       fullName: "",
//       srcPicture: "",
//       mobile: "",
//       email: "",
//       job: "",
//       group: "",
//     },
//   ],
// };
const initialState: contactsType = {
  contacts: [],
  editValue:{
          id: 0,
          fullName: "",
          srcPicture: "",
          mobile: "",
          email: "",
          job: "",
          group: "",
        },

};
//-------------------------------------context-------------------------
type declareContextType = {
  contacts: contactType[];
  addContact: Function;
  deleteContact: Function;
  dispatch:Function,
  editValue:contactType,
  editContact:Function,
  setEditContact:Function
};
const valuesContextType: declareContextType = {
  contacts: [],
  addContact: Function,
  deleteContact: Function,
  dispatch: () => {},
  editValue:{
    id: 0,
    fullName: "",
    srcPicture: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  },
  editContact:()=>{},
  setEditContact:()=>{}
};

type ContactProviderType = {
  children: React.ReactNode;
};

type ActionType = {
  type: string;
  // payload : contactType|number|string|{id:number,data:contactType},
  payload: any;
};

//const reducer=(state:typeof initialState, action:ActionType):typeof initialState => {
const reducer = (state: contactsType, action: ActionType): contactsType => {
  switch (action.type) {
    //------------------second after set----------------
    case "getData":
      return { ...state, contacts:action.payload };
    case "add":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "delete":
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id != action.payload),
      };
    case "edit":
      return {
        ...state,
        contacts: state.contacts.map((item) =>
          item.id === action.payload.id ? { ...action.payload.data } : item
        ),
      };
      case "setEditContact":
      return { ...state, editValue: action.payload };

    default:
      throw new Error("you didn't choose any case");
  }
};

const ContactContext = createContext(valuesContextType);

function ContactProvider({ children }: ContactProviderType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { contacts,editValue } = state;

  //-------------------------------------------------------------------------------------------------------------------

  const addContact = (data: contactType) => {
    

    dispatch({ type: "add", payload: data });
  };

 function deleteContact(id: number){
    DeleteData ({endPoint:"contacts",id:id}).then( ()=>dispatch({ type: "delete", payload: id }))
     console.log("after dispatch")
     // 
  }
  //UpdateData = async ({endPoint,id,data}:ApiFunctions) =>
  function editContact(id: number,data:contactType){
   UpdateData ({endPoint:"contacts/",id:id,data:data}).then( ()=>dispatch({ type: "edit", payload: {id,data} }))
     
  }

  function setEditContact(data:contactType){
    dispatch({ type: "setEditContact", payload: data })
      
   }

  // const deleteContact = async (id: number) => {
  //   try {
    
  //   const res = await axios.delete( `http://localhost:3000/contacts/${id}`)
  //   dispatch({type:"delete",payload:id})
   

  //   } catch (error) {
  //      //alert(error);
  //     // dispatch({type:"error",payload:"there is an error  deleting a  city...."})
  //      console.log(error);

  //   }
  // };
  //-------------------------------------------------------------------------------------------------------------------
  useEffect(()=>{
    GetContacts({endPoint:"contacts"})
     .then((data) => dispatch({ type: "getData", payload: data }))

  },[dispatch])
  //-------------------------------------------------------------------------------------------------------------------
  
  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact,dispatch,editValue,editContact,setEditContact }}>
      {children}
    </ContactContext.Provider>
  );
}
function useContacts() {
  const context = useContext(ContactContext);
  if (context === null)
    throw new Error("use context was used outside auth provider");
  return context;
}

export { ContactProvider, useContacts };
