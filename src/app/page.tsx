import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";
import RightSidebar from "./components/RightSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] flex w-full h-full relative">
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
