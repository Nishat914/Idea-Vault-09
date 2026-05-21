"use client";

import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { AlertDialog, Button, Modal, Surface, TextArea } from "@heroui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const CommentList = ({ idea }) => {
  const { data: session } = authClient.useSession();

  const [comments, setComments] = useState(idea?.comments || []);
  const [editText, setEditText] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  const handleDeleteComment = async (index) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${idea._id}/comments/${index}/delete`,
        {
          method: "PATCH",
        }
      );

      if (res.ok) {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
        toast.success("Comment deleted successfully!");
      } else {
        toast.error("Failed to delete comment!");
      }
    } catch (error) {
      toast.error("Failed to delete comment!");
    }
  };

  const handleEditComment = async () => {
    if (!editText.trim()) {
      toast.error("Comment cannot be empty!");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${idea._id}/comments/${selectedIndex}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            text: editText,
          }),
        }
      );

      if (res.ok) {
        const updatedComments = [...comments];
        updatedComments[selectedIndex].text = editText;
        setComments(updatedComments);

        toast.success("Comment updated successfully!");
        setEditText("");
        setSelectedIndex(null);
      } else {
        toast.error("Failed to update comment!");
      }
    } catch (error) {
      toast.error("Failed to update comment!");
    }
  };
  console.log(comments,"comments")

  return (
    <div className="space-y-5">
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div
            key={index}
            className="border border-mauve-600 rounded-2xl p-5 bg-mauve-500 flex flex-col md:flex-row gap-3 justify-between items-center"
          >
            <div className="flex gap-4 items-start">
              <img
                src={comment.userImage || "/default-avatar.png"}
                alt={comment.userName || "User"}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <div>
                  <h4 className="font-semibold text-white">
                    {comment.userName || "Anonymous User"}
                  </h4>

                  <p className="text-sm text-mauve-300">{comment.createdAt
}</p>
                </div>

                <p className="mt-4 text-white">{comment.text}</p>
              </div>
            </div>

            {session?.user?.id === comment.userId && (
              <div className="flex gap-2">
                {/* Edit */}
                <Modal>
                  <Button
                    onPress={() => {
                      setSelectedIndex(index);
                      setEditText(comment.text);
                    }}
                    className="p-2 rounded-full bg-mauve-600 hover:bg-mauve-400"
                  >
                    <FaEdit className="text-white" />
                  </Button>

                  <Modal.Backdrop>
                    <Modal.Container placement="auto">
                      <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                          <Modal.Heading className="text-mauve-600 text-2xl">
                            Edit Comment
                          </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                          <Surface variant="default">
                            <div className="p-6 space-y-6">
                              <TextArea
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                placeholder="Update your comment..."
                              />

                              <Modal.Footer>
                                <Button
                                  onPress={handleEditComment}
                                  className="bg-mauve-600 text-white"
                                  slot="close"
                                >
                                  Save
                                </Button>
                              </Modal.Footer>
                            </div>
                          </Surface>
                        </Modal.Body>
                      </Modal.Dialog>
                    </Modal.Container>
                  </Modal.Backdrop>
                </Modal>

                {/* Delete */}
                <AlertDialog>
                  <Button className="p-2 rounded-full bg-mauve-600 hover:bg-mauve-400">
                    <FaTrash className="text-white" />
                  </Button>

                  <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                      <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                          <AlertDialog.Icon status="danger" />
                          <AlertDialog.Heading>
                            Delete comment permanently?
                          </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                          <p>
                            This will permanently delete this comment. This
                            action cannot be undone.
                          </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                          <Button slot="close" variant="tertiary">
                            Cancel
                          </Button>

                          <Button
                            onClick={() => handleDeleteComment(index)}
                            slot="close"
                            className="bg-mauve-600 text-white"
                          >
                            Delete
                          </Button>
                        </AlertDialog.Footer>
                      </AlertDialog.Dialog>
                    </AlertDialog.Container>
                  </AlertDialog.Backdrop>
                </AlertDialog>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="text-center py-8 bg-linear-to-r from-pink-200 via-mauve-400 to-mauve-500 rounded-2xl flex justify-center items-center flex-col gap-4">
          <IoChatboxEllipsesOutline className="text-4xl text-white" />
          <p className="text-slate-200 text-lg">No comments yet!!</p>
        </div>
      )}
    </div>
  );
};

export default CommentList;