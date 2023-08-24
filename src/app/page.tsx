import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import LeftSidebar from "./components/left-sidebar";
import Main from "./components/main";
import RightSection from "./components/right-section";

const Home = async () => {
  const supabaseClient = createServerComponentSupabaseClient({
    cookies,
    headers,
  });

  const { data: userData, error: userError } =
    await supabaseClient.auth.getUser();
  console.log("responseUser:", userData);
  console.log("userError:", userError);
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black text-white">
      <div className="max-w-[70vw] flex w-full h-full relative">
        <LeftSidebar />
        <Main />
        <RightSection />
      </div>
    </div>
  );
};

export default Home;
