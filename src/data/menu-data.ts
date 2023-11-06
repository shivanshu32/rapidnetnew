import { menusType } from "@/interFace/interFace";

const menu_data:menusType[] = [
  {
    id: 1,
    hasDropdown: false,
    title: "Home",
    link: "/",
    // submenus: [
    //   { title: "Home One", link: "/" },
    //   { title: "Home Two", link: "/home-two" },
    // ],
  },
  {
    id: 2,
    hasDropdown: false,
    title: "Business",
    link: "/business",
  },
  // {
  //   id: 3,
  //   hasDropdown: false,
  //   title: "Leased Lines",
  //   link: "/leased-lines",
  //   // submenus: [
  //   //   { title: "Our Services", link: "/services" },
  //   //   { title: "Service Details", link: "/service-details" },
  //   // ],
  // },
  {
    id: 4,
    hasDropdown: true,
    title: "Owners & Developers",
    // link: "/pricing",
    link: "/",
    submenus: [
      { title: "Sectors", link: "/sectors" },
      { title: "Our Coverage Map", link: "/our-coverage-map" },
      { title: "How Rapidnet Works", link: "/how-rapidnet-works" },
      // { title: "Our Shop", link: "/shop" },
      // { title: "Shop Details", link: "/shop-details" },
      // { title: "Cart", link: "/cart" },
      // { title: "Checkout", link: "/checkout" },
      // { title: "Privacy Policy", link: "/privacy-policy" },
      // { title: "Refund Policy", link: "/refund-policy" },
      // { title: "Sign In", link: "/signin" },
      // { title: "Sign Up", link: "/signup" },
      // { title: "404 Page", link: "/error" },
    ],
  },
  // {
  //   id: 5,
  //   hasDropdown: true,
  //   title: "Plans",
  //   link: "/blogs",
  //   submenus: [
  //     { title: "Blog Standard", link: "/blogs" },
  //     { title: "Blog Grid", link: "/blog-grid" },
  //     { title: "Blog Details", link: "/blog-details" },
  //   ],
  // },
  {
    id: 6,
    hasDropdown: false,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;
