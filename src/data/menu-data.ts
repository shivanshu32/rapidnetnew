import { menusType } from "@/interFace/interFace";

const menu_data:menusType[] = [
  {
    id: 1,
    hasDropdown: true,
    title: "Home",
    link: "/",
    submenus: [
      { title: "Home One", link: "/" },
      { title: "Home Two", link: "/home-two" },
    ],
  },
  {
    id: 2,
    hasDropdown: false,
    title: "About",
    link: "/about-us",
  },
  {
    id: 3,
    hasDropdown: true,
    title: "Services",
    link: "/services",
    submenus: [
      { title: "Our Services", link: "/services" },
      { title: "Service Details", link: "/service-details" },
    ],
  },
  {
    id: 4,
    hasDropdown: true,
    title: "Pages",
    link: "/pricing",
    submenus: [
      { title: "Pricing", link: "/pricing" },
      { title: "Creative Team", link: "/team" },
      { title: "Faq Page", link: "/faq" },
      { title: "Our Shop", link: "/shop" },
      { title: "Shop Details", link: "/shop-details" },
      { title: "Cart", link: "/cart" },
      { title: "Checkout", link: "/checkout" },
      { title: "Privacy Policy", link: "/privacy-policy" },
      { title: "Refund Policy", link: "/refund-policy" },
      { title: "Sign In", link: "/signin" },
      { title: "Sign Up", link: "/signup" },
      { title: "404 Page", link: "/error" },
    ],
  },
  {
    id: 5,
    hasDropdown: true,
    title: "Blog",
    link: "/blogs",
    submenus: [
      { title: "Blog Standard", link: "/blogs" },
      { title: "Blog Grid", link: "/blog-grid" },
      { title: "Blog Details", link: "/blog-details" },
    ],
  },
  {
    id: 6,
    hasDropdown: false,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;
