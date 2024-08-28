import { URL_LINK } from "../utils/constants";

const ResturantCard = (props) => {
    const {resData} = props;
    return (
        <div className="m-4 p-4 w-80 h-[485px] text-wrap rounded-md bg-slate-100 hover:bg-slate-300">
            <img alt="res-item" className="res-logo rounded-sm" src={URL_LINK + resData.info.cloudinaryImageId} />
            <h3 className="font-bold mt-2">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(', ')}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default ResturantCard;