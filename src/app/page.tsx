import { Database } from "@/lib/supasbase";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";
import RightSection from "./components/RightSection";

const Home = async () => {
  const supabaseClient = createServerComponentSupabaseClient({
    cookies,
    headers,
  });

  const { data: userData, error: userError } =
    await supabaseClient.auth.getUser();
  console.log("responseUser:", userData);
  console.log("userError:", userError);
  // console.log("user:", { user: session?.user, error });
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
