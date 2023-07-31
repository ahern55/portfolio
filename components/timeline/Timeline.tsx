import resumeEntries from "@/data/resumeEntries";
import TimelineEntry from "./TimelineEntry";
import ChevronRightIcon from "../icons/ChevronRightIcon";

const Timeline = () => {
  return (
    <div className="min-h-screen flex flex-wrap">
      <div className="mx-auto mt-0 text-4xl lg:text-5xl mb-10">
        A Brief Resume...
      </div>

      <div className="container mx-auto h-full w-full">
        <div className="wrap relative h-full overflow-visible p-2">
          <div className="timeline-line border-2-2 right-9/10 absolute h-full translate-x-1/2 border colored-border border-opacity-60 md:right-1/2"></div>
          <div className="sticky top-[40%] pb-[6%] lg:pb-[2%]">
            <div className="timeline-chevron-right right-9/10 absolute md:translate-x-full md:right-1/2">
              <ChevronRightIcon />
            </div>
            <div className="timeline-chevron-left hidden md:block right-9/10 absolute md:right-1/2 rotate-180">
              <ChevronRightIcon />
            </div>
          </div>
          {resumeEntries.map((resumeEntry, index) => (
            <TimelineEntry
              key={resumeEntry.title + resumeEntry.subtitle}
              resumeEntry={resumeEntry}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;