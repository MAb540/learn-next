/**
 * for making a page force-dynamic
 */
// export const dynamic = "force-dynamic";

export const revalidate = 10;

const page = async () => {
  const res = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
    {
      // cache: "no-store",
      next: {
        revalidate: 5,
      },
    }
  );

  const data = await res.json();

  // console.log("data datetimse: ", data.dateTime);

  return (
    <div>
      <h1>page of react is here</h1>

      <h1>DateTime: {data.dateTime}</h1>
    </div>
  );
};

export default page;
