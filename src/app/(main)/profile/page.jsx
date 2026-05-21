'use client'

import { useSession } from "@/lib/auth-client";
import { Card, Avatar, Button } from "@heroui/react";
import { useEffect } from "react";

const MyProfilePage = () => {
  useEffect(() => {
    document.title = "Idea Vault | Profile";
  }, []);

  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <p className="text-mauve-600 dark:text-mauve-300 text-center mt-20">
        Loading...
      </p>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
    <div className="container mx-auto w-[80%] md:w-[70%] lg:w-[60%] mt-20">
      <div className="rounded-2xl p-6 bg-linear-to-r from-pink-100 via-mauve-300 to-mauve-400 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 shadow-xl">
        
        <div className="text-center my-3">
          <h1 className="text-3xl font-bold text-mauve-700 dark:text-white">
            My Profile
          </h1>
          <p className="font-semibold text-mauve-500 dark:text-gray-300 mt-4">
            View your personal information and manage your account.
          </p>
        </div>

        <Card className="bg-white/60 dark:bg-zinc-900/70 backdrop-blur-md p-8 mt-12 rounded-2xl shadow-lg border border-white/30 dark:border-zinc-700">
          <div className="flex flex-col items-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-mauve-500 shadow-md">
                <img
                    src={user.image}
                    alt={user.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-full space-y-5 mt-4">
              <div className="bg-mauve-100 dark:bg-zinc-800 p-4 rounded-xl">
                <p className="font-bold text-mauve-700 dark:text-white text-lg">
                  Name:
                  <span className="font-medium text-gray-700 dark:text-gray-300 ml-2">
                    {user.name}
                  </span>
                </p>
              </div>

              <div className="bg-mauve-100 dark:bg-zinc-800 p-4 rounded-xl">
                <p className="font-bold text-mauve-700 dark:text-white text-lg">
                  Email:
                  <span className="font-medium text-gray-700 dark:text-gray-300 italic ml-2">
                    {user.email}
                  </span>
                </p>
              </div>
            </div>

            <Button
              className="w-full md:w-auto bg-mauve-500 hover:bg-mauve-600 text-white mt-4 border-2 border-mauve-400 px-8"
              onClick={() => (window.location.href = "/update-profile")}
            >
              Update Profile
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MyProfilePage;