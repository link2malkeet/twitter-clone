import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";
import RightSection from "./components/RightSection";

const Home = () => {
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
