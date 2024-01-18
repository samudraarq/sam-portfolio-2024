import { Link } from "react-router-dom";
import Button from "./button";

type Props = {
  img: string;
  title: string;
  label: string[];
  caption: string;
  linkTo: string;
};

const LatestWorkCard = ({ img, title, label, caption, linkTo }: Props) => {
  return (
    <div>
      <div className="flex gap-[10px] md:gap-[30px]">
        <div className="max-w-[565px]">
          <img src={img} alt={title} className="w-full" />
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-2">Latest Work</p>
          <h2 className="text-2xl mb-5">{title}</h2>
          <div className="flex gap-2 mb-5 flex-wrap">
            {label.map((lab) => (
              <span className="py-2 px-5 rounded-full bg-primary text-sm font-bold">
                {lab}
              </span>
            ))}
          </div>
          <p className="max-w-[467px] mb-12">{caption}</p>
          <Link to={linkTo}>
            <Button label="see this project" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LatestWorkCard;
