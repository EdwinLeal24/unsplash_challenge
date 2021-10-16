import { useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../../context/AppContext";
import {
  profileInfo,
  avatar,
  info,
  stat,
  data,
} from "./InfoProfile.module.css";
import { HOME_PATH } from "../../routing/paths";

export default function InfoProfile() {
  const { userProfile, isLoading } = useContext(AppContext);

  const {
    profile_image,
    followers_count,
    following_count,
    total_photos,
    name,
  } = userProfile;

  const history = useHistory();

  if (!userProfile) history.push(HOME_PATH);

  if (isLoading) return <h3>Loading user...</h3>;
  return (
    <div className={profileInfo}>
      <img
        src={profile_image && profile_image.large}
        alt={`Avatar ${name}`}
        className={avatar}
      />
      <div className={info}>
        <p className={data}>
          <span className={stat}>{followers_count}</span>
          <span>Seguidores</span>
        </p>
        <p className={data}>
          <span className={stat}>{following_count}</span>
          <span>Siguiendo</span>
        </p>
        <p className={data}>
          <span className={stat}>{total_photos}</span>
          <span>Total Fotos</span>
        </p>
      </div>
    </div>
  );
}
