/* All images were retrieved from this API: https://dog.ceo/dog-api/documentation/ */
/* useState hook creates a state variable called imageUrl and its corresponding updater function */
import { useEffect, useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState();
  const dogApi = "https://dog.ceo/api/breeds/image/random"; // API endpoint for fetching a single random dog image

  // useEffect hook performs side effects, fetches data when the component mounts
  useEffect(() => {
    fetch(dogApi)
      .then((response) => response.json())
      .then((json) => setImageUrl(json.message));
  }, []); // The empty array means this effect runs only once when the component mounts

  return (
    <div className="home relative">
      <img
        className="object-cover rounded-xl mb-4 w-full h-1/3"
        src={imageUrl}
      />
      <div
        className="absolute top-8 right-8 rounded-xl text-white p-8"
        style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}
      >
        <h1 className="font-bold text-2xl">
          Welcome to the kingdom of dogs, dear visitor!
        </h1>
      </div>
      <p className="text-xl leading-relaxed text-center mt-8 mb-2">
        With hundreds of lovely dog breeds to choose from, finding the right one
        for you can be a little bit daunting. We have you covered! Here is a
        list of dog breeds to show you which type of dog could be your perfect
        pet! Browse your favorite dog breeds below and find your potential new
        canine friend!{" "}
      </p>
      <p className="text-xl leading-relaxed text-center italic">
        Please, consider adopting from a shelter around you if you can. ❤️{" "}
      </p>
    </div>
  );
}
