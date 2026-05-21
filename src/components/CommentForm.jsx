"use client";

import { authClient } from "@/lib/auth-client";
import { Button, TextArea } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const CommentForm = ({ ideaId }) => {
  const { data: session } = authClient.useSession();
      console.log(session,"session")
  const [comment, setComment] = useState("");

  const handleAddComment = async () => {
    if (!comment.trim()) {
      toast.error("Comment cannot be empty!");
      return;
    }

    const commentData = {
      ideaId,
      userId: session?.user?.id,
      userName: session?.user?.name,
      userEmail: session?.user?.email,
      userImage: session?.user?.image,
      text: comment,
      createdAt: new Date(),
    };

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${ideaId}/comments`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(commentData),
        });

        if (!res.ok) {
          toast.error("Failed to add comment");
          return;
        }

        toast.success("Comment added successfully!");
        setComment("");

        setTimeout(() => {
          window.location.reload();
        }, 1000);

      } catch (error) {
        toast.error("Something went wrong!");
      }
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