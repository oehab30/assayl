"use client";

import { useState } from "react";
import { Bell, Save, Building } from "lucide-react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    companyName: "Assayl Logistics & Trading",
    contactEmail: "admin@assayllogistics.com",
    supportPhone: "+20 100 844 2982",
    headquarters: "Cairo, Egypt",
  });

  const [notifications, setNotifications] = useState({
    emailNewRequests: true,
    emailShipmentStatus: true,
    weeklyReport: true,
    smsUrgentAlerts: false,
  });

  const [savedMessage, setSavedMessage] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedMessage("Settings updated successfully.");
    setTimeout(() => setSavedMessage(""), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
          Admin Controls
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#051428]">
          Settings & Configuration
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage system preferences, company details, and notifications.
        </p>
      </div>

      {savedMessage && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
          {savedMessage}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Company Settings */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <Building className="h-5 w-5 text-[#C9A96E]" />
            <div>
              <h2 className="text-base font-bold text-[#051428]">Company Details</h2>
              <p className="text-xs text-slate-400">Public profile displayed on customer documents</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Company Name</label>
              <input
                value={profile.companyName}
                onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
                className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Contact Email</label>
              <input
                type="email"
                value={profile.contactEmail}
                onChange={(e) => setProfile({ ...profile, contactEmail: e.target.value })}
                className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Support Phone</label>
              <input
                value={profile.supportPhone}
                onChange={(e) => setProfile({ ...profile, supportPhone: e.target.value })}
                className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Headquarters Address</label>
              <input
                value={profile.headquarters}
                onChange={(e) => setProfile({ ...profile, headquarters: e.target.value })}
                className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
              />
            </div>
          </div>
        </div>

        {/* Notifications Settings */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <Bell className="h-5 w-5 text-[#C9A96E]" />
            <div>
              <h2 className="text-base font-bold text-[#051428]">Notification Preferences</h2>
              <p className="text-xs text-slate-400">Control automated operational alerts and emails</p>
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-semibold text-[#051428]">New Customer Request Alerts</p>
                <p className="text-xs text-slate-400">Send immediate email when a client submits an inquiry</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.emailNewRequests}
                onChange={(e) => setNotifications({ ...notifications, emailNewRequests: e.target.checked })}
                className="h-5 w-5 rounded accent-[#4F0908]"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-semibold text-[#051428]">Shipment Status Changes</p>
                <p className="text-xs text-slate-400">Notify assigned team members when shipment status updates</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.emailShipmentStatus}
                onChange={(e) => setNotifications({ ...notifications, emailShipmentStatus: e.target.checked })}
                className="h-5 w-5 rounded accent-[#4F0908]"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-semibold text-[#051428]">Weekly Executive Digest</p>
                <p className="text-xs text-slate-400">Receive weekly summary of logistics KPI performance</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.weeklyReport}
                onChange={(e) => setNotifications({ ...notifications, weeklyReport: e.target.checked })}
                className="h-5 w-5 rounded accent-[#4F0908]"
              />
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3C0706]"
          >
            <Save className="h-4 w-4" />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
