"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  university: string;
  programName: string;
};

type ApplyUniversityProps = {
  defaultUniversity?: string;
};

export function DownloadBrochure({ defaultUniversity }: ApplyUniversityProps) {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");
  const form = useForm<FormData>();

  useEffect(() => {
    if (defaultUniversity) {
      form.setValue("university", defaultUniversity);
    }
  }, [defaultUniversity, form]);

  const onSubmit = async (data: FormData) => {
    setResult("Sending....");

    const formData = new FormData();
    formData.append("access_key", "00989a5d-920b-489b-adba-f02f9c33b81d");
    formData.append("subject", "Download Brochure Form");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("university", data.university);
    formData.append("program", data.programName);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setResult("Form Submitted Successfully");
        form.reset();
        setOpen(false);
      } else {
        setResult(result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex bg-[#e86034] items-center gap-2  shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#e86034]/90">
          Download Brochure <Download size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-950 text-center">
            Download Brochure
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Fill out the form below to download.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-2 pt-4 px-4"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Full Name
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1.5 text-gray-400">👤</span>
              <Input
                id="name"
                placeholder="Enter your full name"
                className="pl-10 rounded-lg border-gray-300 focus:border-[#e86034] focus:ring-[#e86034]"
                {...form.register("name", { required: true })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1.5 text-gray-400">📧</span>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pl-10 rounded-lg border-gray-300 focus:border-[#e86034] focus:ring-[#e86034]"
                {...form.register("email", { required: true })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700 font-medium">
              Phone Number
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1.5 text-gray-400">📞</span>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="pl-10 rounded-lg border-gray-300 focus:border-[#e86034] focus:ring-[#e86034]"
                {...form.register("phone", { required: true })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="university" className="text-gray-700 font-medium">
              University
            </Label>
            <Select
              onValueChange={(value) => form.setValue("university", value)}
              defaultValue={defaultUniversity}
            >
              <SelectTrigger className="rounded-lg border-gray-300 focus:border-[#e86034] focus:ring-[#e86034]">
                <SelectValue placeholder="Select your university" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border-gray-300">
                <SelectItem
                  value="International Medical University"
                  defaultValue={defaultUniversity}
                >
                  International Medical University
                </SelectItem>
                <SelectItem value="Eurasian International University">
                  Eurasian International University
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="program" className="text-gray-700 font-medium">
              Programs
            </Label>
            <Select
              onValueChange={(value) => form.setValue("programName", value)}
            >
              <SelectTrigger className="rounded-lg border-gray-300 focus:border-[#e86034] focus:ring-[#e86034]">
                <SelectValue placeholder="Select your Program" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border-gray-300">
                <SelectItem value="MBBS">MBBS</SelectItem>
                <SelectItem value="General Medicine">
                  General Medicine
                </SelectItem>
                <SelectItem value="Dentistry">Dentistry</SelectItem>
                <SelectItem value="Pharmacy">Pharmacy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex  justify-center space-x-4 pt-6">
            <Button
              type="submit"
              className="bg-[#e86034] w-full hover:bg-[#e86034]/90 rounded-lg shadow-md"
            >
              Submit
            </Button>
          </div>
        </form>
        {result && (
          <span className="block mt-4 text-center text-sm text-gray-600">
            {result}
          </span>
        )}
        <span className="w-full flex items-center justify-center text-center text-sm text-gray-600 mt-4">
          <span>Design and Developed by </span>
          <a
            href="https://www.coderxpoint.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 pl-1 hover:text-orange-600 font-semibold"
          >
            CoderXpoint
          </a>
        </span>
      </DialogContent>
    </Dialog>
  );
}
