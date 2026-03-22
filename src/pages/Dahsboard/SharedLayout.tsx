import { BigSidebar, Navbar, SmallSidebar } from "@/components";
import { Outlet } from "react-router-dom";

// SharedLayout.tsx
function SharedLayout() {
  return (
    <section className="flex flex-col min-h-screen">
      <SmallSidebar />
      <Navbar />
      <div className="flex flex-1">
        <BigSidebar />
        <main className="flex-1">
          <div className="w-fluid mx-auto py-8 lg:w-[90%]">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  )
} export default SharedLayout;
