import { Avatar, Button, Card, Input } from "@heroui/react";
import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export const metadata = {
  title: "Idea Vault - all-idea",
};

const IdeasPage = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";
  const category = params?.category || "";

  const query = new URLSearchParams();

  if (search) query.append("search", search);
  if (category) query.append("category", category);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas?${query.toString()}`,
    {
      cache: "no-store",
    }
  );

  const ideas = await res.json();

  return (
    <>
      {/* Search + Filter */}
      <div className="container mx-auto w-[80%] mt-10 flex flex-col md:flex-row justify-between gap-4">
  
        {/* Search */}
        <form action="/ideas" className="flex gap-3 w-full md:w-1/2">
            <Input
            name="search"
            placeholder="Search ideas by title..."
            defaultValue={search}
            className="flex-1 bg-mauve-300"
            />

            <Button
            type="submit"
            className="bg-mauve-500 text-white px-6"
            >
            Search
            </Button>

            <Link href="/ideas">
            <Button variant="bordered">
                Reset
            </Button>
            </Link>
        </form>

        {/* Filter */}
        <form action="/ideas" className="flex justify-center items-center gap-3 w-full md:w-auto">
            <select
            name="category"
            defaultValue={category}
            className=" rounded-xl px-4 py-3 bg-mauve-300 min-w-50 text-mauve-600 "
            >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="AI">AI</option>
            </select>

            <Button
            type="submit"
            className="bg-mauve-500 text-white px-6"
            >
            Filter
            </Button>
        </form>
        </div>

      {/* Ideas */}
      <div className="container mx-auto w-[80%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
        {ideas.length > 0 ? (
          ideas.map((idea) => (
            <Card
              key={idea._id}
              className="bg-linear-to-t from-pink-100 via-mauve-200 to-mauve-300"
            >
              <img
                alt={idea.title}
                className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
                loading="lazy"
                src={idea.imageURL}
              />

              <Card.Header>
                <Card.Title className="text-mauve-600">
                  {idea.title}
                </Card.Title>
                <Card.Description>
                  category : {idea.category}
                </Card.Description>
              </Card.Header>

              <Card.Footer className="flex gap-2">
                <Avatar aria-label="profile picture" className="size-5">
                  <Avatar.Image src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg" />
                  <Avatar.Fallback className="text-xs">IH</Avatar.Fallback>
                </Avatar>

                <span className="text-xs text-mauve-600">
                  {idea.targetAudience}
                </span>
              </Card.Footer>

              <Link href={`/details-idea/${idea._id}`}>
                <Button className="w-full bg-mauve-500 text-white text-sm">
                  View Details <LuSquareArrowOutUpRight />
                </Button>
              </Link>
            </Card>
          ))
        ) : (
          <p className="text-center col-span-full text-xl text-mauve-600">
            No ideas found
          </p>
        )}
      </div>
    </>
  );
};

export default IdeasPage;