"use client";
import { useState } from "react";
import { MusicList } from "./data";

export default function MusicPage() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className={`px-4 bg-pink-700 w-full h-full pt-8`}>
        <div className={`border-2 rounded-full px-2 py-2 `}>
          <input
            type="text"
            placeholder="search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className={`outline-none w-full bg-black px-2`}
          />
        </div>

        {MusicList.filter((value) =>
          value.Artist.toLowerCase().includes(search.toLowerCase())
        ).map((value, index) => {
          return (
            <div className={`flex items-center justify-between mt-4 px-4`}>
              <img
                src={value.icon}
                className={`w-[60px] h-[60px] rounded-full`}
              />

              <div
                className={`flex items-center justify-center flex-col text-sm`}
              >
                <h1>{value.Artist}</h1>
                <h1>{value.musicTitle}</h1>
              </div>
              <p>:</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
