// ============================================================================
// SITE CONFIGURATION
// ============================================================================
// Edit this file to customize all content on your site.
// All text, images, and data are controlled from here.
// Do NOT modify component files — only edit this config.
// ============================================================================

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  logoAccent: string;
  navLinks: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "CRUMBL",
  logoAccent: ".",
  navLinks: [
    { label: "Menu", href: "/menu" },
    { label: "Locations", href: "/locations" },
    { label: "Order", href: "/menu" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "Order Now",
};

// ----------------------------------------------------------------------------
// Hero Section
// ----------------------------------------------------------------------------

export interface HeroConfig {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  gridRows: number;
  gridCols: number;
  pinkCells: { row: number; col: number }[];
}

export const heroConfig: HeroConfig = {
  titleLine1: "CRUMBL",
  titleLine2: "COOKIES",
  subtitle: "Fresh-baked, oversized, and delivered warm. New flavor drops every Monday.",
  ctaText: "Order Now",
  ctaHref: "#products",
  backgroundImage: "/images/hero-cookies.jpg",
  gridRows: 6,
  gridCols: 8,
  pinkCells: [
    { row: 4, col: 3 },
    { row: 5, col: 6 },
    { row: 3, col: 7 },
  ],
};

// ----------------------------------------------------------------------------
// Product Showcase Section
// ----------------------------------------------------------------------------

export interface ProductFeature {
  value: string;
  label: string;
}

export interface ProductShowcaseConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  productName: string;
  description: string;
  price: string;
  features: ProductFeature[];
  colorSwatches: string[];
  colorSwatchesLabel: string;
  ctaText: string;
  productImage: string;
  productImageAlt: string;
  decorativeText: string;
}

export const productShowcaseConfig: ProductShowcaseConfig = {
  sectionLabel: "FEATURED PRODUCT",
  headingMain: "WARM",
  headingAccent: "COOKIES",
  productName: "Signature Cookie Box",
  description: "Our iconic pink box filled with four oversized, gourmet cookies. Freshly baked daily with premium ingredients and delivered warm to your door.",
  price: "From $12",
  features: [
    { value: "4", label: "Cookies per box" },
    { value: "6oz", label: "Each cookie" },
    { value: "Daily", label: "Fresh baked" },
  ],
  colorSwatches: ["#FFB6C1", "#8B4513", "#F5DEB3", "#D2691E"],
  colorSwatchesLabel: "Box Colors",
  ctaText: "Build Your Box",
  productImage: "/images/product-cookie-box.png",
  productImageAlt: "Pink cookie box with gourmet chocolate chip cookie on top",
  decorativeText: "CRUMBL",
};

// ----------------------------------------------------------------------------
// Color Palette Section (adapted for Cookie Flavors)
// ----------------------------------------------------------------------------

export interface ColorSwatch {
  name: string;
  nameSecondary: string;
  color: string;
  description: string;
}

export interface ColorPaletteConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  colors: ColorSwatch[];
  bottomText: string;
  decorativeText: string;
}

export const colorPaletteConfig: ColorPaletteConfig = {
  sectionLabel: "WEEKLY FLAVORS",
  headingMain: "CHOCOLATE",
  headingAccent: "CHIP",
  colors: [
    {
      name: "Chilled Sugar",
      nameSecondary: "Vanilla Frosting",
      color: "#F5E6D3",
      description: "Vanilla almond frosting + pastel sprinkles",
    },
    {
      name: "Milk Chocolate",
      nameSecondary: "Classic Chip",
      color: "#8B4513",
      description: "The classic, always on the menu",
    },
    {
      name: "Pink Sugar",
      nameSecondary: "Almond Frosting",
      color: "#FFB6C1",
      description: "Almond frosting with sugar cookie base",
    },
    {
      name: "Brownie Batter",
      nameSecondary: "Fudgy Center",
      color: "#3D2314",
      description: "Fudgy center, crackly top",
    },
    {
      name: "Cinnamon Swirl",
      nameSecondary: "Coffee Cake",
      color: "#D2691E",
      description: "Coffee cake vibes, thick glaze",
    },
    {
      name: "Peanut Butter",
      nameSecondary: "Cup Cookie",
      color: "#CD853F",
      description: "Reese's-inspired, extra thick",
    },
  ],
  bottomText: "Rotate every Monday. Limited batches.",
  decorativeText: "FLAVORS",
};

