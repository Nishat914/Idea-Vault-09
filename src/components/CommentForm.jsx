"use client";

import { Button, TextArea } from "@heroui/react";
import { useState } from "react";

const CommentForm = ({ ideaId }) => {
  const [comment, setComment] = useState("");

  const handleAddComment = async () => {
    if (!comment.trim()) return;

    const commentData = {
      user: "Anonymous User",
      text: comment,
      time: new Date().toLocaleString(),
    };

    await fetch(`http://localhost:5000/ideas/${ideaId}/comments`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    });

    setComment("");
    window.location.reload();
  };

  return (
    <div className="space-y-4">
      <TextArea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button
        className="bg-mauve-500 text-white"
        onPress={handleAddComment}
      >
        Add Comment
      </Button>
    </div>
  );
};

export default CommentForm;