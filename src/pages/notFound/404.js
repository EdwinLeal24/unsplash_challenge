import { useHistory } from "react-router";
import Dialog from "../../components/Dialog/Dialog";
import ButtonPrimary from "../../components/shared/ButtonPrimary";

export default function NotFound() {
  const history = useHistory();

  return (
    <main>
      <ButtonPrimary text="Back to Home 🏠" click={() => history.goBack()} />
      <Dialog message={"It seems that this page does not exist!😰"} />
    </main>
  );
}
