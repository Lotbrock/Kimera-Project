import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./utilities/helpers";

const PuzzleGame = () => {
  const [imgUrl, setImgUrl] = useState("");
  const img1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJS7zAAiuIwNieXX_I3y0tXsIITGvHg_tyw&usqp=CAU";
  const img2 =
    "https://forums.civfanatics.com/images/war_academy/civ5/leaders/big/pachacuti.png";
  const img3 =
    "https://vignette.wikia.nocookie.net/legados-de-las-civilizaciones-americanas/images/0/0a/El_Sapa_Inca.jpg/revision/latest/top-crop/width/220/height/220?cb=20160602002824&path-prefix=es";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"));
    }
  }, []);

  const handleImageChange = (e) => {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
        setImgUrl(img1);
        window.history.replaceState(
          "",
          "",
          updateURLParameter(window.location.href, "img", img1)
        );
        break;
      case 1:
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
        setImgUrl(img2);
        window.history.replaceState(
          "",
          "",
          updateURLParameter(window.location.href, "img", img2)
        );
        break;
      case 2:
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        setImgUrl(img3);
        window.history.replaceState(
          "",
          "",
          updateURLParameter(window.location.href, "img", img3)
        );
        break;
      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        setImgUrl(e.target.value);
        window.history.replaceState(
          "",
          "",
          updateURLParameter(window.location.href, "img", e.target.value)
        );
        break;
    }
  };
  return (
    <div className="App">
      <h1 className="games-title">Puzzle Incas</h1>

      <button className="btn btn-danger" onClick={handleImageChange}>
        Imagen al Azar
      </button>
      <Board imgUrl={imgUrl} />
    </div>
  );
};

export default PuzzleGame;
