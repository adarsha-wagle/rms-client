import { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import {
  fetchCategoryList,
  fetchShowCategoryList,
} from "src/redux/restaurantMenuSlice";
import ShowLoader from "src/component/ui/show_loader";

function FirstSectionCategories({ setSelectedCategoryFoodList }) {
  const dispatch = useDispatch();

  const { userName } = useParams();

  const [selectedCategory, setSelectedCategory] = useState("");

  const categoryList = useSelector(
    (state) => state.restaurantMenu.categoryList
  );
  const isShowCategoryListLoading = useSelector(
    (state) => state.restaurantMenu.isShowCategoryListLoading
  );

  useEffect(() => {
    dispatch(fetchShowCategoryList({ userName }));
  }, [dispatch]);

  useEffect(() => {
    if (categoryList) {
      setSelectedCategory(categoryList[0]?.name);
      console.log(categoryList[0]);
      setSelectedCategoryFoodList(categoryList[0]?.items);
    }
  }, [categoryList]);

  function handleCategoryChange(item) {
    setSelectedCategory(item?.name);
    setSelectedCategoryFoodList(item?.items);
  }

  if (isShowCategoryListLoading) {
    return <ShowLoader />;
  }

  if (categoryList?.length === 0 && !isShowCategoryListLoading) {
    return (
      <Box>
        <Typography variant="h4">Not Added yet</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        whiteSpace: "nowrap",
        borderLeft: "2px solid orange",
        borderRight: "2px solid orange",
        borderRadius: "1rem",
      }}
    >
      {categoryList?.map((item) => {
        return (
          <Button
            key={item?._id}
            variant="text"
            onClick={() => handleCategoryChange(item)}
            sx={{
              textTransform: "capitalize",
              padding: "0",
              color: "black",
              fontSize: "15px",
              mx: "0.25rem",
            }}
            size="small"
            className={selectedCategory === item?.name ? "underline" : ""}
          >
            {item?.name}
          </Button>
        );
      })}
    </Box>
  );
}

export default FirstSectionCategories;
