import React from "react";
import { Box, Typography } from "@mui/material";
import ShowLoader from "../ui/show_loader";
function ShowLoaderError({ isLoading, dataList }) {
  const showLoading = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "25vh",
        width: "100%",
      }}
    >
      <ShowLoader />
    </Box>
  );
  const showError = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "25vh",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography variant="h4">Unable to load</Typography>
      <p>No Restaurant Found</p>
    </Box>
  );

  return (
    <>
      {isLoading && showLoading}
      {dataList.length === 0 && !isLoading && showError}
    </>
  );
}

export default ShowLoaderError;
