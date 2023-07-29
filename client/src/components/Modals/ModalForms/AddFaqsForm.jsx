import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddFAQForm = ({ title }) => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleAddFAQ = () => {
    if (newQuestion && newAnswer) {
      setQuestions([
        ...questions,
        { question: newQuestion, answer: newAnswer },
      ]);
      setNewQuestion("");
      setNewAnswer("");
    }
  };

  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          Add Faqs
        </Typography>
        <Divider variant="li" />
      </Box>
      {questions.map((faq, index) => (
        <div key={index}>
          <Typography variant="h6">Question {index + 1}</Typography>
          <Typography>{faq.question}</Typography>
          <Typography variant="h6">Answer {index + 1}</Typography>
          <Typography>{faq.answer}</Typography>
          <Divider variant="li" />
        </div>
      ))}
      <TextField
        label="Question"
        variant="outlined"
        fullWidth
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Answer"
        variant="outlined"
        fullWidth
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
        sx={{ mb: 2 }}
      />
    </Box>
  );
};

export default AddFAQForm;
