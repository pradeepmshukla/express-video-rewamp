
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarFull,
  faStarHalf as faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);

  const hasHalfStar = rating % 1 !== 0;
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon key={`full-${i}`} icon={faStarFull} className="active" />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <FontAwesomeIcon key="half" icon={faStarHalf} className="active" />
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarEmpty} />);
  }

  return <div className="ratings">{stars}</div>;
};

export default Rating;
