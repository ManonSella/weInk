import { useEffect, useState } from "react";

/* All images were retrieved from this API: https://dog.ceo/dog-api/documentation/ */

export default function Home() {
  const [imageUrl, setImageUrl] = useState();
  const dogApi = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    fetch(dogApi)
      .then((response) => response.json())
      .then((json) => setImageUrl(json.message));
  }, []);

  return (
    <div className="home relative">
      <img
        className="object-cover rounded-xl mb-4 w-full h-1/3"
        src={imageUrl}
      />
      <div
        className="absolute top-8 right-8 rounded-xl text-white p-8"
        style={{ backgroundColor: "rgba(0, 0, 0, .4)" }}
      >
        <h1 className="font-bold text-4xl">Welcome to the kingdom of dogs</h1>
      </div>
      <p className="text-xl">
        With hundreds of lovely dog breeds to choose from, finding the right one
        for you can be a little bit daunting. We have you covered! Here is a
        list of dog breeds to show you which type of dog could be your perfect
        pet! Browse your favorite dog breeds below and find your potential new
        canine friend!{" "}
        <em>Please, consider adopting from a shelter around you.</em>
      </p>
    </div>
  );
}
