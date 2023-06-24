"use client";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.log("error: ", error);
  return (
    <div>
      <h2 className="text-2xl">error occured</h2>

      <p>message {error.message}</p>

      <button
        onClick={() => {
          console.log("client component ");
          reset;
        }}
      >
        Please try again
      </button>
    </div>
  );
};

export default error;
