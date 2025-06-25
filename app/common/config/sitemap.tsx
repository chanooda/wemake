import {
  ChartColumnIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

export const LINK = {
  // Home
  HOME: "/",

  // Products
  PRODUCT: (id: string) => `/products/${id}`,
  PRODUCTS: "/products",
  PRODUCT_LEADERBOARDS: "/products/leaderboards",
  PRODUCT_CATEGORIES: "/products/categories",
  PRODUCT_CATEGORY: (id: string) => `/products/categories/${id}`,
  PRODUCT_SEARCH: "/products/search",
  PRODUCT_SUBMIT: "/products/submit",
  PRODUCT_PROMOTE: "/products/promote",
  PRODUCT_LEADERBOARDS_REDIRECT: (
    period: "weekly" | "daily" | "monthly" | "yearly",
  ) => `/products/leaderboards/${period}`,
  PRODUCT_OVERVIEW: (id: string) => `/products/${id}/overview`,
  PRODUCT_REVIEWS: (id: string) => `/products/${id}/reviews`,

  // Jobs
  JOB: (id: string) => `/jobs/${id}`,
  JOBS: "/jobs",
  JOBS_REMOTE: "/jobs?location=remote",
  JOBS_FULL_TIME: "/jobs?type=full-time",
  JOBS_FREELANCE: "/jobs?type=freelance",
  JOBS_INTERNSHIP: "/jobs?type=internship",
  JOBS_SUBMIT: "/jobs/submit",

  // Community
  COMMUNITIES: "/community",
  COMMUNITY: (id: string) => `/community/${id}`,
  COMMUNITY_TOP_POSTS: "/community?sort=top",
  COMMUNITY_NEW_POSTS: "/community?sort=new",
  COMMUNITY_CREATE_POST: "/community/create",

  // IdeasGPT
  IDEAS: "/ideas",
  IDEA: (id: string) => `/ideas/${id}`,

  // Teams
  TEAM: (id: string) => `/teams/${id}`,
  TEAMS: "/teams",
  TEAMS_CREATE: "/teams/create",

  // My
  MY: "/my",
  MY_DASHBOARD: "/my/dashboard",
  MY_SETTINGS: "/my/settings",
  MY_NOTIFICATIONS: "/my/notifications",
  MY_MESSAGES: "/my/messages",

  //User
  USER: (id: string) => `/users/${id}`,
  USER_POST: (id: string) => `/users/${id}/posts`,
  USER_PRODUCTS: (id: string) => `/users/${id}/products`,

  // auth
  AUTH_LOGOUT: "/auth/logout",
  AUTH_LOGIN: "/auth/login",
  AUTH_JOIN: "/auth/join",
};

export const linkMenus = [
  {
    name: "Products",
    to: LINK.PRODUCTS,
    items: [
      {
        name: "Leaderboards",
        description: "See the top performers in your community",
        to: LINK.PRODUCT_LEADERBOARDS,
      },
      {
        name: "Categories",
        description: "See the top categories in your community",
        to: LINK.PRODUCT_CATEGORIES,
      },
      {
        name: "Search",
        description: "Search for a product",
        to: LINK.PRODUCT_SEARCH,
      },
      {
        name: "Submit a Product",
        description: "Submit a product to our community",
        to: LINK.PRODUCT_SUBMIT,
      },
      {
        name: "Promote",
        description: "Promote a product to our community",
        to: LINK.PRODUCT_PROMOTE,
        isPaid: true,
      },
    ],
  },
  {
    name: "Jobs",
    to: LINK.JOBS,
    items: [
      {
        name: "Remote Jobs",
        description: "Find a remote job in our community",
        to: LINK.JOBS_REMOTE,
      },
      {
        name: "Full-Time Jobs",
        description: "Find a full-time job in our community",
        to: LINK.JOBS_FULL_TIME,
      },
      {
        name: "Freelance Jobs",
        description: "Find a freelance job in our community",
        to: LINK.JOBS_FREELANCE,
      },
      {
        name: "Internships",
        description: "Find an internship in our community",
        to: LINK.JOBS_INTERNSHIP,
      },
      {
        name: "Submit a Job",
        description: "Submit a job to our community",
        to: LINK.JOBS_SUBMIT,
        isPaid: true,
      },
    ],
  },
  {
    name: "Community",
    to: LINK.COMMUNITIES,
    items: [
      {
        name: "All Posts",
        description: "See all posts in our community",
        to: LINK.COMMUNITIES,
      },
      {
        name: "Top Posts",
        description: "See the top posts in our community",
        to: LINK.COMMUNITY_TOP_POSTS,
      },
      {
        name: "New Posts",
        description: "See the new posts in our community",
        to: LINK.COMMUNITY_NEW_POSTS,
      },
      {
        name: "Create a Post",
        description: "Create a post in our community",
        to: LINK.COMMUNITY_CREATE_POST,
      },
    ],
  },
  {
    name: "IdeasGPT",
    to: LINK.IDEAS,
  },
  {
    name: "Teams",
    to: LINK.TEAMS,
    items: [
      {
        name: "All Teams",
        description: "See all teams in our community",
        to: LINK.TEAMS,
      },
      {
        name: "Create a Team",
        description: "Create a team in our community",
        to: LINK.TEAMS_CREATE,
      },
    ],
  },
];

export const dropdownMenus = (id: string) => [
  {
    items: [
      { name: "Dashboard", to: LINK.MY_DASHBOARD, icon: <ChartColumnIcon /> },
      { name: "Profile", to: LINK.USER(id), icon: <UserIcon /> },
      { name: "Settings", to: LINK.MY_SETTINGS, icon: <SettingsIcon /> },
    ],
  },
  {
    items: [{ name: "Logout", to: LINK.AUTH_LOGOUT, icon: <LogOutIcon /> }],
  },
];

export const getMetadataTitle = (title: string) => {
  return `${title} | Wemake`;
};

export const metadata = {
  [LINK.HOME]: [
    { title: getMetadataTitle("Home") },
    { name: "description", content: "Welcome to Wemake" },
  ],
  [LINK.PRODUCT_LEADERBOARDS]: [
    { title: getMetadataTitle("Leaderboard") },
    { name: "description", content: "Top products leaderboards" },
  ],
  [LINK.PRODUCT_SEARCH]: [
    { title: getMetadataTitle("Search Products") },
    { name: "description", content: "Search for products" },
  ],
  [LINK.PRODUCT_CATEGORIES]: [
    { title: getMetadataTitle("Products Categories") },
    { name: "description", content: "Browse products by category" },
  ],
  [LINK.PRODUCT_SUBMIT]: [
    { title: getMetadataTitle("Submit a Product") },
    { name: "description", content: "Submit your product" },
  ],
  [LINK.IDEAS]: [
    { title: getMetadataTitle("IdeasGPT") },
    { name: "description", content: "Find ideas for your next project" },
  ],
};
