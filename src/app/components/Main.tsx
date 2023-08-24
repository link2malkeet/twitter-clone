import ComposeTweet from "@/components/server-components/compose-tweet";
import { getTweet } from "@/lib/supabase/get-tweets";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";

dayjs.extend(relativeTime);

const Main = async () => {
  const res = await getTweet();
  return (
    <main className="flex w-[50%] h-full flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600 min-h-screen ">
      <h1 className="text-xl font-bold p-6 my-4 backdrop-blur bg-black/10 sticky top-0">
        Home
      </h1>
      <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 relative h-32 flex flex-row item-center justify-center px-4 py-4 space-x-2">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none my-1"></div>
        <ComposeTweet />
      </div>
      <div className="flex flex-col">
        {res?.error && <>something is wrong with server</>}
        {res?.data &&
          res.data.map((tweet) => (
            <div
              key={tweet.id}
              className="flex flex-row border-t-[0.5px] border-gray-600 p-4 space-x-4 "
            >
              <div>
                <div className="w-10 h-10 bg-slate-200 rounded-full "></div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row space-x-1 items-center">
                    <div className="font-bold ">
                      {tweet.profiles.full_name || ""}
                    </div>
                    <div className="text-gray-500">
                      @{tweet.profiles.username}
                    </div>
                    <div>
                      <BsDot />
                    </div>
                    <div className="text-gray-500">
                      {dayjs(tweet.created_at).fromNow()}
                    </div>
                  </div>
                  <div>
                    <BsThreeDots />
                  </div>
                </div>
                <div className="text-white text-lg">{tweet.text}</div>
                <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>
                <div className="flex flex-row items-center justify-start space-x-20 w-full ">
                  <div className="rounded-full hover:bg-white/10 cursor-pointer p-3 transition duration-200">
                    <BsChat />
                  </div>
                  <div className="rounded-full hover:bg-white/10 cursor-pointer p-3 transition duration-200">
                    <AiOutlineRetweet />
                  </div>
                  <div className="rounded-full hover:bg-white/10 cursor-pointer p-3 transition duration-200">
                    <AiOutlineHeart />
                  </div>
                  <div className="rounded-full hover:bg-white/10 cursor-pointer p-3 transition duration-200">
                    <IoStatsChart />
                  </div>
                  <div className="rounded-full hover:bg-white/10 cursor-pointer p-3 transition duration-200">
                    <IoShareOutline />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Main;
