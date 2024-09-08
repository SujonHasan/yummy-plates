"use client";

import { useEffect, useState } from "react";

function RecipeImage({imgUrl}) {

  // console.log("image url ===  ", imgUrl);

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomImage = async () => {
        try {
          const response = await fetch(imgUrl);
          const data = await response.json();
          const randomImageUrl = data.urls.regular;
          // console.log("random url ===  ", randomImageUrl);
          setImageUrl(randomImageUrl);
        } catch (error) {
          console.error('Error fetching random image:', error.message);
          // Handle error
        }
      };

    fetchRandomImage();
  }, [imgUrl]);

  return <div>RecipeImage {imageUrl} </div>;
}

export default RecipeImage;
