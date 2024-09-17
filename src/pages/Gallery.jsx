import { useEffect, useState } from "react";
// Importing useEffect and useState hooks from React

export default function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);
  // Declaring a state variable imageUrls initialized to an empty array
  const multipleDogPicsUrl = "https://dog.ceo/api/breeds/image/random/9";

  useEffect(() => {
    // useEffect hook to run a side effect (fetching data) when the component mounts
    fetch(multipleDogPicsUrl)
      .then((response) => response.json())
      .then((json) => setImageUrls(json.message));
  }, []);

  return (
    <div className="text-center gallery">
      <h1 className="font-bold mb-2 text-4xl">
        Dog pictures to brighten your day
      </h1>
      <p className="text-xl mb-8">
        Here are some random dog images to increase your daily dose of
        serotonin!
      </p>
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
