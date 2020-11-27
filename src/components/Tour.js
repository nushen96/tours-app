import { useState } from "react";
const Tour = ({ removeFromTours, id, title, image, price, description }) => {
    const [showCompleteDesc, setShowCompleteDesc] = useState(false)

const changeDescState = () => {
    setShowCompleteDesc(!showCompleteDesc)
}
const descStateButton = showCompleteDesc ? (<button onClick={changeDescState}>Show Less</button>):(<button onClick={changeDescState}>Show More</button>)
  return (
    <div className="tour">
      <div className="tour-image">
        <img src={image} alt={title} />
      </div>
      <div className="description-container">
        <div className="tour-header">
          <h2 className="title">{title}</h2>
          <h3 className="price">${price}</h3>
        </div>
  <div className="description">{description.length<=180?description:(showCompleteDesc?description:description.slice(0,180)+"...")}{description.length>180?descStateButton:null}</div>
        <button onClick={e => removeFromTours(e, id)}>Not interested</button>
      </div>
    </div>
  );
};

export default Tour;
