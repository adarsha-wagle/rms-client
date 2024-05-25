import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addFeedback } from "src/redux/feedbackSlice";
import { throwToastError } from "src/utils/throw_toast";

function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  const [label, setLabel] = useState("");
  const dispatch = useDispatch();

  const isAddFeedbackLoading = useSelector(
    (state) => state.feedback.isAddFeedbackLoading
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!feedback.trim() || !label.trim()) {
      throwToastError("Please Fill Up The Form");
      return;
    }

    dispatch(addFeedback({ feedback, label })).then((res) => {
      if (addFeedback.fulfilled.match(res)) {
        setFeedback("");
        setLabel("");
      }
    });
  };
  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Paper elevation={3} sx={{ padding: { xs: "1rem", md: "2rem" } }}>
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: "500" }}
          align="center"
          gutterBottom
        >
          Restaurant Feedback Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box marginBottom={2}>
            <TextField
              fullWidth
              label="Your Feedback"
              variant="outlined"
              multiline
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </Box>
          <Box marginBottom={2}>
            <TextField
              fullWidth
              select
              label="Label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              variant="outlined"
              required
            >
              <MenuItem value="positive">Positive</MenuItem>
              <MenuItem value="neutral">Neutral</MenuItem>
              <MenuItem value="negative">Negative</MenuItem>
            </TextField>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button type="submit" variant="contained" color="primary">
              {isAddFeedbackLoading ? "Submitting..." : "Submit Feedback"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default FeedbackPage;