// ----------------------------------------------------------------------------
// Finale / Brand Philosophy Section
// ----------------------------------------------------------------------------

export interface FinaleConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  tagline: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  decorativeText: string;
}

export const finaleConfig: FinaleConfig = {
  sectionLabel: "BRAND PHILOSOPHY",
  headingMain: "CRAVINGS",
  headingAccent: "HAPPENS",
  tagline: "When the craving hits, we deliver. Every cookie is made from scratch with real butter, real sugar, and real love. No shortcuts. No preservatives. Just pure cookie perfection.",
  features: ["Fresh Daily", "Premium Ingredients", "Local Bakeries"],
  ctaText: "Order Now",
  ctaHref: "#contact",
  image: "/images/brand-lifestyle.jpg",
  imageAlt: "Pink cookie box on marble table with scattered chocolate chips",
  decorativeText: "FRESH",
};

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------

export interface SocialLink {
  platform: "instagram" | "twitter" | "youtube";
  href: string;
  label: string;
}

export interface FooterLinkSection {
  title: string;
  links: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logo: string;
  logoAccent: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  linkSections: FooterLinkSection[];
  contact: ContactInfo;
  legalLinks: LegalLink[];
  copyrightText: string;
  decorativeText: string;
}

export const footerConfig: FooterConfig = {
  logo: "CRUMBL",
  logoAccent: ".",
  brandDescription: "Fresh-baked, oversized cookies delivered warm to your door. New flavors every week.",
  socialLinks: [
    { platform: "instagram", href: "#", label: "Instagram" },
    { platform: "twitter", href: "#", label: "Twitter" },
    { platform: "youtube", href: "#", label: "YouTube" },
  ],
  linkSections: [
    {
      title: "Menu",
      links: ["Weekly Flavors", "Classic Cookies", "Catering", "Gift Cards"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Franchising", "Press"],
    },
    {
      title: "Support",
      links: ["Contact", "FAQs", "Shipping", "Returns"],
    },
  ],
  contact: {
    address: "123 Cookie Lane, Bakery District, CA 90210",
    phone: "1-800-CRUMBL-1",
    email: "hello@crumbl.example",
  },
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  copyrightText: "Crumbl Cookies. All rights reserved.",
  decorativeText: "SWEET",
};

// ----------------------------------------------------------------------------
// Site Metadata
// ----------------------------------------------------------------------------

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Crumbl Cookies | Fresh-Baked Gourmet Cookies Delivered",
  description: "Fresh-baked, oversized cookies delivered warm to your door. New flavors every week. Order online for pickup or delivery.",
  language: "en",
};

// ----------------------------------------------------------------------------
// Flavor Cards (Additional section data)
// ----------------------------------------------------------------------------

export interface FlavorCard {
  name: string;
  description: string;
  image: string;
  price: string;
}

export const flavorCards: FlavorCard[] = [
  {
    name: "Chilled Sugar",
    description: "Vanilla almond frosting + colorful sprinkles on a soft sugar cookie base.",
    image: "/images/flavor-chilled-sugar.jpg",
    price: "$4",
  },
  {
    name: "Milk Chocolate Chip",
    description: "The classic favorite. Semi-sweet chips in buttery dough, always warm.",
    image: "/images/flavor-chocolate-chip.jpg",
    price: "$4",
  },
  {
    name: "Pink Sugar",
    description: "Almond frosting with a sugar cookie base. Our signature pink delight.",
    image: "/images/flavor-pink-sugar.jpg",
    price: "$4",
  },
  {
    name: "Brownie Batter",
    description: "Fudgy center, crackly top. Pure chocolate decadence in every bite.",
    image: "/images/flavor-brownie-batter.jpg",
    price: "$4.50",
  },
  {
    name: "Cinnamon Swirl",
    description: "Coffee cake vibes with thick vanilla glaze and cinnamon streusel.",
    image: "/images/flavor-cinnamon-swirl.jpg",
    price: "$4.50",
  },
  {
    name: "Peanut Butter Cup",
    description: "Reese's-inspired with peanut butter chunks and chocolate drizzle.",
    image: "/images/flavor-peanut-butter.jpg",
    price: "$4.50",
  },
];
