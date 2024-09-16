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
    <>
      <div className="home">
        <h1>Hello and welcome to the kingdom of dogs</h1>
        <p>
          With hundreds of lovely dog breeds to choose from, finding the right
          one for you can be a little bit daunting. We have you covered! Here is
          a list of dog breeds to show you which type of dog could be your
          perfect pet! Browse your favorite dog breeds below and find your
          potential new canine friend!
          <em>Please, consider adopting from a et shelter around you.</em>
        </p>
        <img src={imageUrl} />
      </div>
    </>
  );
}
