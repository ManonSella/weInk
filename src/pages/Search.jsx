import { useState } from "react";

export default function Search() {
  const [dogBreed, setDogBreed] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const apiUrlByBreed = `https://dog.ceo/api/breed/${dogBreed}/images/random/10`;
    fetch(apiUrlByBreed)
      .then((response) => response.json())
      .then((json) => setImageUrls(json.message));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="search-dog-breed">Search images by dog breed: </label>
        <input
          id="search-dog-breed"
          type="search"
          value={dogBreed}
          onChange={(event) => setDogBreed(event.target.value)}
        />
        <button>Search</button>
      </form>
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} />
      ))}
    </>
  );
}
