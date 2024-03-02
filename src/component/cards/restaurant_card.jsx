import React from "react";

import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  Typography,
} from "@mui/material";

export default function RestaurantCard({
  restaurant,
  goToShowRestaurantMenuPage,
}) {
  return (
    <Card sx={{ maxWidth: { xs: "100%", sm: 300 }, minWidth: 250 }}>
      <CardActionArea
        onClick={() => goToShowRestaurantMenuPage(restaurant?.name)}
      >
        <CardMedia
          component="img"
          height="140"
          image={restaurant?.profileImage || ""}
          alt={restaurant?.name || ""}
          sx={{ backgroundSize: "cover" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textTransform: "capitalize" }}
          >
            {restaurant?.name || ""}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textTransform: "capitalize" }}
          >
            {restaurant?.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {restaurant?.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {restaurant?.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
