import LeftSidebar from "./components/LeftSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="max-w-screen-xl flex w-full h-full">
        <LeftSidebar />
        <main className="ml-[275px] flex w-[600px]  h-full flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600 min-h-screen">
          <h1 className="text-xl font-bold px-4 my-4">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 relative h-32 flex flex-row item-center justify-center px-4 py-4 space-x-2">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none my-1"></div>
            <div className="flex flex-col w-full h-full">
              <div>
                <input
                  type="text"
                  className="w-full h-full bg-transparent outline-none border-none border-gray-600 p-4 border-b-[0.5px] placeholder:text-2xl placeholder:text-grey-600"
                  placeholder="What's happening?!"
                />
              </div>
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full bg-primary px-4 py-2 w-full text-lg font-bold text-center hover:bg-opacity-70 transition duration-200">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className=""></section>
      </div>
    </div>
  );
};

export default Home;
