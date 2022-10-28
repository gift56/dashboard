import React from "react";

const Welcome = () => {
  return (
    <div className="mb-4 flex justify-between">
      <h1 className="text-primary text-xl">
        Welcome <b>Efe Gift</b>
      </h1>
      <div className="flex bg-primary items-center gap-4 w-1/6 rounded-md">
        <div className="w-10">
          <img
            src="https://yt3.ggpht.com/fm3vHmjvtRVzSW7bSPmR5IGTrwQ14TEqgyn2LjlXLpdrlnwCW28nPMxORHoJYWUWCreuKZi5-bo=s600-c-k-c0x00ffffff-no-rj-rp-mo"
            alt="profile_Img"
            className="w-full rounded-md"
          />
        </div>
        <h2 className="font-bold text-white leading-4">Efe Gift</h2>
      </div>
    </div>
  );
};

export default Welcome;
