"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

// Define the type for breadcrumb items
export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

// Breadcrumb component props
interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
  customMapping?: Record<string, string>;
  title?: string;
  titleClassName?: string;
}

// Customizable Breadcrumb Component
export function Breadcrumb({
  items,
  separator = <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />,
  className = "",
  customMapping = {},
  title,
  titleClassName = "text-4xl font-bold text-white",
}: BreadcrumbProps) {
  // Get the current pathname
  const pathname = usePathname();

  // Generate breadcrumbs if not provided
  const breadcrumbItems = items || generateBreadcrumbs(pathname, customMapping);

  return (
    <div
      className={`w-full max-w-6xl justify-center mx-auto py-4 ${className}`}
    >
      {title && (
        <h1 className={`text-center mb-4 ${titleClassName}`}>{title}</h1>
      )}
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center w-full justify-center space-x-2 text-sm text-white">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index === 0 ? (
                // First item (Home)
                <Link
                  href="/"
                  className="flex items-center hover:text-[#e86034] transition-colors group"
                >
                  {item.icon || (
                    <Home className="h-4 w-4 mr-2 group-hover:text-[#e86034]" />
                  )}
                  {item.label}
                </Link>
              ) : (
                // Subsequent items
                <>
                  {separator}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center hover:text-[#e86034] transition-colors group ${
                        index === breadcrumbItems.length - 1
                          ? "text-[#e86034] font-semibold"
                          : ""
                      }`}
                    >
                      {item.icon && (
                        <span className="mr-2 group-hover:text-[#e86034]">
                          {item.icon}
                        </span>
                      )}
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={`flex items-center ${
                        index === breadcrumbItems.length - 1
                          ? "text-[#e86034] font-semibold"
                          : ""
                      }`}
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.label}
                    </span>
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

// Helper function to generate breadcrumbs
export function generateBreadcrumbs(
  currentPath: string,
  customMapping: Record<string, string> = {}
): BreadcrumbItem[] {
  // Special case for root
  if (currentPath === "/") {
    return [{ label: "Home", href: "/" }];
  }

  // Split the path and remove empty segments
  const pathSegments = currentPath.split("/").filter(Boolean);

  // Start with Home
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

  // Build breadcrumbs dynamically
  pathSegments.forEach((segment, index) => {
    // Construct the href
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

    // Priority for label:
    // 1. Custom mapping
    // 2. Capitalized segment
    const label =
      customMapping[segment] ||
      customMapping[href] ||
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    breadcrumbs.push({
      label,
      href,
    });
  });

  return breadcrumbs;
}

// Context-aware hook for breadcrumbs
export function useBreadcrumbs(
  customMapping: Record<string, string> = {}
): BreadcrumbItem[] {
  const pathname = usePathname();
  return generateBreadcrumbs(pathname, customMapping);
}

export default Breadcrumb;
