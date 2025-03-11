import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Home } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "About Us", href: "/about" },
    {
      label: "Services",
      href: "#",
      children: [
        { label: "Security Solutions", href: "/services/security" },
        { label: "ICT Solutions", href: "/services/ict" },
        { label: "Construction", href: "/services/construction" },
      ],
    },
    { label: "Our Process", href: "/process" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-primary">Dark Rhino Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="nav-link flex items-center space-x-1">
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link to={child.href} className="w-full">
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="nav-link flex items-center space-x-1"
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.label}</span>
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-secondary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="py-2">
                  <span className="nav-link block py-2">{item.label}</span>
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="nav-link block py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="nav-link block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && <item.icon className="h-4 w-4 inline-block mr-2" />}
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
