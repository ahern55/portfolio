import { resumeEntry } from "@/data/resumeEntries";

const TimelineCard = (props: { resumeEntry: resumeEntry }) => {
  return (
    <>
      <div className="w-full">
        <div className="bg-transparent rounded p-4 flex flex-col leading-normal">
          <p className="text-base secondary">{props.resumeEntry.dateString}</p>
          <div className="border-t secondary-border w-[90%] lg:w-2/3"></div>
          <div className="">
            <div className="font-bold text-xl md:text-2xl mb-1">
              {props.resumeEntry.title}
            </div>
            <div className="font-bold text-lg md:text-xl mb-2">
              {props.resumeEntry.subtitle}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineCard;
