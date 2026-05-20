
import {Avatar, Button, Card} from "@heroui/react";
import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";


const TreandingPage = async () => {
    const res = await fetch(`http://localhost:5000/ideas/trending`)
    const ideas = await res.json() 
    console.log(ideas)
    return(
        <>

            <div>
            <div>
                <h2 className=" text-5xl text-mauve-600 text-center font-bold mt-20 container mx-auto w-[80%] bg-linear-to-r from-pink-100 via-mauve-300 to-mauve-300 p-6 rounded-2xl">
                    The Future Is Built From Ideas Like These
                </h2>
                
            </div>
            <div>
                <h2 className=" text-5xl text-mauve-600 dark:text-mauve-300 font-bold mt-20 container mx-auto w-[80%] ">Top 6 Trending Idea :</h2>
            </div>

            <div className="container mx-auto w-[80%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16">
                            {ideas.map((idea) => {
                                return(
                                    <Card key={idea._id} className="h-full flex flex-col gap-2 bg-linear-to-t from-pink-100 via-mauve-200 to-mauve-300">
                                <img
                                alt="Indie Hackers community"
                                className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
                                loading="lazy"
                                src={idea.imageURL}
                                />
                                <Card.Header>
                                <Card.Title>{idea.title}</Card.Title>
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
                                <span className="text-xs"> {idea.targetAudience}</span>
                                
                                </Card.Footer>
                                <Link href={`/details-idea/${idea._id}`}>
                                    <Button isDisabled className="w-full bg-mauve-500 text-white text-sm">View Details <LuSquareArrowOutUpRight /> </Button>
                                </Link>
                                
                            </Card>
                                )
                                
                            })}
                             
            
                        </div>
                        </div>
                         
        </>
    )
}   
export default TreandingPage