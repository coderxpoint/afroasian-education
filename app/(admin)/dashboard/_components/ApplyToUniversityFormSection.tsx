"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define a type for the contact submission
interface Contact {
  id: string; // Assuming ID is a string; change to number if needed
  name: string;
  email: string;
  phone: string;
  university: string;
  program_name: string;
  created_at: string;
}

const ApplyToUniversityFormSection: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]); // Use the Contact type
  const [error, setError] = useState<string>(""); // Specify the type for error

  // Fetch contacts on component mount
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get<Contact[]>("/api/university"); // Specify the expected response type
        setContacts(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/university?id=${id}`);
      if (response.status === 200) {
        setContacts(contacts.filter((contact) => contact.id !== id));
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to delete contact");
    }
  };

  return (
    <div className="w-full  flex px-4">
      <div className="container mx-auto justify-center">
        <h2 className="text-xl font-semibold mb-2">University Enroll Form</h2>
        {error && <p className="text-red-500">{error}</p>}
        <Table>
          <TableCaption>A list of submitted University Form.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>University</TableHead>
              <TableHead>Program Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.university}</TableCell>
                <TableCell>{contact.program_name}</TableCell>
                <TableCell>
                  {new Date(contact.created_at).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(contact.id)}
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ApplyToUniversityFormSection;
