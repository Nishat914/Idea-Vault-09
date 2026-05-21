"use client";


import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button, FieldError, Input, Label, Modal, Surface, TextArea, TextField, TextFieldContext  , Select, ListBox} from "@heroui/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { FaBoxTissue, FaEdit, FaTrash } from "react-icons/fa";


const MyIdeasPage = () => {
  useEffect(() => {
    document.title = "Idea Vault | My-ideas";
  }, []);

  const { data: session } = authClient.useSession();
  const [ideas, setIdeas] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(null);
  

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${session.user.email}`)
        .then((res) => res.json())
        .then((data) => setIdeas(data));
    }
  }, [session]);

  const handleDelete = async (id) => {
  try {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (res.ok) {
      setIdeas(ideas.filter((idea) => idea._id !== id));
    }
    toast.success("deleted successfully!")
  } catch (error) {
    toast.error(error);
  }
};
    const handleUpdate = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const updatedIdea = Object.fromEntries(formData.entries());

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${selectedIdea._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedIdea),
      }
    );

    const data = await res.json();

    if (res.ok) {
      setIdeas(
        ideas.map((idea) =>
          idea._id === selectedIdea._id ? { ...idea, ...updatedIdea } : idea
        )
        
      );
      toast.success("updated successfully!")
    }
  } catch (error) {
    toast.error(error);
  }
};

  return (
    <>
        <div className="text-center mt-10">
            <h2 className="text-3xl font-bold text-mauve-700 dark:text-mauve-300">My Ideas</h2>
            <p className="font-semibold text-mauve-500 mt-4">A space where all my shared ideas, creativity, and inspirations come together</p>
        </div>
        <div className="container mx-auto w-[80%] mt-20">
            {ideas.length > 0 ? 
            (
                    ideas.map((idea) => (
        <div key={idea._id} className=" mt-4 bg-linear-to-r from-pink-100 via-mauve-300 to-mauve-400 rounded-2xl">
          <div className="card lg:card-side  shadow-sm">
            <figure>
                <img
                src={idea.imageURL}
                alt="Album"  className="rounded-2xl"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{idea.title}</h2>
                <p>{idea.detailedDescription}</p>
                <p>Target-Audience : {idea.targetAudience}</p>
                <p>Category : <button className="px-4 rounded-2xl shadow-sm bg-mauve-300 text-mauve-600">{idea.category}</button></p>
                <p>Tags : <button className="px-4 rounded-2xl shadow-sm bg-mauve-300 text-mauve-600">{idea.tags}</button></p>
                <div className="card-actions justify-end">
                <div className="flex gap-2 ">
                                {/* Edit */}
                                <Modal>

                                    <Button
                                        onPress={() => setSelectedIdea(idea)}
                                        className="p-2 rounded-full bg-mauve-600 hover:bg-mauve-400"
                                    >
                                        <FaEdit className="text-white" />
                                    </Button>

                                <Modal.Backdrop>
                                    <Modal.Container placement="auto">
                                    <Modal.Dialog className="sm:max-w-xl">
                                        <Modal.CloseTrigger />
                                        <Modal.Header>
                                        <Modal.Heading>Edit My Ideas</Modal.Heading>
                                        </Modal.Header>
                                        <Modal.Body className="p-6">
                                        <Surface variant="default">
                                            <form onSubmit={handleUpdate} className="p-6 space-y-5">
                                            <TextField
                                                name="title"
                                                defaultValue={selectedIdea?.title}
                                                isRequired
                                            >
                                                <Label>Title</Label>
                                                <Input className={"w-full bg-mauve-200 text-mauve-700"}/>
                                            </TextField>

                                            <TextField
                                                name="description"
                                                defaultValue={selectedIdea?.description}
                                                isRequired
                                                
                                            >
                                                <Label>Description</Label>
                                                <TextArea />
                                            </TextField>

                                            <TextField
                                                name="tags"
                                                defaultValue={selectedIdea?.tags}
                                                isRequired
                                            >
                                                <Label>Tags</Label>
                                                <Input className={"w-full bg-mauve-200 text-mauve-700"}/>
                                            </TextField>

                                            <TextField
                                                name="detailedDescription"
                                                defaultValue={selectedIdea?.detailedDescription}
                                                isRequired
                                            >
                                                <Label>Detailed Description</Label>
                                                <TextArea />
                                            </TextField>

                                            <TextField
                                                name="targetAudience"
                                                defaultValue={selectedIdea?.targetAudience}
                                                isRequired
                                            >
                                                <Label>Target Audience</Label>
                                                <Input className={"w-full bg-mauve-200 text-mauve-700"}/>
                                            </TextField>

                                            <TextField
                                                name="problemStatement"
                                                defaultValue={selectedIdea?.problemStatement}
                                                isRequired
                                            >
                                                <Label>Problem Statement</Label>
                                                <TextArea />
                                            </TextField>

                                            <TextField
                                                name="proposedSolution"
                                                defaultValue={selectedIdea?.proposedSolution}
                                                isRequired
                                            >
                                                <Label>Proposed Solution</Label>
                                                <TextArea />
                                            </TextField>

                                            <TextField
                                                name="imageURL"
                                                defaultValue={selectedIdea?.imageURL}
                                                isRequired
                                            >
                                                <Label>Image URL</Label>
                                                <Input className={"w-full bg-mauve-200 text-mauve-700"}/>
                                            </TextField>

                                            <Button type="submit" slot="close" className={"w-full bg-mauve-400"}>
                                                Update Idea
                                            </Button>
                                            </form>
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
                                            onPress={() => handleDelete(idea._id)}
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
                </div>
            </div>
            </div>
        </div>
      ))
            ) : (
                 <div className=" text-center py-8 bg-linear-to-r from-pink-200 via-mauve-400 to-mauve-500 rounded-2xl flex justify-center items-center flex-col gap-4">
                                <FaBoxTissue  className="text-4xl text-white" />
                                <p className="text-slate-200 text-lg">No Ideas yet!!</p>
                              </div>
            )
        }
      
        </div>
    </>
    
  );
};

export default MyIdeasPage;