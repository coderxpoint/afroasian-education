"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, ChevronRight, GraduationCap } from "lucide-react";
import { navigationLinks } from "@/data/nav";
import { EnrollButton } from "./EnrollButton";
import { SearchButton } from "./SearchButton";

// const getDropdownTitle = (label: string) => {
//   switch (label) {
//     case "University":
//       return {
//         title: "Select University",
//         description:
//           "Choose from our partner universities offering quality education",
//       };
//     case "Loan":
//       return {
//         title: "Student Loan Options",
//         description: "Explore our flexible education financing solutions",
//       };
//     case "Brouchures":
//       return {
//         title: "Download Brochures",
//         description:
//           "Get detailed information about our programs and universities",
//       };
//   }
// };

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href = "/", ...props }, ref) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="w-full">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "flex items-center justify-between w-full rounded-lg p-3 text-sm transition-all duration-200 ease-in-out",
            "hover:bg-accent/50 hover:text-accent-foreground hover:pl-4",
            isActive && "bg-accent text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-muted-foreground" />
            <div className="flex flex-col gap-1">
              <div className="font-medium leading-none">{title}</div>
              {children && (
                <p className="text-sm leading-snug text-muted-foreground line-clamp-2">
                  {children}
                </p>
              )}
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Header() {
  const pathname = usePathname();

  const MobileNavItem = ({
    href,
    label,
    children,
  }: {
    href: string;
    label: string;
    children?: React.ReactNode;
  }) => {
    const isActive = pathname === href || pathname.startsWith(href + "/");

    return (
      <div className="flex flex-col">
        <Link
          href={href}
          className={cn(
            "text-lg font-medium transition-all duration-200 hover:text-primary hover:translate-x-1",
            isActive ? "text-primary font-semibold" : "text-muted-foreground"
          )}
        >
          {label}
        </Link>
        {children && (
          <div className="ml-4 mt-2 space-y-2">
            {React.Children.map(children, (child) => (
              <div className=" rounded-lg p-2 shadow-md transition-transform duration-200 hover:scale-105">
                {child}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 px-4 py-4 bg-white border-b border-slate-200/60">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,transparent,white)]" />
      <div className="max-w-6xl w-full relative mx-auto flex flex-row justify-between items-center h-20">
        <div className="relative ">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="logo"
              className=""
              height={100}
              width={100}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex relative">
          <NavigationMenuList className="relative px-4">
            {navigationLinks.map((link) =>
              link.content ? (
                <NavigationMenuItem key={link.label}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuTrigger
                      className={cn(
                        "hover:text-orange-600 data-[state=open]:text-orange-600",
                        "data-[state=open]:text-primary font-bold text-lg",
                        pathname === link.href ||
                          (pathname.startsWith(link.href + "/") &&
                            link.href !== "/")
                          ? "text-orange-400"
                          : "hover:text-orange-600"
                      )}
                    >
                      {link.label}
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    <div className="w-[400px] lg:w-[500px] p-6 ">
                      <ul className="space-y-2">
                        {link.content.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          />
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-lg hover:text-orange-400 font-bold",
                        pathname === link.href ? "text-orange-400" : ""
                      )}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex flex-row">
          <div className="flex flex-row items-center gap-2 justify-center">
            <EnrollButton />
            <SearchButton />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <div className="flex flex-row">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden hover:bg-accent/80 ml-2 transition-colors duration-200 p-2 rounded-full bg-primary/10 "
                  >
                    <Menu className="h-20 w-20 text-primary" />
                  </Button>
                </div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white/90 backdrop-blur-md"
              >
                <nav className="flex flex-col gap-2 mt-8">
                  {navigationLinks.map((link) =>
                    link.content ? (
                      <MobileNavItem
                        key={link.label}
                        href={link.href}
                        label={link.label}
                      >
                        {link.content.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "block py-2.5 px-4 text-sm text-muted-foreground rounded-lg transition-all duration-200",
                              "hover:bg-slate-100 hover:text-primary hover:translate-x-1",
                              pathname === item.href &&
                                "bg-primary/10 text-primary border border-primary"
                            )}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </MobileNavItem>
                    ) : (
                      <MobileNavItem
                        key={link.href}
                        href={link.href}
                        label={link.label}
                      />
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="hidden  lg:flex gap-2 items-center justify-center ">
          <div className=" items-center mr-10 flex justify-center">
            <SearchButton />
          </div>

          <EnrollButton />
        </div>
      </div>
    </header>
  );
}
