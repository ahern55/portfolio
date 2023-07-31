import { resumeEntry } from "@/data/resumeEntries";
import TimelineCard from "./TimelineCard";

declare type TimelineEntryProps = {
  resumeEntry: resumeEntry;
  index: number;
};

const TimelineEntry = (props: TimelineEntryProps) => {
  return (
    <>
      <div className="flex w-full h-fit md:h-36 items-center p-0 md:justify-between mb-10">
        <div className="spacer w-12 md:hidden"></div>
        <div className="order-1 block w-4/5 rounded-lg px-6 py-4 md:hidden colored-shadow">
          <TimelineCard resumeEntry={props.resumeEntry} />
        </div>
        <div className="order-1 hidden px-6 py-4 md:block md:w-5/12">
          {props.index % 2 == 0 ? (
            <div className="colored-shadow rounded-lg">
              <TimelineCard resumeEntry={props.resumeEntry} />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="order-1 hidden px-6 py-4 md:block md:w-5/12">
          {props.index % 2 == 0 ? (
            <></>
          ) : (
            <div className="colored-shadow rounded-lg">
              <TimelineCard resumeEntry={props.resumeEntry} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TimelineEntry;
