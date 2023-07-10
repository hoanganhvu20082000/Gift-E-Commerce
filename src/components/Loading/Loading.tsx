import { CircularProgress } from "@mui/material";
import { memo } from "react";

function Loading() {
  return (
    <>
      <div className="w-full h-full bg-black/[0.3] flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 z-[99]">
        <CircularProgress sx={{ color: "#0d6efd" }} thickness={4.3} size={30} />
      </div>
    </>
  );
}
export default memo(Loading);
