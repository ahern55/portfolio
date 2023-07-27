import resumeEntries from "@/data/resumeEntries";
import TimelineEntry from "./TimelineEntry";

const Timeline = () => {
  return (
    <div className="spacer min-h-screen flex flex-wrap">
      <div className="mx-auto mt-0 text-5xl mb-10">A Brief Resume...</div>

      <div className="container mx-auto h-full w-full">
        <div className="wrap relative h-full overflow-visible p-2 lg:p-10">
          <div className="border-2-2 right-9/10 absolute h-full translate-x-1/2 border colored-border border-opacity-60 md:right-1/2"></div>
          {resumeEntries.map((resumeEntry, index) => (
            <TimelineEntry resumeEntry={resumeEntry} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
