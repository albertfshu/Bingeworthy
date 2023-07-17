import { Link } from "react-router-dom";

const MediaCard = ({ name }) => {
  return (
    <div>
      <div>
        <div>
          <h5>{name[0].toUpperCase() + name.slice(1)}</h5>
          <Link to={`/media/${name}`}>Details</Link>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
