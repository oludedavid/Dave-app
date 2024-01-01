import Link from "next/link";

export default function Success() {
  return (
    <div
      className={`w-screen h-screen flex flex-col justify-center items-center`}
    >
      <div
        className={`h-1/2 w-1/4 bg-gradient-to-r from-gray-500 to-[#7C96AB] flex flex-col items-center justify-center`}
        style={{
          borderRadius: "50%",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <i className={`text-white text-6xl`}>🌟</i>
      </div>

      <p
        className={`pt-10 text-4xl w-full text-center font-bold text-gray-200`}
      >
        Hooray! Your message has been delivered successfully.
      </p>
      <p className={`text-gray-500 text-lg pt-7`}>
        🚀 I'm already on my way to respond. Expect to hear from me shortly!
      </p>
      <button className={`text-lg text-[#7C96AB] mt-5`}>
        <Link href={"/"}>Return to the home page</Link>
      </button>
    </div>
  );
}
