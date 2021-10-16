import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { USER_PHOTOS_PATH } from "../../routing/paths";
import {
  photoFrame,
  userSection,
  avatarUser,
  userName,
} from "./PhotoCard.module.css";

export default function PhotoCard({ altText, url, user }) {
  const { fetchUser } = useContext(AppContext);
  const { profile_image, name, instagram_username } = user;

  return (
    <div className={photoFrame}>
      <img loading="lazy" alt={altText} src={url} />
      <div>
        <button>
          <Link to={USER_PHOTOS_PATH} className={userSection}>
            <img
              src={profile_image.medium}
              alt="User avatar"
              className={avatarUser}
            />
            <p onClick={() => fetchUser(user.username)} className={userName}>
              {name}
              <span>@{instagram_username}</span>
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
}
