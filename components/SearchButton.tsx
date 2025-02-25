"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { universities1, navigationLinks } from "@/data/nav";
import Link from "next/link";
import { medicalPrograms } from "@/data/programs";

export function SearchButton() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        
        <Search size={20} className=" text-gray-600 flex items-center    justify-center font-bold" />{" "}
        {/* Search icon */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-lg border border-gray-200 shadow-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">
            Search
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <Input
            type="text"
            placeholder="Search for courses, programs, or more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-lg border-gray-300 focus:border-[#e86034] focus:ring-[#e86034]"
          />
          <div className="mt-4">
            {searchQuery && (
              <>
                {universities1.filter((university) =>
                  university.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                ).length > 0 && (
                  <>
                    <div className="font-semibold">Universities:</div>
                    {universities1
                      .filter((university) =>
                        university.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      )
                      .map((university) => (
                        <Link key={university.title} href={university.href}>
                          <div className="text-gray-800 hover:text-[#e86034] cursor-pointer">
                            {university.title}
                          </div>
                        </Link>
                      ))}
                  </>
                )}
                {navigationLinks.filter((link) =>
                  link.label.toLowerCase().includes(searchQuery.toLowerCase())
                ).length > 0 && (
                  <>
                    <div className="font-semibold mt-4">Navigation Links:</div>
                    {navigationLinks
                      .filter((link) =>
                        link.label
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      )
                      .map((link) => (
                        <Link key={link.label} href={link.href}>
                          <div className="text-gray-800 hover:text-[#e86034] cursor-pointer">
                            {link.label}
                          </div>
                        </Link>
                      ))}
                  </>
                )}
                {medicalPrograms.filter((link) =>
                  link.title.toLowerCase().includes(searchQuery.toLowerCase())
                ).length > 0 && (
                  <>
                    <div className="font-semibold mt-4">Programs:</div>
                    {medicalPrograms
                      .filter((link) =>
                        link.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      )
                      .map((link) => (
                        <Link key={link.title} href={link.title}>
                          <div className="text-gray-800 hover:text-[#e86034] cursor-pointer">
                            {link.title}
                          </div>
                        </Link>
                      ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
