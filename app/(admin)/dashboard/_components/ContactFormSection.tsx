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
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

const ContactFormSection: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]); // Use the Contact type
  const [error, setError] = useState<string>(""); // Specify the type for error

  // Fetch contacts on component mount
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get<Contact[]>("/api/contact"); // Specify the expected response type
        setContacts(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/contact?id=${id}`);
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
        <h2 className="text-xl font-semibold mb-2">Submitted Contacts</h2>
        {error && <p className="text-red-500">{error}</p>}
        <Table>
          <TableCaption>A list of submitted contacts.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.first_name}</TableCell>
                <TableCell>{contact.last_name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.message}</TableCell>
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

export default ContactFormSection;
