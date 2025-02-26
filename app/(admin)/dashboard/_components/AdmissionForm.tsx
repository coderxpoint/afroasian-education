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
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  last_qualification: string;
  percentage: string;
  year_of_passing: string;
  board: string;
  university: string;
  program: string;
  address: string;
  created_at: string;
}

const AdmissionForm: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]); // Use the Contact type
  const [error, setError] = useState<string>(""); // Specify the type for error

  // Fetch contacts on component mount
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get<Contact[]>("/api/admission"); // Specify the expected response type
        setContacts(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/admission?id=${id}`);
      if (response.status === 200) {
        setContacts(contacts.filter((contact) => contact.id !== id));
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to delete contact");
    }
  };

  return (
    <div className="w-full flex px-4">
      <div className="max-w-6xl w-full mx-auto justify-center">
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
              <TableHead>Date of Birth</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Last Qualification</TableHead>
              <TableHead>Percentage</TableHead>
              <TableHead>Year of Passing</TableHead>
              <TableHead>Board</TableHead>
              <TableHead>University</TableHead>
              <TableHead>Program</TableHead>
              <TableHead>Address</TableHead>
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
                <TableCell>{contact.dob}</TableCell>
                <TableCell>{contact.gender}</TableCell>
                <TableCell>{contact.last_qualification}</TableCell>
                <TableCell>{contact.percentage}</TableCell>
                <TableCell>{contact.year_of_passing}</TableCell>
                <TableCell>{contact.board}</TableCell>
                <TableCell>{contact.university}</TableCell>
                <TableCell>{contact.program}</TableCell>
                <TableCell>{contact.address}</TableCell>
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

export default AdmissionForm;
