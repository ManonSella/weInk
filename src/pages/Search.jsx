import { useEffect, useState } from "react";

export default function Search() {
  // State to manage whether the input is disabled
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  // State to hold the selected dog breed
  const [dogBreed, setDogBreed] = useState("");
  // State to store image URLs for the selected breed
  const [imageUrls, setImageUrls] = useState([]);
  // State to store the list of dog breeds
  const [listOfBreeds, setListOfBreeds] = useState([]);
  // State to handle any error messages
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
    // Clear any previous error messages
    setErrorMessage("");

    // Sanitize the input: convert it to lowercase and trim whitespace
    const search = dogBreed.toLowerCase().trim();

    // Clear any previously loaded images
    setImageUrls([]);

    // If the search string is empty, exit the function
    if (search.length === 0) return;

    // Check if the sanitized breed name is in the list of known breeds
    if (listOfBreeds.includes(search)) {
      const apiUrlByBreed = `https://dog.ceo/api/breed/${search}/images/random/9`;
      fetch(apiUrlByBreed)
        .then((response) => response.json())
        .then((json) => setImageUrls(json.message));
    } else {
      // If the typed breed is not found, set an error message
      setErrorMessage("Sorry! This breed does not exist.");
    }
  };

  return (
    <div className="search">
      <h1 className="text-center font-bold mb-2 text-4xl">
        Search for your favorite dog
      </h1>
      <p className="text-center text-xl mb-8">
        …or discover new breeds among the hundreds of existing ones around the
        world.
      </p>
      <form
        className="flex flex-col lg:flex-row mx-auto mb-8 w-4/5"
        onSubmit={onSubmit}
      >
        <label
          className="font-medium lg:bg-white lg:border-2 py-4 lg:px-2 lg:rounded-l-lg"
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
        {/* HTML element that defines a list of options for the input box */}
        <datalist id="breeds-list">
          {listOfBreeds.map((breed, index) => {
            return <option key={index} value={breed}></option>; // unique key which helps React manage updates.
          })}
        </datalist>
        <button
          className="bg-[#1e6262] hover:bg-[#f5e1da] transition ease-in-out delay-150 border border-teal-800 rounded-lg p-4 hover:text-teal-800 text-white"
          type="submit"
        >
          {/*&nbsp = non-breaking space character in HTML*/}
          🔍 &nbsp;Search
        </button>
      </form>
      {/* Conditionally rendering an error message if errorMessage is truthy*/}
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
