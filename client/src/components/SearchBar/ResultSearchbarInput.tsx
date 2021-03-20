import React from "react";

export function ResultSearchBarInput({ data, handleClick }) {
  return (
    <div className="contentResult">
      {data["searchProducts"]
        ? data["searchProducts"].slice(0, 3).map((item, i) => {
            return (
              <div key={i} className="contentResultItem">
                <div>
                  <div className="name" id={item.id} onClick={handleClick}>
                    {item.name}
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
