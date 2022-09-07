import React, { useState, useEffect } from "react";
import { cls } from "reactutils";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../actions/productActions";
function Order({list}) {
  
    const [active, setActive] = useState("");
    const [searchKeyword] = useState("");
    const category = "";
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listProducts(category, searchKeyword, active));
      
  
      return () => {
        //
      };
    }, [active, dispatch, searchKeyword]);

    return (
        <>
            <div
        className="dailyDeals"
        style={{
          position: "relative",
          padding: "32px 48px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "26px",
          margin: "auto",
          width: "fit-content",
        }}
      >
        DAILY DEALS!
      </div>
      <div
        className="listView"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {list &&
          list.map((el, index) => (
            <span
              key={index}
              style={{
                margin: "8px",
                padding: "8px",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              className={cls(
                "listViewItem",
                active === el.key && active !== "all" ? "active" : "",
                active === "all" ? "position" : ""
              )}
              onClick={() => setActive(el.key)}
            >
              {el.label}
            </span>
          ))}
      </div>
        </>
    )
}

export default Order
