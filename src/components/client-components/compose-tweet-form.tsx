"use client";
import React, { useRef } from "react";
import { toast } from "sonner";
interface Props {
  serverAction: any;
}

export const ComposeTweetForm = ({ serverAction }: Props) => {
  const myForm = useRef<HTMLFormElement | null>(null);
  const handleSubmitTweet = async (data: any) => {
    try {
      const res = await serverAction(data);
      if (res?.error) {
        return toast.error(res?.error.messages);
      }
      toast.success("Tweet sent.");
      myForm?.current?.reset();
    } catch (err) {
      console.log("ComposeTweetForm: error:", err);
    }
  };
  return (
    <form
      action={handleSubmitTweet}
      className="flex flex-col w-full h-full"
      ref={myForm}
    >
      <div className="flex flex-col w-full h-full ">
        <div>
          <input
            type="text"
            name="tweet"
            className="w-full h-full bg-transparent outline-none border-none border-gray-600 p-4 border-b-[0.5px] placeholder:text-2xl placeholder:text-grey-600"
            placeholder="What's happening?!"
          />
        </div>
        <div className="w-full justify-between items-center flex">
          <div></div>
          <div className="w-full max-w-[100px]">
            <button className="rounded-full bg-twitterColor px-4 py-2 w-full text-lg font-bold text-center hover:bg-opacity-70 transition duration-200">
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
