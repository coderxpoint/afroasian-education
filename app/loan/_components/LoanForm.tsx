"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  university: z.string().min(1, "Please select a university."),
  state: z.string().min(1, "Please select a state."),
  bank: z.string().min(1, "Please select a bank."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const universities = [
  "International Medical University",
  "Eurasion International University",
];
const banks = ["HDFC Bank", "ICICI Bank"];
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

export default function LoanForm() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      university: "",
      state: "",
      bank: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setSuccess("");

    try {
      // Submit to backend API
      const backendResponse = await fetch("/api/loan-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      // Submit to Web3Forms
      const formData = new FormData();
      formData.append("access_key", "00989a5d-920b-489b-adba-f02f9c33b81d");
      formData.append("subject", "New Loan Application");
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("university", values.university);
      formData.append("state", values.state);
      formData.append("bank", values.bank);
      formData.append("message", values.message);

      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const [backendResult, web3Result] = await Promise.all([
        backendResponse.json(),
        web3Response.json(),
      ]);

      if (backendResult.success && web3Result.success) {
        setSuccess("Form submitted successfully! We will contact you soon.");
        form.reset();
        setTimeout(() => {
          setOpen(false);
          setSuccess("");
        }, 2000);
      } else {
        throw new Error(
          backendResult.message || web3Result.message || "Something went wrong"
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred while submitting the form"
      );
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Apply for Loan
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center text-gray-800">
            Loan Request Form
          </DialogTitle>
        </DialogHeader>
        <div className="w-full max-h-[80vh] overflow-y-auto px-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="gap-2 flex flex-col"
            >
              {["name", "email", "phone"].map((field) => (
                <FormField
                  key={field}
                  control={form.control}
                  name={field as "name" | "email" | "phone"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {field.name.charAt(0).toUpperCase() +
                          field.name.slice(1)}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type={
                            field.name === "email"
                              ? "email"
                              : field.name === "phone"
                              ? "tel"
                              : "text"
                          }
                          className="rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              {["university", "state", "bank"].map((field) => (
                <FormField
                  key={field}
                  control={form.control}
                  name={field as "university" | "state" | "bank"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {field.name.charAt(0).toUpperCase() +
                          field.name.slice(1)}
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400">
                            <SelectValue
                              placeholder={`Select a ${field.name}`}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {(field.name === "university"
                            ? universities
                            : field.name === "bank"
                            ? banks
                            : states
                          ).map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <div className="flex flex-col  w-full">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Type your message here"
                          className="rounded-lg  border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col w-full">
                  {error && (
                    <p className="text-red-500 text-sm text-center mb-2">
                      {error}
                    </p>
                  )}
                  {success && (
                    <p className="text-green-500 text-sm text-center mb-2">
                      {success}
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md"
                  >
                    Request a Callback
                  </Button>
                </div>
              </div>
            </form>
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
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
