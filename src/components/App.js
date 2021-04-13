import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";



function App() {

const [listings, setListings] = useState([])
const [search, setSearch] = useState("")

function handleRemoveListing(listingID){
const updatedListings = listings.filter((listingObj) => listingObj.id !== listingID)
setListings(updatedListings)
}

const displayedListings = listings.filter((listing) => 
listing.description.toLowerCase().includes(search.toLowerCase()))

useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then((r) => r.json())
  .then((listingsArray) => {setListings(listingsArray)
  })
}, [])
  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer listings={displayedListings}
      onRemoveListing={handleRemoveListing}/>
    </div>
  );
}

export default App;
