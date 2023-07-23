import LeftSidebar from "./components/LeftSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-blue">
      <div className="max-w-screen-xl flex w-full h-full relative">
        <LeftSidebar />
        <main className=""></main>
        <section className=""></section>
      </div>
    </div>
  );
};

export default Home;
