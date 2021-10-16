import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  heading,
  searcher,
  input,
  setOrderBy,
  button,
} from "./Header.module.css";

export function Header() {
  const { handleSearch, keyword, getData } = useContext(AppContext);

  const buttons = ["Latest", "Oldest", "Popular"];

  return (
    <>
      <div className={heading}>
        <div className={searcher}>
          <input
            className={input}
            onChange={(event) => handleSearch(event.target.value)}
            type="text"
            name="image"
            value={keyword}
            placeholder="Search for images"
          />
          <button
            onClick={() => getData(keyword)}
            type="submit"
            className={button}
          >
            Search
          </button>
        </div>

        <div className={setOrderBy}>
          {React.Children.toArray(
            buttons.map((text) => (
              <button
                onClick={() => getData(text)}
                type="submit"
                className={button}
              >
                {text}
              </button>
            ))
          )}
        </div>
      </div>
    </>
  );
}
