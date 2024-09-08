"use client";
import { addFavourites } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import SocialComponent from "./SocialComponent";

function FavShare({ recipesId }) {

  const { auth, setAuth } = useAuth();

  const isFavourite = auth?.favourites.find((id) => id === recipesId);

  const [favourite, setFavourite] = useState(isFavourite);

  async function toggleFavourite() {
    const updateuser = await addFavourites(recipesId, auth._id);
    setFavourite(!favourite);
    setAuth(updateuser);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShare = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex gap-4 justify-end">
      <div
        onClick={auth ? toggleFavourite : null}
        className={`flex gap-2 text-gray-600 ${
          auth ? "cursor-pointer" : "cursor-not-allowed"
        } hover:text-[#eb4a36]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={favourite ? "red" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
        <span>Favourite</span>
      </div>

      <div
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
        onClick={handleShare}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <SocialComponent
            socialUrl={`http://localhost:3000/recipes/${recipesId}`}
          />
        </Modal>
      )}
    </div>
  );
}

export default FavShare;
