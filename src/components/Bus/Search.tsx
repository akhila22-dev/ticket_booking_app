import React from "react";

const Search = () => {
  return (
    <div className=" mt-10 ml-20">
      <div
        className=" p-32 bg-no-repeat h-96  "
        style={{
          backgroundImage:
            "url('https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp')",
        }}
      >
        <div className="ml-8">
        <input
          placeholder="Search"
          type="text"
          className="shadow-black h-10 rounded-full  shadow-2xl  text-2xl  w-10/12 p-7"
        />
        </div>
      </div>
    </div>
  );
};

export default Search;
