import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";

import { fetchRestaurantListAsync } from "src/redux/homeSlice";

import SearchBarStandard from "src/component/search_bar/search_bar_standard";
import RenderRestaurantList from "./render_restaurant_list";
import useDebounce from "src/hooks/useDebounce";
import { useRouter } from "src/hooks/useRouter";
import { addHyphen } from "src/utils/add_hyphen";

function FirstSectionRestaurantMenu() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const isRestaurantLoading = useSelector(
    (state) => state.home.isRestaurantLoading
  );
  const restaurantList = useSelector((state) => state.home.restaurantList);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    dispatch(fetchRestaurantListAsync({ searchQuery: debouncedSearchQuery }));
  }, [debouncedSearchQuery]);

  const goToShowRestaurantMenuPage = (userName) => {
    const lowerCaseTitle = addHyphen(userName);
    router.push(`restaurant/show/${lowerCaseTitle}`);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <SearchBarStandard
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <RenderRestaurantList
        restaurantList={restaurantList}
        isRestaurantLoading={isRestaurantLoading}
        goToShowRestaurantMenuPage={goToShowRestaurantMenuPage}
      />
    </Box>
  );
}

export default FirstSectionRestaurantMenu;
