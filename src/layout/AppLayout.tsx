import { Outlet } from "react-router-dom";

import Loading from "@/components/loading/loading";
import { useNavigation } from "react-router-dom";
//import Loading from "../loading/loading";
import { Toaster, ToastBar ,toast} from "react-hot-toast";
import Header from "@/components/header/HeaderLayout";


function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="">
      {isLoading && <Loading />}
      <Header />
      <main className=" min-h-screen bg-slate-800  ">
        <div className="md:container mx-auto pt-4 ">
          <Outlet />
        </div>
      </main>
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
          
          
          // custom: {
            
          //   containerStyle={{
          //     top: 50%,
          //     left: 50%,
          //     transform: translate(-50%, -50%)
          //   }}
          // },
        }}
        
 
        
      />
    </div>
  );
}

export default AppLayout;
//md:px-36