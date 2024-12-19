import { useLoaderData } from "react-router-dom";
import CompaignCard from "../components/CompaignCard";


const Compaign = () => {

    const data=useLoaderData();
    // console.log(data);
    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
            {
                data.map(compaign => 
                <CompaignCard compaign={compaign}></CompaignCard>)
            }

           
        </div>
    );
};

export default Compaign;