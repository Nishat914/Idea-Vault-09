import CommentForm from "@/components/CommentForm";
import { Card, Avatar, Button, TextArea } from "@heroui/react";
import { FaHeart, FaRegCommentDots, FaEdit, FaTrash } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";


const IdeaDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    const res = await fetch(`http://localhost:5000/ideas/${id}`);
    const idea = await res.json();
    console.log(idea)


  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Idea Details Card */}
        <Card className="bg-linear-to-r from-pink-100 via-mauve-300 to-mauve-400  shadow-2xl overflow-hidden">
          <img
            src={idea.imageURL}
            alt={idea.title}
            className="w-full h-100 object-cover rounded-2xl"
          />

          <div className="p-8 space-y-6">
            <div>
              <p className="text-sm text-mauve-400 font-medium">
                {idea.category}
              </p>

              <h1 className="text-4xl text-mauve-600 font-bold mt-2">
                {idea.title}
              </h1>
            </div>

            <p className="text-mauve-500 leading-8 text-lg">
              {idea.detailedDescription}
            </p>

            <div className="flex items-center justify-between border-t border-slate-800 pt-5">
              <div className="flex items-center gap-3">
                <Avatar src={"https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} />

                <div>
                  <p className="font-semibold text-mauve-400">
                    {idea.creatorName || "Anonymous"}
                  </p>

                  <p className="text-sm text-slate-400">
                    Posted on {idea?.createdAt || "Not specified"}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <FaHeart size={18} />
                  <span>{idea?.likes ?? 0}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaRegCommentDots size={18} />
                  <span>{idea?.comments?.length || 0}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Comment Section */}
        <Card className="bg-linear-to-r from-pink-100 via-mauve-300 to-mauve-400 ">
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-mauve-600">
              Comments
            </h2> 

            {/* Add Comment */}
            <CommentForm ideaId={id} />

            {/* Comments List */}
            <div className="space-y-5">
                {idea?.comments?.length > 0 ? (
                    idea.comments.map((comment, index) => (
                    <div
                        key={index}
                        className="border border-mauve-600 rounded-2xl p-5 bg-mauve-500"
                    >
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
          </div>
        </Card> 

        

      </div>
    </div>
  );
};

export default IdeaDetailsPage;