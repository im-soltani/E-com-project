import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import ProductCard from "./home/ProductCard";
import { TextField } from "@material-ui/core";
import { listCategories } from "../actions/categoryActions";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { uniqBy } from "lodash";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
function HomeScreen({ setNav }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [category, setCategory] = useState("");
  const productList = useSelector((state) => state.productList);
  const categoryList = useSelector((state) => state.categoryList.categories);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    input: {
      "& .MuiInputBase-input ": {
        fontSize: "14px",
      },
      "& .MuiOutlinedInput-input": {
        padding: "15px 14px",
      },
    },
    root: {
      "& .MuiFormLabel-root": {
        fontSize: "14px",
        background: "#fff",
        padding: "0 8px 0 5px",
      },
    },
    select: {
      "& .MuiSelect-select:not([multiple])": {
        fontSize: "14px",
        padding: "15px 14px",
      },
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    dispatch(listProducts(category));
    dispatch(listCategories());

    return () => {
      //
    };
  }, [category, dispatch]);

  let listOfProduct = products;

  if (searchKeyword) {
    // do search here
    const expr = new RegExp(searchKeyword, "i");
    listOfProduct = listOfProduct.filter((nal) => expr.test(nal["name"]));
  }

  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

;

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "32px",
          margin: "32px",
        }}
      >
        <TextField
          id="search"
          label="Search Product"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          variant="outlined"
          type="search"
          color="secondary"
          style={{ width: "18em" }}
          className={clsx(classes.input, classes.root)}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              textAlign: "center",
              margin: "16px 0",
            }}
          >
            Select Category
          </div>
          {categoryList &&
            uniqBy(categoryList, "label").map((el, index) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={category === el.label}
                      onClick={(e) =>
                        category !== el.label
                          ? setCategory(el.label)
                          : setCategory("")
                      }
                      name="checkedA"
                    />
                  }
                  label={el.label}
                  style={{ padding: "8px", width: "fit-content" }}
                />
              );
            })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "32px",
          margin: "35px 4em",
        }}
      >
        <div style={{ padding: "8px",  width: "250px"  }}>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            color="secondary"
            style={{ width: "100%" }}
          >
            <InputLabel
              htmlFor="outlined-rating-native-simple"
              style={{
                fontSize: "18px",
                background: "#fff",
              }}
            >
              Sort Product
            </InputLabel>
            <Select
              native
              value={sortOrder}
              onChange={sortHandler}
              inputProps={{
                name: "Ratin",
                id: "outlined-age-native-simple",
              }}
              className={classes.select}
            >
              {[
                { label: "Newest", value: "" },
                { label: "Highest", value: "highest" },
                { label: "Lowest", value: "lowest" },
              ].map(({ label }, index) => (
                <option
                  key={index}
                  style={{ padding: "16px 8px" }}
                  value={label}
                >
                  {label}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>
       
        {loading ? (
          <div style={{ padding: "8px", margin: "8px" }}>Loading...</div>
        ) : error ? (
          <div style={{ padding: "8px", margin: "8px" }}>{error}</div>
        ) : (
          <div
            className="products"
            style={{ display: "flex", flexFlow: "wrap" }}
          >
            {listOfProduct &&
              listOfProduct.map((product,index) => (
                <ProductCard key={index} data={product} setNav={setNav} />
                ))}
                </div>
        )}
              
      </div>
    </div>
  );
}
export default HomeScreen;
