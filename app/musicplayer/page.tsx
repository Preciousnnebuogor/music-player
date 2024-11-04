"use client";
import { MdOutlinePlayArrow, MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
export default function MusicPlayer() {
  return (
    <div className=" px-4 h-[80px] bg-blue-500">
      <div className={`h-[100%] `}>
        <img
          src={"/icon2.png"}
          className={` animate-bounce w-[100%] h-[80%] `}
        />
      </div>
      <div className={`flex items-center justify-between`}>
        <MdOutlineSkipPrevious />
        <MdOutlinePlayArrow />
        <MdOutlineSkipNext />
      </div>
    </div>
  );
}
