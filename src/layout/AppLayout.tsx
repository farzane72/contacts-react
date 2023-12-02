import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import Loading from "@/components/loading/loading";
import { useNavigation } from "react-router-dom";
//import Loading from "../loading/loading";

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="">
      {isLoading && <Loading />}
      <Header />
      <main className="  min-h-screen bg-slate-800  ">
        <div className="container mx-auto pt-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
