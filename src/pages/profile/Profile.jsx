import { useContext } from "react";
import { useHistory } from "react-router";
import GridPhotos from "../../components/GridPhotos/GridPhotos";
import ButtonPrimary from "../../components/shared/ButtonPrimary";
import { AppContext } from "../../context/AppContext";
import { profileContainer, grid } from "./Profile.module.css";
import InfoProfile from "../../components/InfoProfile/InfoProfile";

export default function UserProfile() {
  const { userPhotos } = useContext(AppContext);

  const history = useHistory();

  return (
    <>
      <ButtonPrimary text="Back" click={() => history.goBack()} />
      <div className={profileContainer}>
        <InfoProfile />
        <div className={grid}>
          <GridPhotos photos={userPhotos} />
        </div>
      </div>
    </>
  );
}
