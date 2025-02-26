"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Breadcrumb from "@/components/Breadcrumb";

export default function AdmissionPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [lastQualification, setLastQualification] = useState("");
  const [percentage, setPercentage] = useState("");
  const [yearOfPassing, setYearOfPassing] = useState("");
  const [board, setBoard] = useState("");
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      // Submit to backend API
      const response1 = await fetch("/api/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          dob,
          gender,
          last_qualification: lastQualification,
          percentage,
          year_of_passing: yearOfPassing,
          board,
          university,
          program,
          address,
        }),
      });

      // Submit to Web3Forms
      const formData = new FormData();
      formData.append("access_key", "00989a5d-920b-489b-adba-f02f9c33b81d");
      formData.append("subject", "New Admission Form Submission");
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("last_qualification", lastQualification);
      formData.append("percentage", percentage);
      formData.append("year_of_passing", yearOfPassing);
      formData.append("board", board);
      formData.append("university", university);
      formData.append("program", program);
      formData.append("address", address);

      const response2 = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const [result1, result2] = await Promise.all([
        response1.json(),
        response2.json(),
      ]);

      if (response1.ok && result2.success) {
        setSuccess("Form submitted successfully! We will contact you soon.");
        // Reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setDob("");
        setGender("");
        setLastQualification("");
        setPercentage("");
        setYearOfPassing("");
        setBoard("");
        setUniversity("");
        setProgram("");
        setAddress("");
      } else {
        throw new Error(
          result1.error || result2.message || "Something went wrong."
        );
      }
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="lg:h-[35vh] bg-[url('/contact.jpg')] bg-center bg-cover bg-no-repeat h-[20vh] relative flex flex-col space-x-4 w-full items-center mx-auto justify-center overflow-hidden before:absolute before:inset-0 before:bg-black before:opacity-60 before:backdrop-blur-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute inset-0 w-full h-full opacity-20"
        >
          <path
            fill="#e86034"
            fillOpacity="0.3"
            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,101.3C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
          />
          <path
            fill="#ff7f50"
            fillOpacity="0.2"
            d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
          />
        </svg>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Breadcrumb title="Admission Form" className="text-white" />
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 mb-20">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-[#00306e]">
              Student Admission Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#e86034]">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select onValueChange={(value) => setGender(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#e86034]">
                  Academic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lastQualification">
                      Last Qualification
                    </Label>
                    <Select
                      onValueChange={(value) => setLastQualification(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="highschool">High School</SelectItem>
                        <SelectItem value="intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="bachelors">
                          Bachelor's Degree
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="percentage">Percentage/CGPA</Label>
                    <Input
                      id="percentage"
                      placeholder="Enter your percentage or CGPA"
                      value={percentage}
                      onChange={(e) => setPercentage(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearOfPassing">Year of Passing</Label>
                    <Input
                      id="yearOfPassing"
                      type="number"
                      placeholder="Enter year of passing"
                      value={yearOfPassing}
                      onChange={(e) => setYearOfPassing(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="board">Board/University</Label>
                    <Input
                      id="board"
                      placeholder="Enter board or university name"
                      value={board}
                      onChange={(e) => setBoard(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Program Preference */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#e86034]">
                  Program Preference
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="university">University</Label>
                    <Select onValueChange={(value) => setUniversity(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select university" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="international_medical_university">
                          International Medical University
                        </SelectItem>
                        <SelectItem value="eurasian_international_university">
                          Eurasian International University
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program">Program</Label>
                    <Select onValueChange={(value) => setProgram(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mbbs">MBBS</SelectItem>
                        <SelectItem value="general_medicine">
                          General Medicine
                        </SelectItem>
                        <SelectItem value="dentistry">Dentistry</SelectItem>
                        <SelectItem value="pharmacy">Pharmacy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your complete address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#e86034] hover:bg-orange-500"
              >
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
