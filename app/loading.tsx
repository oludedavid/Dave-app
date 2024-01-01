export default function Loader() {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current   rounded-full";

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div
        className={`${circleCommonClasses} mr-1bounce 1s infinite 200ms'`}
      ></div>
      <div className={`${circleCommonClasses} bounce 1s infinite 400ms`}></div>
    </div>
  );
}
