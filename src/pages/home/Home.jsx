import { useContext } from "react";
import GridPhotos from "../../components/GridPhotos/GridPhotos";
import { Header } from "../../components/Header/Header";
import { AppContext } from "../../context/AppContext";
import { main } from "./Home.module.css";

export default function Home() {
  const { listPhotos } = useContext(AppContext);

  return (
    <>
      <div className={main}>
        <Header />
        <div>
          <GridPhotos photos={listPhotos} />
        </div>
      </div>
    </>
  );
}
