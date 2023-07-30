import { BsSearch } from "react-icons/bs";
import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] flex w-full h-full relative">
        <LeftSidebar />
        <Main />
        <section className="w-[30%] flex flex-col space-y-4 h-screen sticky top-0 py-2 mt-2">
          <div className="relative w-full flex items-center justify-center mx-4">
            <label
              htmlFor="search"
              className="absolute left-0 top-0 h-full p-4"
            >
              <BsSearch className="w-5 h-5 text-grey-500" />
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search..."
              className="outline-none bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-10 pr-4"
            />
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
