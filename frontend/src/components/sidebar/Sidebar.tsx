import {
  LayoutDashboard,
  Circle,
  FileText,
  Wallet,
  ArrowUpRight,
  House,
  Check,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-[260px] min-h-screen bg-[#F4F4F2] border-r border-gray-200 flex flex-col shadow-sm">
      {/* Logo */}
      <div className="pt-8 pb-8">
        <h1 className="text-center text-[30px] font-bold text-[#2F6B4F]">
          Namee
        </h1>
      </div>

      {/* Current Business */}
      <div className="px-6">
        <p className="text-[11px] uppercase font-semibold tracking-wide text-gray-500 mb-4">
          Current Business
        </p>

        <div className="bg-[#739472] rounded-xl px-3 py-1.5 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">
                Willow &amp; Co.
              </p>

              <p className="text-sm text-green-100">
                Business profile
              </p>
            </div>

            {/* <span className="text-white">⌄</span> */}
          </div>
        </div>
      </div>

      <div className="mx-8 my-4 border-t border-gray-200" />

      {/* Workspace */}
      <div className="flex-1 px-8">
        <h2 className="text-gray-500 font-bold text-xl mb-2">
          WORKSPACE
        </h2>

        <div className="space-y-1">
          <NavItem icon={<LayoutDashboard size={16} />} label="Dashboard" />
          <NavItem icon={<Circle size={16} />} label="Tasks" />
          <NavItem icon={<FileText size={16} />} label="Products and Services" />

          <ActiveNavItem
            icon={<Wallet size={16} />}
            label="Money"
          />

          <NavItem icon={<ArrowUpRight size={16} />} label="Marketing" />
          <NavItem icon={<House size={16} />} label="Organization" />
          <NavItem icon={<Check size={16} />} label="Legal" />
        </div>
      </div>

      <div className="mx-8 mb-10 border-t border-gray-200" />

      {/* Bottom */}
      <div className="px-8 pb-12">
        <div className="space-y-3">
          <NavItem icon={<Settings size={18} />} label="Settings" />
          <NavItem icon={<LogOut size={18} />} label="Log out" />
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 text-[#436E58] py-2 cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function ActiveNavItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="relative flex items-center gap-3 bg-[#739472] text-white py-3 px-4 rounded-xl shadow-lg">
      <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#2F6B4F] rounded-r" />
      <div className="ml-2">{icon}</div>
      <span className="font-medium">{label}</span>
    </div>
  );
}