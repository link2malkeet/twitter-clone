import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsThreeDots,
  BsTwitter,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];
const LeftSidebar = () => {
  return (
    <section className="fixed w-[275px] flex flex-col items-stretch h-screen space-y-4 px-6">
      <div className="flex flex-col h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            href={`/${item.title.toLowerCase()}`}
            className="hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit rounded-3xl px-4 py-3 space-x-2 text-2xl"
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="rounded-full bg-primary p-4 m-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="flex items-center space-x-2 rounded-full bg-transparent m-4 p-4 text-2xl text-center hover:bg-white/10 transition duration-200 justify-between w-full">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-12 h-12"></div>
          <div className="text-left text-sm">
            <div className="text-semibold">Mel</div>
            <div className="text-xs">@malkeet.dev</div>
          </div>
        </div>
        <div className="text-right">
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
