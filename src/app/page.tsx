import { BsSearch } from "react-icons/bs";
import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] flex w-full h-full relative">
        <LeftSidebar />
        <Main />
        <section className="w-[30%] flex flex-col items-stretch h-screen px-4 sticky top-0">
          <div className="relative w-full flex items-center justify-center mt-4 group">
            <input
              id="search"
              type="text"
              placeholder="Search..."
              className="outline-none bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-12 pr-4 focus:border focus:border-primary peer"
            />
            <label
              htmlFor="search"
              className="absolute left-0 top-0 h-full p-4 peer-focus:text-primary"
            >
              <BsSearch className="w-5 h-5 text-grey-500" />
            </label>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl my-4 px-4">What's happening?</h3>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="p-4 hover:bg-white/10 p-4 last:rounded-b-xl cursor-pointer transition duration-200"
              >
                <div className="font-bold text-lg">Trending item: ${i + 1}</div>
                <div className="text-xs text-neutral-400">35.4</div>
              </div>
            ))}
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
