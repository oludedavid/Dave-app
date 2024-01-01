import { PiBank } from "react-icons/pi";
import "./progress.scss";

export default function SkillProgressBar(props: {
  skillType: string;
  skillLevel: number;
  class_name: string;
}) {
  return (
    <div className="wrapper">
      <p className="skillType text-red-400">{props.skillType}</p>
      <div className={`container`}>
        <div
          className={`skills ${props.skillType}`}
          style={{
            backgroundColor: "gray",
            color: "white",
          }}
        >
          {`${props.skillLevel}%`}
        </div>
      </div>
    </div>
  );
}
