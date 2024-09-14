import { useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState();
  const dogApi = "https://dog.ceo/api/breeds/image/random";

  if (!imageUrl) {
    fetch(dogApi)
      .then((response) => response.json())
      .then((json) => setImageUrl(json.message));
  }

  return (
    <div className="home">
      Hello from home <img src={imageUrl} />
    </div>
  );
}
