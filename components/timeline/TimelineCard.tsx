import { resumeEntry } from "@/data/resumeEntries";

const TimelineCard = ({ resumeEntry }: { resumeEntry: resumeEntry }) => {
  return (
    <>
      <div className="w-full">
        <div className="bg-transparent rounded p-4 flex flex-col leading-normal">
          <div className="">
            <div className="font-bold text-2xl mb-2">{resumeEntry.title}</div>
            <div className="font-bold text-xl mb-2">{resumeEntry.subtitle}</div>
            <p className=" text-base">{resumeEntry.dateString}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineCard;
