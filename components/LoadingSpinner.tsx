import ClipLoader from "react-spinners/ClipLoader";

export default function LoadingSpinner() {
  return (
    <div className="w-full h-[500px] grow flex flex-col gap-3 justify-center items-center">
      <ClipLoader color="#36d7b7" />
      <p>We are currently processing your request!</p>
    </div>
  );
}
