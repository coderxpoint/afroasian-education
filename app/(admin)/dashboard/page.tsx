"use client";

import React, { useEffect, useState } from "react";
import ContactFormSection from "./_components/ContactFormSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LoanFormSection from "./_components/LoanFormSection";
import EnrollNowFormSection from "./_components/EnrollNowFormSection";
import ApplyToUniversityFormSection from "./_components/ApplyToUniversityFormSection";
import { useRouter } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import AdmissionForm from "./_components/AdmissionForm";

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth !== "true") {
      router.push("/login"); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) return null;

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => setActiveTab("contact")}
                className={`w-full text-left p-2 rounded hover:bg-gray-700 ${
                  activeTab === "contact" ? "bg-gray-600" : ""
                }`}
              >
                Contact Form
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("loan")}
                className={`w-full text-left p-2 rounded hover:bg-gray-700 ${
                  activeTab === "loan" ? "bg-gray-600" : ""
                }`}
              >
                Loan Form
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("enroll_now")}
                className={`w-full text-left p-2 rounded hover:bg-gray-700 ${
                  activeTab === "enroll_now" ? "bg-gray-600" : ""
                }`}
              >
                Enroll Now Form
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("university")}
                className={`w-full text-left p-2 rounded hover:bg-gray-700 ${
                  activeTab === "university" ? "bg-gray-600" : ""
                }`}
              >
                University Form
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("admission")}
                className={`w-full text-left p-2 rounded hover:bg-gray-700 ${
                  activeTab === "admission" ? "bg-gray-600" : ""
                }`}
              >
               Admission Form
              </button>
            </li>
          </ul>
        </nav>
        <LogoutButton />
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Tabs value={activeTab} className="mb-4">
          <TabsList className="hidden space-y-2">
            <TabsTrigger value="contact">Contact Form</TabsTrigger>
            <TabsTrigger value="loan">Loan Form</TabsTrigger>
            <TabsTrigger value="enroll_now">Enroll Now Form</TabsTrigger>
            <TabsTrigger value="university">University Form</TabsTrigger>
            <TabsTrigger value="admission">Admission Form</TabsTrigger>
          </TabsList>
          <TabsContent value="contact">
            <ContactFormSection />
          </TabsContent>
          <TabsContent value="loan">
            <LoanFormSection />
          </TabsContent>
          <TabsContent value="enroll_now">
            <EnrollNowFormSection />
          </TabsContent>
          <TabsContent value="university">
            <ApplyToUniversityFormSection />
          </TabsContent>
          <TabsContent value="admission">
            <AdmissionForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;
