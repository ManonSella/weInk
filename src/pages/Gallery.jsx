import { useEffect, useState } from "react";

export default function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);
  const multipleDogPicsUrl = "https://dog.ceo/api/breeds/image/random/9";

  useEffect(() => {
    fetch(multipleDogPicsUrl)
      .then((response) => response.json())
      .then((json) => setImageUrls(json.message));
  }, []);

  return (
    <div className="gallery">
      Hello from gallery
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} />
      ))}
    </div>
  );
}
