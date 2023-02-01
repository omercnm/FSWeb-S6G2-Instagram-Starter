import React from "react";
import Yorum from "./Yorum";
import "./Yorumlar.css";

const Yorumlar = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar } = props;

  return (
    <div>
      {yorumlar.map((item) => (
        <Yorum yorum={item} key={item.id} />
      ))}
      ;
    </div>
  );
};

export default Yorumlar;
