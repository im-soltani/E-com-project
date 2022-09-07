import React from 'react'

function Item({ data }) {
    const { title, description ,image} = data;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "8px",
        padding: "8px",
      }}
    >
      <img src={image} alt="icon" width="60px" height="60px" />
      <div style={{ padding: "12px" }}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Item
