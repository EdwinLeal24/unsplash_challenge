import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Dialog from "../Dialog/Dialog";
import PhotoCard from "../PhotoCard/PhotoCard";
import { GridOfPhotos } from "./GridPhotos.module.css";

export default function GridPhotos({ photos }) {
  const { isLoading } = useContext(AppContext);

  if (isLoading) return <Dialog message="Buscando fotos..." />;

  return (
    <div className={GridOfPhotos}>
      {photos.map(({ id, alt_description, urls, user }) => (
        <PhotoCard
          key={id}
          title={alt_description}
          url={urls.thumb}
          user={user}
        />
      ))}
    </div>
  );
}
