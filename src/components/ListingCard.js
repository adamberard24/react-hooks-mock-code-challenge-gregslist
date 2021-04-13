import React, {useState} from "react";

function ListingCard({listing, onRemoveListing}) {
  const {id, description, image, location} = listing

  const [isFavorited, setIsFavorited] = useState(false)

  function handleToggleFavorite() {
    setIsFavorited(!isFavorited)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",})
     
      onRemoveListing(id)
    

  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleToggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleToggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
