"use client"

import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { AlertDialog, Button } from "@heroui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const CommentList = ({idea}) => {
    const handleDeleteComment = async (index) => {
        await fetch(
        `http://localhost:5000/ideas/${idea._id}/comments/${index}/delete`,
        {
            method: "PATCH",
        }
        );

        window.location.reload();
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
                                <button
                                className="p-2 rounded-full bg-mauve-600 hover:bg-mauve-400"
                                >
                                <FaEdit className="text-white" />
                                </button>
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