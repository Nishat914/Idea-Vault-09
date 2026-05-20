"use client"

import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { AlertDialog, Button, Modal, Surface, TextArea } from "@heroui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

const CommentList = ({idea}) => {
    const [editText, setEditText] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleDeleteComment = async (index) => {
         try {
            const res = await fetch(
                `http://localhost:5000/ideas/${idea._id}/comments/${index}/delete`,
                {
                    method: "PATCH",
                }
            );

        if (res.ok) {
                toast.success("Comment deleted successfully!");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
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
                `http://localhost:5000/ideas/${idea._id}/comments/${selectedIndex}`,
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
                toast.success("Comment updated successfully!");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (error) {
            toast.error("Failed to update comment!");
        }
    };
    
    return(
        <>
            <div className="space-y-5">
                {idea?.comments?.length > 0 ? (
                    idea.comments.map((comment, index) => (
                        <div
                            key={index}
                            className="border border-mauve-600 rounded-2xl p-5 bg-mauve-500 flex justify-between items-center"
                        >
                            <div>
                                <div>
                                <h4 className="font-semibold text-white">
                                    {comment.user}
                                </h4>
            
                                <p className="text-sm text-slate-300">
                                    {comment.time}
                                </p>
                            </div>
            
                            <p className="mt-4 text-white">
                                {comment.text}
                            </p>
                            </div>

                            <div className="flex gap-2">
                               
                                <div>
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
                                                <Modal.Heading className="text-mauve-600 text-2xl">Edit Comment</Modal.Heading>
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
                                </div>
                                <div>
                                    <AlertDialog>
                                          <Button className="p-2 rounded-full bg-mauve-600 hover:bg-mauve-400" >
                                            <FaTrash className="text-white" />
                                          </Button>
                                          <AlertDialog.Backdrop>
                                            <AlertDialog.Container>
                                              <AlertDialog.Dialog className="sm:max-w-100 ">
                                                <AlertDialog.CloseTrigger />
                                                <AlertDialog.Header>
                                                  <AlertDialog.Icon status="danger" />
                                                  <AlertDialog.Heading>
                                                    Delete comment permanently?
                                                  </AlertDialog.Heading>
                                                </AlertDialog.Header>
                                                <AlertDialog.Body>
                                                  <p>
                                                    This will permanently delete and all of its data. This action cannot be undone.
                                                  </p>
                                                </AlertDialog.Body>
                                                <AlertDialog.Footer>
                                                  <Button slot="close" variant="tertiary">
                                                    Cancel
                                                  </Button>
                                                  <Button onClick={() => handleDeleteComment(index)} slot="close" className="p-2 rounded-full bg-mauve-600 hover:bg-mauve-400" >
                                                    Delete
                                                  </Button>
                                                </AlertDialog.Footer>
                                              </AlertDialog.Dialog>
                                            </AlertDialog.Container>
                                          </AlertDialog.Backdrop>
                                    </AlertDialog>
                                </div>
                        
                            </div>
                            
                                
                        </div>
                                ))
                    ) : (
                            <div className="text-center py-8 bg-linear-to-r from-pink-200 via-mauve-400 to-mauve-500 rounded-2xl flex justify-center items-center flex-col gap-4">
                                    <IoChatboxEllipsesOutline />
                                <p className="text-slate-200 text-lg">
                                    No comments yet!!
                                </p>
                            </div>
                )}
            </div>
        </>
    )
}
export default CommentList