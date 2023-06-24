import React from "react";

type Repository = {
  id: number;
  name: string;
  full_name: string;
};

const page = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");

  const data: Repository = await res.json();

  // console.log("data: ", data);

  return (
    <div>
      <h1>Blog main page is here</h1>
      <h1>Github Data: </h1>

      <h3>{data.id}</h3>
    </div>
  );
};

export default page;
