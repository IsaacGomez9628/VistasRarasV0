"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardContent } from "@/components/dashboard-content"
import { EventsAttendance } from "@/components/events-attendance"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export function DashboardPage() {
  const [currentView, setCurrentView] = useState<string>("dashboard")

  return (
    <ThemeProvider defaultTheme="light" storageKey="dashboard-theme">
      <div className="min-h-screen bg-background">
        <DashboardLayout setCurrentView={setCurrentView} currentView={currentView}>
          {currentView === "dashboard" && <DashboardContent />}
          {currentView === "mis-asistencias" && <EventsAttendance />}
        </DashboardLayout>
      </div>
      <Toaster />
    </ThemeProvider>
  )
}

