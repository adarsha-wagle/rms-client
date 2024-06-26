import React from "react";

import { Grid, Box } from "@mui/material";

import RestaurantCard from "src/component/cards/restaurant_card";
import ShowLoaderError from "src/component/show_loader_error/show_loader_error";

function RenderRestaurantList({
  restaurantList,
  isRestaurantListLoading,
  goToShowRestaurantMenuPage,
}) {
  return (
    <Box>
      <ShowLoaderError
        isLoading={isRestaurantListLoading}
        dataList={restaurantList}
      />
      <Grid container spacing={2}>
        {restaurantList?.map((restaurant,index) => (
          <Grid item key={index}>
            <RestaurantCard
              restaurant={restaurant}
              goToShowRestaurantMenuPage={goToShowRestaurantMenuPage}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RenderRestaurantList;
