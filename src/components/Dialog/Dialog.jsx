import { dialog } from "./Dialog.module.css";
import { useHistory } from "react-router";
import ButtonPrimary from "../shared/ButtonPrimary";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Dialog({ message }) {
  const { errorPhotos, errorUserPhotos, errorUserProfile } =
    useContext(AppContext);

  const isError = errorPhotos || errorUserPhotos || errorUserProfile;
  const history = useHistory();

  return (
    <>
      <section className={dialog}>
        <h3>{message}</h3>
        {isError && (
          <ButtonPrimary text="Go Back" click={() => history.goBack()} />
        )}
      </section>
    </>
  );
}
