import FormikContainer from "@/forms/FormikContainer";
// interface AddContactsProps {
//   name: string;
// }

const AddContacts: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <h1 className="text-green-600 font-bold text-lg text-center p-4 border-b border-gray-100/10">
          ساخت مخاطب جدید
        </h1>
      </div>
      <div className=" flex gap-8 ">
        {/* <div className="w-full h-full bg-[url('../src/assets/images/1.avif')] "  >

            </div> */}
        <div className="basis-1/2 h-full">
            <FormikContainer />

        </div>
        <div className="basis-1/2 min-h-screen">
          <img className="w-full h-full object-cover" src="../src/assets/images/1.avif" />
        </div>
      </div>


    </div>
    //  <div  className="bg-[url('@/assets/images/1.avif')] relative z-50">
  );
};

export default AddContacts;
