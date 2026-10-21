// NO "use client" here — this runs on the server
import { getAllDevelopers } from "@/services/developer-service";
import DeveloperListingsSlider from "./DeveloperListingsSlider";

const DeveloperListings = async () => {
  // const  developers  = await getTopDevelopers();
  const allDevelopers = await getAllDevelopers(1, 10);
  // console.log(featuredProperties[0].amenities)
  // console.log(featuredProperties)

  return (
    <>
      {/* <h1> DeveloperListings</h1> */}
      <DeveloperListingsSlider developers={allDevelopers} />
    </>
  );
};

export default DeveloperListings;
