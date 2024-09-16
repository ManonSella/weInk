import { useEffect, useState } from "react";

export default function Search() {
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [dogBreed, setDogBreed] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [listOfBreeds, setListOfBreeds] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const choiceOfBreeds = `https://dog.ceo/api/breeds/list/all`;
    fetch(choiceOfBreeds)
      .then((response) => response.json())
      .then((json) => {
        setIsInputDisabled(false);
        setListOfBreeds(Object.keys(json.message));
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (listOfBreeds.includes(dogBreed)) {
      const apiUrlByBreed = `https://dog.ceo/api/breed/${dogBreed}/images/random/10`;
      fetch(apiUrlByBreed)
        .then((response) => response.json())
        .then((json) => setImageUrls(json.message));
    } else {
      setErrorMessage("This breed does not exist");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="search-dog-breed">Search images by dog breed: </label>
        <input
          id="search-dog-breed"
          list="breeds-list"
          disabled={isInputDisabled}
          type="search"
          value={dogBreed}
          onChange={(event) => setDogBreed(event.target.value)}
        />
        {errorMessage ? <p>{errorMessage}</p> : null}
        <datalist id="breeds-list">
          {listOfBreeds.map((breed, index) => {
            return <option key={index} value={breed}></option>;
          })}
        </datalist>
        <button type="submit">Search</button>
      </form>
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} />
      ))}
    </>
  );
}
