import React, { FC } from "react";

type Repository = {
  id: number;
  name: string;
  full_name: string;
};

// const getRepo = async (name: string) => {
//   const res = await fetch(`https://api.github.com/repos/vercel/${name}`);

//   const data: Repository = await res.json();
//   return data;
// };

// export async function generateMetadata({
//   params,
// }: {
//   params: { name: string };
// }) {
//   const repo = await getRepo(params.name);

//   return {
//     title: repo.full_name,
//   };
// }
// { params: { name: string; age: string } }

interface PageProps {
  params: Record<string, any>;
  searchParams: Record<string, any>;
}

const page = async (props: PageProps) => {
  console.log("props: ", props);

  const { params, searchParams } = props;

  console.log("searchParams: ", searchParams);

  console.log("params is here: ", params);

  const { name } = params;
  // const repo = await getRepo(name);
  const repo = { name: "next js" };
  console.log("repo: ", repo);

  return (
    <div>
      <h1>Blog main page name</h1>
      <h1>repo name: {repo.name}</h1>
    </div>
  );
};

export default page;
