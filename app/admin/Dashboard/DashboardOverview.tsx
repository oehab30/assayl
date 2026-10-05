import StatsCards from "./StatsCards";
import ShipmentPerformance from "./ShipmentPerformance";
import RecentShipments from "./RecentShipments";
import CustomerRequests from "./CustomerRequests";
import QuickActions from "./QuickActions";

export default function DashboardOverview() {
  return (
    <div className="mx-auto max-w-[1500px] space-y-8">
      {/* Intro */}
      <section>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4F0908]/60">
              STARS Operations
            </p>

            <h1 className="text-3xl font-bold tracking-[-0.035em] text-[#051428] sm:text-4xl">
              Good morning, Omar.
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#051428]/45">
              Here&apos;s an overview of your logistics operations,
              shipments, and customer activity.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[#051428]/[0.07] bg-white px-4 py-3 shadow-[0_8px_30px_rgba(5,20,40,0.03)]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-xs font-medium text-[#051428]/60">
              Operations running normally
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCards />

      {/* Analytics */}
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(300px,0.8fr)]">
        <ShipmentPerformance />

        <QuickActions />
      </div>

      {/* Tables */}
      <div className="grid gap-6 2xl:grid-cols-[minmax(0,1.65fr)_minmax(350px,0.8fr)]">
        <RecentShipments />

        <CustomerRequests />
      </div>
    </div>
  );
}