import React, { useState } from "react";
import { StyledCatalogue } from "./StyledCatalogue";

export default function Catalogue() {
  const mockup = {
    img:
      "https://essential.vteximg.com.br/arquivos/ids/316728-1000-1000/306-6588_1.jpg?v=637177191078730000",
    id: 1,
    name: "Nombre de Zapatilla",
    description: "Lorem ipsum dolor sit amet",
    price: 99,
    brand: "Nike",
    categories: [
      {
        name: "Casuales",
      },
      {
        name: "Deportivas",
      },
    ],
  };

  const products = [];

  for (let i = 0; i < 10; i++) {
    products.push(mockup);
  }

  return (
    <StyledCatalogue>
      <div className="modal" style={{ display: "none" }}></div>
      {products.map((item) => (
        <img src={item.img} alt={`${item.name} image`} className="productImg" />
      ))}
    </StyledCatalogue>
  );
}
