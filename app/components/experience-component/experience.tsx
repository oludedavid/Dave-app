import { Experience } from "@/app/data/experience-data";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TRUE } from "sass";

export default function ExperienceComponent({
  experienceData,
}: {
  experienceData: Experience[];
}) {
  return (
    <div className={`pt-5`}>
      <VerticalTimeline lineColor={`#7C96AB`} animate={true}>
        {experienceData.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#B2A59B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #7C96AB" }}
            date={experience.companyDuration}
            iconStyle={{ background: "#7C96AB", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              {experience.companyRole}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">{`${experience.companyName}, ${experience.companyLocation}`}</h4>
            <p>{experience.companyResponsibilities.join(", ")}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
