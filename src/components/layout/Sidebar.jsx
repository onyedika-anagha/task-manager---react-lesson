import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { NavLink } from "../ui/NavLink";

const links = [
  { icon: "today", label: "Today" },
  { icon: "calendar_month", label: "Upcoming" },
  { icon: "folder", label: "Projects" },
  { icon: "inventory_2", label: "Archive" },
];

export function Sidebar() {
  const [activeLink, setActiveLink] = React.useState("Today");
  return (
    <aside className="hidden lg:flex flex-col w-64 h-[calc(100vh-120px)] sticky top-24 font-manrope text-sm font-semibold space-y-4">
      {/* Sidebar Header */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Task Manager
        </h2>
        <p className="text-outline font-normal text-xs uppercase tracking-widest mt-1">
          Productivity focused
        </p>
      </div>

      {/* Navigation Menu */}
      <div className="space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.icon}
            icon={link.icon}
            label={link.label}
            active={activeLink === link.label}
            onClick={() => setActiveLink(link.label)}
          />
        ))}
      </div>

      {/* New Project Button */}
      <div className="mt-auto">
        <Button
          variant="secondary"
          className="w-full flex justify-center items-center"
        >
          <Icon name="add" />
          <span>New Project</span>
        </Button>
      </div>
    </aside>
  );
}
