import Link from "next/link";

const getTime = async () => {
  const res = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
    {
      next: {
        revalidate: 5,
      },
    }
  );

  const data = await res.json();
  return data;
};

type Repository = {
  id: number;
  name: string;
  full_name: string;
};

const getRepos = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const data: Repository = await res.json();
  return data;
};

export default async function Page() {
  const [time, repos] = await Promise.all([getTime(), getRepos()]);

  return (
    <div>
      <h1 className="text-lg">this is main page component</h1>

      <Link href="/about">About</Link>
      <br />
      <Link href="/blog">Blog</Link>

      <p>repo name: {repos.full_name} </p>
      <p>time: {time.dateTime}</p>
    </div>
  );
}
