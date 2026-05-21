import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import { auth } from "@/lib/auth";
import { Card, Avatar, Button, TextArea } from "@heroui/react";
import { headers } from "next/headers";
import { FaHeart, FaRegCommentDots, FaEdit, FaTrash } from "react-icons/fa";

export const metadata = {
  title: "Idea Vault - details-idea",
  
};

const IdeaDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    const tokenData = await auth.api.getToken({
      headers : await headers()
    })
    console.log(tokenData)
    const res = await fetch(`http://localhost:5000/ideas/${id}` , {
      headers : {
      authorization : `Bearer ${tokenData?.token}`
    }
    });
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

            <p className="text-mauve-500 leading-8 text-lg wrap-break-word ">
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
            <CommentList idea={idea}></CommentList>
            
          </div>
        </Card> 

        

      </div>
    </div>
  );
};

export default IdeaDetailsPage;