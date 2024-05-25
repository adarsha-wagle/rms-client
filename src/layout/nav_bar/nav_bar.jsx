import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Typography, Box, Container } from "@mui/material";

import { fetchOrderStatusAsync } from "src/redux/navSlice";

function NavBar() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const orderedStatus = useSelector((state) => state.nav.orderedStatus);

  useEffect(() => {
    dispatch(fetchOrderStatusAsync());
    if (orderedStatus) {
      const intervalId = setInterval(() => {
        dispatch(fetchOrderStatusAsync());
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [dispatch, orderedStatus]);

  const isFeedbackRoute = pathname.startsWith("/feedback");

  return (
    <nav>
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: "1rem",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Restaurant Menu
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              gap: "0.2rem",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box className="underline" style={{ width: "4rem" }}></Box>
            <Box className="underline" style={{ width: "3rem" }}></Box>
            <Box className="underline" style={{ width: "2rem" }}></Box>
          </Box>
        </Box>
        {orderedStatus && (
          <Typography sx={{ variant: "body1" }}>
            Ordered Status : {orderedStatus}
          </Typography>
        )}
        {!isFeedbackRoute && (
          <Box
            sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
          >
            <Link
              to="/feedback"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "primary.main",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  color: "white",
                }}
              >
                Give Feedback
              </Typography>
            </Link>
          </Box>
        )}
      </Container>
    </nav>
  );
}

export default NavBar;
