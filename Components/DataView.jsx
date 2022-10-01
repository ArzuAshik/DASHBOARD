import React from "react";

export default function DataView({
  list = [],
  isLoading = true,
  title = "",
  property = "",
}) {
  return (
    <div style={{ border: "1px solid", margin: "10px", padding: "10px" }}>
      <h2>{title}</h2>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        list.map((item) => <p key={item.id}>{item[property]}</p>)
      )}
    </div>
  );
}
