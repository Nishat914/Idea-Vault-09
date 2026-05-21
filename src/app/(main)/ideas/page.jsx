import {Avatar, Button, Card} from "@heroui/react";
import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { motion } from "framer-motion";


export const metadata = {
  title: "Idea Vault - all-idea",
  
};
const IdeasPage = async() => {
    

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas` )
    const ideas = await res.json() 
    // console.log(ideas)

    
    return(
        <>
            <div className="container mx-auto w-[80%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-20 ">
                
                {ideas.map((idea) => {
                    return(
                        
                        <Card key={idea._id} className=" bg-linear-to-t from-pink-100 via-mauve-200 to-mauve-300">
                    <img
                    alt="Indie Hackers community"
                    className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
                    loading="lazy"
                    src={idea.imageURL}
                    />
                    <Card.Header>
                    <Card.Title className="text-mauve-600">{idea.title}</Card.Title>
                    <Card.Description>category : {idea.category}</Card.Description>
                    </Card.Header>
                    <Card.Footer className="flex gap-2">
                    <Avatar aria-label="Martha's profile picture" className="size-5">
                        <Avatar.Image
                        alt="Martha's avatar"
                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                        />
                        <Avatar.Fallback className="text-xs">IH</Avatar.Fallback>
                    </Avatar>
                    <span className="text-xs text-mauve-600 "> {idea.targetAudience}</span>
                    
                    </Card.Footer>
                    <Link href={`/details-idea/${idea._id}`}>
                        <Button isDisabled className="w-full bg-mauve-500 text-white text-sm">View Details <LuSquareArrowOutUpRight /> </Button>
                    </Link>
                    
                </Card>
                
                    )
                    
                })}
                 
               
            </div>
            
           
        </>
    )
}
export default IdeasPage