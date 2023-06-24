import { AuthRequiredException } from "../../../lib/AuthException";

const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(() => resolve(0), ms));

let counter = 0;

const page = async () => {
  await wait(3000);

  let session = null;
  //   if (!session) {
  //     throw new AuthRequiredException();
  //   }

  return <div>Login page is here</div>;
};

export default page;
