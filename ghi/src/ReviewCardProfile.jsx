import { Link } from "react-router-dom";
import { useGetAccountDetailsQuery } from "./store/accountDetailsSlice";

const ReviewCardProfile = (props) => {
  const { data, isLoading } = useGetAccountDetailsQuery(props.commentor_id);


  const handleDate = (isoString) => {
    return ((new Date(isoString).toLocaleDateString()) + " " + (new Date(isoString).toLocaleTimeString()));
  };

  if (isLoading) return <p>Loading... </p>
  return (
    <>
      <img className="rounded-full bg-color-black h-12 my-auto" alt={`${props.commentor_id}'s pfp`} src={data?.profile_image || "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"} />
      <div className="ml-6">
        <Link to={`/profile/${props.commentor_id}`}><p className="hover:text-[#fec0c0] text-2xl">{props.commentor_id}</p></Link>
        <p>{handleDate(props.post_date)}</p>
      </div>
    </>
  );
};

export default ReviewCardProfile;
