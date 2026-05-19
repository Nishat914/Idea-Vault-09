import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaEdit, FaTrash } from "react-icons/fa";
const CommentList = ({idea}) => {
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

                                <button
                                
                                className="p-2 rounded-full bg-mauve-600 hover:bg-mauve-400"
                                >
                                <FaTrash className="text-white" />
                                </button>
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