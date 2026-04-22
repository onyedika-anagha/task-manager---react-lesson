import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";

export function TopNav({ onCreateTask }) {
  return (
    <nav className="bg-white w-full sticky top-0 z-50 font-manrope antialiased tracking-tight">
      <div className="flex justify-between items-center h-20 px-8 max-w-screen-2xl mx-auto">
        {/* Left Section - Logo & Navigation */}
        <div className="flex items-center gap-12">
          <span className="text-2xl font-black text-gray-900 tracking-tighter">
            Lucid
          </span>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-primary font-bold border-b-2 border-primary pb-1 cursor-pointer active:scale-95 transition-transform"
            >
              My Tasks
            </a>
            <a
              href="#"
              className="text-gray-500 font-medium hover:text-gray-900 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform"
            >
              Completed
            </a>
          </div>
        </div>

        {/* Right Section - Button & Icons */}
        <div className="flex items-center gap-6">
          <Button onClick={onCreateTask}>Create Task</Button>
          <div className="flex items-center gap-4 text-outline">
            <Icon
              name="settings"
              className="cursor-pointer hover:text-primary"
            />
            <Icon
              name="account_circle"
              className="cursor-pointer hover:text-primary"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
