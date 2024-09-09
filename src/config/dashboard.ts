import { UserRole, SidebarNavItem } from "@/types/index";

export const getSidebarLinks = (locale: string): SidebarNavItem[] => [
  {
    title: "MENU",
    items: [
      {
        href: `/admin`,
        icon: "laptop",
        title: "Admin Panel",
        authorizeOnly: UserRole.ADMIN,
      },
      { href: `/dashboard`, icon: "dashboard", title: "Dashboard" },
      {
        href: `/dashboard/billing`,
        icon: "billing",
        title: "Billing",
        authorizeOnly: UserRole.USER,
      },
      { href: `/dashboard/charts`, icon: "lineChart", title: "Charts" },
      { href: `/dashboard/chat`, icon: "bot", title: "Chat Bot" },
      { href: `/dashboard/apikeys`, icon: "apiKeys", title: "API Keys" },
      { href: `/dashboard/quota`, icon: "quota", title: "API Quota" },
      {
        href: `/admin/orders`,
        icon: "package",
        title: "Orders",
        badge: 2,
        authorizeOnly: UserRole.ADMIN,
      },
      {
        href: `#/dashboard/posts`,
        icon: "post",
        title: "User Posts",
        authorizeOnly: UserRole.USER,
        disabled: true,
      },
    ],
  },
  {
    title: "OPTIONS",
    items: [
      { href: `/dashboard/settings`, icon: "settings", title: "Settings" },
      { href: `/`, icon: "home", title: "Homepage" },
      { href: `/docs`, icon: "bookOpen", title: "Documentation" },
      {
        href: "#",
        icon: "messages",
        title: "Support",
        authorizeOnly: UserRole.USER,
        disabled: true,
      },
    ],
  },
];
