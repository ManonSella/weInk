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

    // Sanitize
    const search = dogBreed.toLowerCase().trim();

    setImageUrls([]);

    // Stop here if we are searching for nothing
    if (search.length === 0) return;

    if (listOfBreeds.includes(search)) {
      const apiUrlByBreed = `https://dog.ceo/api/breed/${search}/images/random/9`;
      fetch(apiUrlByBreed)
        .then((response) => response.json())
        .then((json) => setImageUrls(json.message));
    } else {
      setErrorMessage("This breed does not exist");
    }
  };

  return (
    <div className="search">
      <h1 className="font-bold mb-2 text-4xl">Search for your favorite dog</h1>
      <p className="text-xl mb-8">
        …or discover new breeds among the hundreds of existing ones around the
        world.
      </p>

      <form
        className="flex flex-col lg:flex-row mx-auto mb-8 w-4/5"
        onSubmit={onSubmit}
      >
        <label
          className="lg:bg-white lg:border-2 py-4 lg:px-2 lg:rounded-l-lg"
          htmlFor="search-dog-breed"
        >
          Search images by dog breed:
        </label>
        <input
          className="flex-1 p-2 border-2 lg:border-l-0 rounded-lg lg:rounded-none lg:rounded-r-lg lg:mr-4 mb-4 lg:mb-0"
          id="search-dog-breed"
          list="breeds-list"
          disabled={isInputDisabled}
          type="search"
          value={dogBreed}
          onChange={(event) => setDogBreed(event.target.value)}
        />
        <datalist id="breeds-list">
          {listOfBreeds.map((breed, index) => {
            return <option key={index} value={breed}></option>;
          })}
        </datalist>
        <button className="bg-blue-900 rounded-lg p-4 text-white" type="submit">
          🔍 &nbsp;Search
        </button>
      </form>

      {errorMessage ? (
        <p className="text-red-500 text-center">{errorMessage}</p>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
        {imageUrls.map((imageUrl, index) => (
          <img
            className="object-cover rounded-xl size-full"
            key={index}
            src={imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
