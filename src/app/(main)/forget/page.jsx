"use client";

import { Card, Separator } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useEffect } from "react";

const ForgetPasswordPage = () => {
  useEffect(() => {
    document.title = "Idea Vault | Forgot Password";
  }, []);

  return (
    <div className="container mx-auto w-[80%] md:w-[70%] lg:w-[60%] bg-linear-to-r from-pink-100 via-mauve-300 to-mauve-400 p-6 mt-20 rounded-2xl">
      <div className="text-center my-3">
        <h1 className="text-3xl font-bold text-mauve-700">
          Forgot Password
        </h1>
        <p className="font-semibold text-mauve-500 mt-4">
          Don’t worry! Enter your email and we’ll help you reset your password.
        </p>
      </div>

      <div>
        <Card className="bg-linear-to-r from-pink-100 via-mauve-300 to-mauve-400 p-6 mt-12 rounded-2xl">
          <Form className="flex flex-col gap-4">
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email Address</Label>
              <Input
                placeholder="john@example.com"
                className="w-full bg-mauve-300"
              />
              <Description>
                Enter the email associated with your account
              </Description>
              <FieldError />
            </TextField>

            <div>
              <Button
                className="btn w-full bg-mauve-500 text-white mt-4 border-2 border-mauve-400"
                type="submit"
              >
                Send Reset Link
              </Button>
            </div>
          </Form>

          <div className="flex justify-center items-center gap-3 mt-6">
            <Separator />
            <div className="whitespace-nowrap text-mauve-500 font-medium">
              Back to Login
            </div>
            <Separator />
          </div>

          <div className="mt-4 text-center">
            <Link
              href={"/login"}
              className="text-mauve-600 text-[16px] font-semibold"
            >
              Return to Login
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;