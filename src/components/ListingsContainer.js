import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({listings, onRemoveListing}) {

  const listingcards = listings.map((listingObj => {
    return (
      <ListingCard
      key={listingObj.id}
      listing={listingObj}
      onRemoveListing={onRemoveListing}
      />
    )
  }))
  return (
    <main>
      <ul className="cards">
        {listingcards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
