export default function Sidebar() {
  return (
    <aside className="w-[260px] h-screen bg-[#F5F5F5] border-r border-[#E5E5E5] flex flex-col">
      <div className="p-6">
        Top Section
      </div>

      <div className="flex-1 p-6">
        Navigation Area
      </div>

      <div className="p-6 border-t border-[#E5E5E5]">
        Bottom Actions
      </div>
    </aside>
  );
}