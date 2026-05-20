"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import {Button, Card, CloseButton} from "@heroui/react";

const MyIdeaInteractions = () => {
  const { data: session } = authClient.useSession();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!session?.user?.id) return;

    fetch(`http://localhost:5000/my-interactions/${session.user.id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [session]);

  return (
    <div>
      <h2 className="text-3xl text-mauve-600 font-bold text-center mt-20">My Interactions</h2>
      

      {comments.map((comment, index) => (
        <div key={index} className="container mx-auto w-[80%]">
          <Card className="w-full items-stretch md:flex-row bg-linear-to-r from-pink-100 via-mauve-300 to-mauve-400 p-6 mt-6 rounded-2xl">
            <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
                <img
                alt="Cherries"
                className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                loading="lazy"
                src={session?.user?.image}
                />
            </div>
            <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                <Card.Title className="pr-8 text-mauve-500">Idea Title : <span className="text-mauve-600 text-xl">{comment.ideaTitle}</span> </Card.Title>
                <Card.Description>

                    {comment.commentText}
                    
                </Card.Description>
                
                </Card.Header>
                
            </div>
            </Card>
        </div>
      ))}
    </div>
  );
};

export default MyIdeaInteractions;