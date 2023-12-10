import { useState,useEffect,useCallback } from 'react'
//import {useDebounce} from 'use-lodash-debounce'
//import { useDebouncedCallback } from 'use-lodash-debounce'
import _debounce from 'lodash/debounce';
import { GetContacts } from '@/services/api/ApiContacts';
import { useContacts } from '@/contexts/ContactContext';



const Search: React.FunctionComponent = () => {

  type DebounceFn<T> = (value: any) => any;
  const {searchContacts}=useContacts()

const debouncedFn: DebounceFn<any> = _debounce<any>(
  (value:any) => {
   
    console.log("test");
    console.log('Value changed:', value);
    GetContacts({endPoint:`contacts?q=${value.trim()}`
    //,params:`?name_like=${value}`}
  })
    .then(data=>searchContacts(data))
  },
  300
);

 
  const [value, setValue] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    debouncedFn(event.target.value);
    
  };
 // const debouncedValue = useDebounce(value, 800)

  //const debouncedSetValue = useDebouncedCallback(setValue, 800)

    // useEffect(() => {
    //     // do search stuff
    //   }, [debouncedValue]);
    return (
        <div className="flex  border border-white  border-s-violet-700 rounded-md overflow-hidden   w-full md:w-1/3">
       

        <input
          type="search"
          className="p-2 bg-slate-700  outline-none placeholder:text-white placeholder:text-sm text-white w-full  "
          placeholder="جستجوی مخاطب"
          onChange={handleChange}
        />
         <div className="bg-violet-700  flex items-center justify-center p-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      );
}
 
export default Search;