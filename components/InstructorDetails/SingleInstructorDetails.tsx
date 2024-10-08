import { getSingleInstructor } from "@/lib/Helper/getSingleInstructor";
import ImageBox from "./ImageBox";
import TextBox from "./TextBox";
import InstructorsCourse from "./InstructorsCourse";

export default async function SingleInstructorDetails({id}:{id:string}) {
  const data = await getSingleInstructor(id)
  
  
  return (
    <div className="container ">
<div className="place-items-start flex md:flex-row flex-col">
        <ImageBox data={data}/>
      <TextBox data={data}/>
    </div>
    {data?.courseCollection?.length && <InstructorsCourse user={data||{}}/>}
    </div>
    
  )
}
