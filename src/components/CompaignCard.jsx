import { Link } from "react-router-dom";


const CompaignCard = ({compaign}) => {
    console.log(compaign);
    const {image,title,description,division,id}=compaign;
    console.log(title);
    return (
        <div className="card card-compact bg-base-100 border">
      <div className="p-3">
      <figure>
    <img
    className="rounded w-full h-40"
      src={image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-semibold">{title}</h2>
    <p>{description}</p>
    <h5 className="text-xl font-semibold">
        <span className="text-gray-600">Division :</span>
        {division}</h5>
    <div className="card-actions justify-start">
      <Link to={`/compaign/${id}`} className="btn text-white bg-blue-400 font-semibold text-lg">Donate Now</Link>
    </div>
  </div>
      </div>
  
</div>
    );
};

export default CompaignCard;