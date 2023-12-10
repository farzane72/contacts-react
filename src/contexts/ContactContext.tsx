import { createContext, useContext, useReducer, useEffect } from "react";
import {
  SetData,
  DeleteData,
  GetContacts,
  UpdateData,
} from "@/services/api/ApiContacts";
import { toast } from "react-hot-toast";

//-------------------------reducer-------------------
type contactType = {
  id?: number | string;
  fullName: string;
  srcPicture: string;
  mobile: string;
  email: string;
  job: string;
  group: string;
  // key?:number|string;
};
type Group = {
  id: string;
  name: string;
};
type contactsType = {
  contacts: contactType[];
  searchValues: contactType[];
  groups: Group[];
  statusFormik: string;
};

const initialState: contactsType = {
  contacts: [],
  searchValues: [],
  groups: [],
  statusFormik: "",
};
//-------------------------------------context-------------------------
type declareContextType = {
  contacts: contactType[];
  addContact: Function;
  deleteContact: Function;
  dispatch: Function;
  //editValue:contactType,
  editContact: Function;
  //setEditContact:Function,
  searchValues: contactType[];
  searchContacts: Function;
  // groupValue:string,
  editGroup: Function;
  groups: Group[];
  statusFormik: string;
  changeStatusFormik: Function;
};
const valuesContextType: declareContextType = {
  ...initialState,
  //contacts: [],
  addContact: Function,
  deleteContact: Function,
  dispatch: () => {},
  editContact: () => {},
  searchContacts: () => {},
  editGroup: () => {},
  changeStatusFormik: () => {},
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
      return { ...state, contacts: action.payload };
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
    case "search":
      return { ...state, searchValues: action.payload };

    case "setGroups":
      return { ...state, groups: action.payload };
    case "status":
      return { ...state, statusFormik: action.payload };

    default:
      throw new Error("you didn't choose any case");
  }
};

const ContactContext = createContext(valuesContextType);

function ContactProvider({ children }: ContactProviderType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { contacts, searchValues, groups, statusFormik } = state;

  //-------------------------------------------------------------------------------------------------------------------

  const addContact = (values: contactType) => {
    SetData({ endPoint: "contacts", data: values });
    dispatch({ type: "add", payload: values });

    // dispatch({ type: "add", payload: data });
  };

  function deleteContact(id: number, fullName: string) {
    toast(
      (t) => (
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl text-center text-yellow-400">
            پاک کردن مخاطب
          </h1>
          <span>مطمئنی که میخوای {fullName} رو حذف کنی؟ </span>
          <div className="flex justify-center items-center gap-2">
            <button
              className="border rounded-md p-2 bg-violet-700 "
              onClick={() => {
                DeleteData({ endPoint: "contacts", id: id }).then(() =>
                  dispatch({ type: "delete", payload: id })
                );
                toast.dismiss(t.id);
              }}
            >
              مطمئن هستم
            </button>
            {/* <Link to="/contacts"> */}
            <button
              className="border rounded-md p-2 bg-gray-700"
              onClick={() => toast.dismiss(t.id)}
            >
              انصراف
            </button>
            {/* </Link> */}
          </div>
        </div>
      ),
      {
        style: {
          //background:#fff,
          //left: 1/2,
          //transform: translate(-50%, -50%)
        },
        // className: 'text-red-500 '
      }
    );
  }
  //UpdateData = async ({endPoint,id,data}:ApiFunctions) =>
  function editContact(id: number, data: contactType) {
    UpdateData({ endPoint: "contacts/", id: id, data: data }).then(() =>
      dispatch({ type: "edit", payload: { id, data } })
    );
  }

  function searchContacts(data: contactType[]) {
    //console.log("hello search");
    // console.log(data);
    dispatch({ type: "search", payload: data });
  }
  function editGroup() {
    GetContacts({ endPoint: "groups" }).then((data) =>
      dispatch({ type: "setGroups", payload: data })
    );
  }
  function changeStatusFormik(status: string) {
    dispatch({ type: "status", payload: status });
  }

  //-------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    GetContacts({ endPoint: "contacts" }).then((data) =>
      dispatch({ type: "getData", payload: data })
    );
  }, [dispatch]);
  useEffect(() => {
    // editGroup(group);
    editGroup();
  }, []);
  //-------------------------------------------------------------------------------------------------------------------

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact,
        deleteContact,
        dispatch,
        editContact,
        searchValues,
        searchContacts,
        editGroup,
        groups,
        statusFormik,
        changeStatusFormik,
      }}
    >
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
