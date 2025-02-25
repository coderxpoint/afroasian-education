"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const contactInfo = {
    address:
      "Bhutani) Block C, Logix Cyber Park, Tower (B) - 710 A, C28/29, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301",
    email: "support@afroasianeducation.com",
    phones: ["+91-9871126409", "+91-9220506409", "01203120779", "01203200419"],
    hours: "Mon-Fri: 9 AM - 6 PM",
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // First form submission (existing)
      const response1 = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          message,
        }),
      });

      // Web3Forms submission
      const formData = new FormData();
      formData.append("access_key", "00989a5d-920b-489b-adba-f02f9c33b81d");
      formData.append("subject", "New Contact - Us Form Submission");
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", message);

      const response2 = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const [result1, result2] = await Promise.all([
        response1.json(),
        response2.json(),
      ]);

      if (response1.ok && result2.success) {
        setSuccess("Form submitted successfully! We will contact you soon! 🎉");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        throw new Error(
          result1.error || result2.message || "Something went wrong."
        );
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="w-full px-4 mx-auto ">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative">
        {/* Unique Diagonal Background Overlay */}
        <div
          className="absolute inset-0 z-0 transform -skew-x-12 origin-top-left"
          style={{
            background: `linear-gradient(135deg, #e86034 0%, #e86034 50%, transparent 50%)`,
            opacity: 0.1,
          }}
        />

        <div className="grid md:grid-cols-2 relative z-10">
          {/* Contact Information Section */}
          <div
            className="p-12 flex flex-col justify-center space-y-8 relative overflow-hidden"
            style={{ backgroundColor: "rgba(232, 96, 52, 0.05)" }}
          >
            {/* Decorative Shapes */}
            <div
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-10"
              style={{ backgroundColor: "#e86034" }}
            />
            <div
              className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full opacity-10"
              style={{ backgroundColor: "#e86034" }}
            />

            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "#e86034" }}
            >
              Contact Information
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  content: contactInfo.address,
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: contactInfo.email,
                },
                {
                  icon: Phone,
                  title: "Phone Numbers",
                  content: (
                    <div className="flex flex-col space-y-1">
                      {contactInfo.phones.map((phoneNumber, idx) => (
                        <a
                          key={idx}
                          href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                          className="hover:text-orange-500 transition-colors"
                        >
                          {phoneNumber}
                        </a>
                      ))}
                    </div>
                  ),
                },
                {
                  icon: Clock,
                  title: "Hours",
                  content: contactInfo.hours,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group transition-all duration-300 hover:translate-x-2"
                >
                  <div
                    className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "rgba(232, 96, 52, 0.1)",
                      color: "#e86034",
                    }}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-lg mb-1"
                      style={{ color: "#e86034" }}
                    >
                      {item.title}
                    </h3>
                    <div className="text-muted-foreground text-sm">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3
                className="text-3xl font-bold text-center mb-6"
                style={{ color: "#e86034" }}
              >
                Send Us a Message
              </h3>

              <div className="grid lg:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#000000" }}
                  >
                    First Name
                  </label>
                  <Input
                    id="first_name"
                    className="w-full "
                    style={{
                      boxShadow: "0 0 0 2px #000000",
                    }}
                    name="first_name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#000000" }}
                  >
                    Last Name
                  </label>
                  <Input
                    id="last_name"
                    className="w-full "
                    style={{
                      boxShadow: "0 0 0 2px #000",
                    }}
                    name="last_name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#000" }}
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  className="w-full "
                  style={{
                    boxShadow: "0 0 0 2px #000",
                  }}
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#000" }}
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  className="w-full "
                  style={{
                    boxShadow: "0 0 0 2px #000",
                  }}
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#000" }}
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  className="w-full "
                  style={{
                    boxShadow: "0 0 0 2px #000",
                  }}
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-4 flex items-center justify-center group"
                style={{
                  background: `linear-gradient(to right, #e86034, #ff7f50)`,
                  color: "white",
                  transition: "all 0.3s ease",
                }}
              >
                Send Message
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-500 mt-2">{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
