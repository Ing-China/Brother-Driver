"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavSecondary } from "./nav-secondary";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  collapsibleNav: [
    {
      title: "Playground",
      url: "#",
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
          icon: SquareTerminal,
        },
        {
          title: "Starred",
          url: "#",
          icon: SquareTerminal,
        },
        {
          title: "Settings",
          url: "#",
          icon: SquareTerminal,
        },
      ],
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: AudioWaveform,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: AudioWaveform,
    },
    {
      title: "Analytics",
      url: "#",
      icon: AudioWaveform,
    },
    {
      title: "Projects",
      url: "#",
      icon: AudioWaveform,
    },
    {
      title: "Team",
      url: "#",
      icon: AudioWaveform,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.collapsibleNav} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
