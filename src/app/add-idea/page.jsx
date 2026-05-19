"use client";

import {
  FieldError,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
  Input,
} from "@heroui/react";
import { TypeAnimation } from "react-type-animation";



const AddIdeaPage = () => {
    
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const ideas = Object.fromEntries(formData.entries());

    console.log(ideas);

    const res = await fetch("http://localhost:5000/ideas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ideas),
    });

    const data = await res.json();
    console.log(data);
    
  };

  return (
    <div className="container mx-auto w-[80%] md:w-[60%] lg:w-[50%] mt-20">
       
      <div className="text-center mb-8">
        <TypeAnimation
            sequence={[
            "Share Your Startup Idea ",
            2000,
            "Pitch Your Innovation ",
            2000,
            "Build The Next Big Thing ",
            2000,
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className="text-2xl sm:text-4xl font-bold text-mauve-500"
        />
        </div>

      <Card className="w-full shadow-lg bg-linear-to-r from-pink-100 via-mauve-300 to-mauve-400 ">
        <form
          onSubmit={onSubmit}
          className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Title */}
            <div className="md:col-span-2">
              <TextField name="title" isRequired>
                <Label className="text-mauve-600">Title</Label>
                <Input placeholder="Enter title" />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label className="text-mauve-600">Description</Label>
                <TextArea
                  placeholder="Describe shortly..."
                  className="min-h-28"
                />
                <FieldError />
              </TextField>
            </div>
                {/* tags */}
            <div className="md:col-span-2">
              <TextField name="tags" isRequired>
                <Label className="text-mauve-600">Tags</Label>
                <Input placeholder="Enter tag" />
                <FieldError />
              </TextField>
            </div>

            {/* Detail Description */}
            <div className="md:col-span-2">
              <TextField name="detailedDescription" isRequired>
                <Label className="text-mauve-600">Detail Description</Label>
                <TextArea
                  placeholder="Detailed description..."
                  className="min-h-28"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Target Audience */}
            <TextField name="targetAudience" isRequired>
              <Label className="text-mauve-600">Target Audience</Label>
              <Input placeholder="Enter target audience" />
              <FieldError />
            </TextField>

            {/* Category */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label className="text-mauve-600">Category</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Tech" textValue="Tech" className="text-mauve-600">
                      Tech
                    </ListBox.Item>

                    <ListBox.Item id="Health" textValue="Health" className="text-mauve-600">
                      Health
                    </ListBox.Item>

                    <ListBox.Item id="AI" textValue="AI" className="text-mauve-600">
                      AI
                    </ListBox.Item>

                    <ListBox.Item id="Education" textValue="Education" className="text-mauve-600">
                      Education
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Problem Statement */}
            <div className="md:col-span-2">
              <TextField name="problemStatement" isRequired>
                <Label className="text-mauve-600">Problem Statement</Label>
                <TextArea
                  placeholder="Problem statement..."
                  className="min-h-28"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Proposed Solution */}
            <div className="md:col-span-2">
              <TextField name="proposedSolution" isRequired>
                <Label className="text-mauve-600">Proposed Solution</Label>
                <TextArea
                  placeholder="Proposed solution..."
                  className="min-h-28"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageURL" isRequired>
                <Label className="text-mauve-600">Image URL</Label>
                <Input
                  type="url"
                  
                  placeholder="Enter image URL"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-mauve-500 text-white h-12 text-base sm:text-lg"
          >
            Add Idea
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddIdeaPage;