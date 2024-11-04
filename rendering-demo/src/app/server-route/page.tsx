import ImageSlider from "@/components/imageSlider";
// import { ClientSideFunction } from "@/utils/client-utils";
import { ServerSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  console.log("Server route rendered");
  const result = ServerSideFunction();
  //   const clientResult = ClientSideFunction();
  return (
    <>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
}
