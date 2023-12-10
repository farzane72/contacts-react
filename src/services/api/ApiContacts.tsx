//import { useContacts } from '@/contexts/ContactContext';
import axios from 'axios'
const Base_Url="http://localhost:3000";
type  ApiFunctions={
  endPoint:string,
  params?:string | number ,
  data?:object,
  id?:number,

}
//const {dispatch}=useContacts()
export const GetContacts = async ({ endPoint, params="" }:ApiFunctions) => {
    // try {
       
       const response = await axios.get(`${Base_Url}/${endPoint}${params}`);
       // console.log(params);
       //console.log("+",`${Base_Url}/${endPoint}${params}`);
       return response.data;
     //} 
    //  catch (error) {
    //    console.log(error.response);
    //    alert(error);
    //  }
   };
 
   export const SetData = async ({endPoint,data}:ApiFunctions) => {
     try {
     
     const res = await axios.post( `${Base_Url}/${endPoint}`,data)
    // console.log(res.data);
 
     } catch (error) {
        alert(error);
     }
   };
 
   export const UpdateData = async ({endPoint,id,data}:ApiFunctions) => {
     try {
     
     const res = await axios
     .patch(`${Base_Url}/${endPoint}/${id}`,data)
 
     } catch (error) {
        alert(error);
     }
   };
 
   export  const DeleteData = async ({endPoint,id}:ApiFunctions) => {
     try {
     
     const res = await axios.delete(`${Base_Url}/${endPoint}/${id}`)
    // console.log(res.data);
    //dispatch({ type: "delete", payload: id })
     } catch (error) {
        alert(error);
     }
   };