import {
  BarChart3,
  FileText,
  Clock,
  Download,
  TrendingUp,
  Calendar,
  History,
  Settings,
  ArrowRight,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  PieChart,
  LineChart,
} from "lucide-react"

const stats = [
  { label: "Reports Generated", value: "156", change: "+28%", changeType: "positive", icon: FileText, iconColor: "text-blue-500" },
  { label: "Data Sources Connected", value: "12", change: "+2", changeType: "positive", icon: BarChart3, iconColor: "text-purple-500" },
  { label: "Scheduled Reports", value: "8", change: "Active", icon: Calendar, iconColor: "text-green-500" },
  { label: "Time Saved", value: "45 hrs", change: "+12%", changeType: "positive", icon: Clock, iconColor: "text-orange-500" },
]

const recentReports = [
  { name: "Q3 Sales Performance", type: "Sales", status: "Completed", generated: "2 hours ago", format: "PDF" },
  { name: "Weekly Pipeline Analysis", type: "Sales", status: "Completed", generated: "Yesterday", format: "Excel" },
  { name: "Customer Churn Report", type: "Analytics", status: "Processing", generated: "In progress", format: "PDF" },
  { name: "Marketing ROI Summary", type: "Marketing", status: "Completed", generated: "2 days ago", format: "PDF" },
  { name: "Employee Productivity Metrics", type: "HR", status: "Scheduled", generated: "Tomorrow 9 AM", format: "Excel" },
]

const scheduledReports = [
  { name: "Daily Sales Summary", frequency: "Daily at 6 AM", recipients: "sales-team@company.com", enabled: true },
  { name: "Weekly Performance Review", frequency: "Every Monday 8 AM", recipients: "leadership@company.com", enabled: true },
  { name: "Monthly Financial Report", frequency: "1st of month", recipients: "finance@company.com", enabled: true },
  { name: "Quarterly Business Review", frequency: "End of quarter", recipients: "executives@company.com", enabled: false },
]

const activityLog = [
  { time: "10:45 AM", action: "Generated Q3 Sales Performance report", type: "success" },
  { time: "10:30 AM", action: "Started processing Customer Churn Report", type: "primary" },
  { time: "09:15 AM", action: "Sent Weekly Pipeline Analysis to 12 recipients", type: "success" },
  { time: "Yesterday", action: "Connected new data source: Stripe Analytics", type: "primary" },
  { time: "Yesterday", action: "Updated Marketing ROI template", type: "neutral" },
]

export default function ReportPage() {
  return (
    <div className="p-4 md:p-8 lg:p-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
        {/* Page Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4 bg-white dark:bg-transparent rounded-xl">
          <div className="flex min-w-72 flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                Reporting Agent
              </h1>
              <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20">
                Active
              </span>
            </div>
            <p className="text-slate-500 dark:text-[#92adc9] text-base font-normal leading-normal">
              Automate report generation, data compilation, and scheduled deliveries.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg h-10 px-4 bg-slate-100 dark:bg-[#233648] text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-[#324d67] transition-colors">
              <History className="w-4 h-4" />
              Report History
            </button>
            <button className="flex items-center gap-2 rounded-lg h-10 px-4 bg-blue-500 text-white text-sm font-bold hover:bg-blue-600 transition-colors">
              <FileText className="w-4 h-4" />
              New Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-[#324d67] bg-white dark:bg-[#192633] shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">{stat.label}</p>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <p className="text-slate-900 dark:text-white tracking-light text-2xl font-bold leading-tight">{stat.value}</p>
                <p className="text-green-500 text-sm font-medium leading-normal flex items-center gap-1">
                  {stat.changeType === "positive" && <TrendingUp className="w-4 h-4" />}
                  {stat.change}
                </p>
              </div>
            )
          })}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Recent Reports */}
            <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-[#192633] p-6 border border-slate-200 dark:border-[#324d67] shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-[#233648]">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-pink-500" />
                  Recent Reports
                </h3>
                <button className="text-blue-500 text-sm font-bold hover:underline flex items-center gap-1">
                  View All <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {recentReports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#111a22] rounded-lg border border-slate-200 dark:border-[#233648] hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        report.type === "Sales" ? "bg-blue-500/10 text-blue-500" :
                        report.type === "Analytics" ? "bg-purple-500/10 text-purple-500" :
                        report.type === "Marketing" ? "bg-green-500/10 text-green-500" :
                        "bg-orange-500/10 text-orange-500"
                      }`}>
                        {report.type === "Sales" ? <LineChart className="w-5 h-5" /> :
                         report.type === "Analytics" ? <PieChart className="w-5 h-5" /> :
                         <BarChart3 className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{report.name}</p>
                        <p className="text-sm text-slate-500 dark:text-[#92adc9]">
                          {report.type} • {report.format}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <span className={`inline-flex items-center gap-1 text-xs font-medium ${
                          report.status === "Completed" ? "text-green-500" :
                          report.status === "Processing" ? "text-blue-500" :
                          "text-slate-500"
                        }`}>
                          {report.status === "Completed" && <CheckCircle2 className="w-3 h-3" />}
                          {report.status === "Processing" && <RefreshCw className="w-3 h-3 animate-spin" />}
                          {report.status}
                        </span>
                        <p className="text-xs text-slate-500 dark:text-[#92adc9] mt-1">{report.generated}</p>
                      </div>
                      {report.status === "Completed" && (
                        <button className="p-2 hover:bg-slate-200 dark:hover:bg-[#233648] rounded-lg transition-colors">
                          <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scheduled Reports */}
            <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-[#192633] p-6 border border-slate-200 dark:border-[#324d67] shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-[#233648]">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-500" />
                  Scheduled Reports
                </h3>
                <button className="text-blue-500 text-sm font-bold hover:underline">+ Add Schedule</button>
              </div>
              <div className="space-y-3">
                {scheduledReports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#111a22] rounded-lg border border-slate-200 dark:border-[#233648]">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-slate-900 dark:text-white">{report.name}</p>
                      <p className="text-xs text-slate-500 dark:text-[#92adc9]">
                        {report.frequency} • {report.recipients}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={report.enabled} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Quick Generate */}
            <div className="flex flex-col gap-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-6 border border-slate-200 dark:border-[#324d67] shadow-sm">
              <h3 className="text-slate-900 dark:text-white text-lg font-bold">Quick Generate</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-white dark:bg-[#192633] rounded-lg border border-slate-200 dark:border-[#233648] hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <LineChart className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Sales Summary</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-white dark:bg-[#192633] rounded-lg border border-slate-200 dark:border-[#233648] hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <PieChart className="w-5 h-5 text-purple-500" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Analytics Overview</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-white dark:bg-[#192633] rounded-lg border border-slate-200 dark:border-[#233648] hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Performance Metrics</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-[#192633] p-6 border border-slate-200 dark:border-[#324d67] shadow-sm flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Activity
                </h3>
              </div>
              <div className="space-y-4">
                {activityLog.map((log, index) => {
                  const dotColors = {
                    primary: "bg-blue-500",
                    neutral: "bg-gray-500",
                    success: "bg-green-500",
                  }
                  return (
                    <div key={index} className="flex gap-3 items-start">
                      <div className={`w-2 h-2 rounded-full mt-2 ${dotColors[log.type]}`}></div>
                      <div className="flex flex-col gap-1 flex-1">
                        <p className="text-sm text-slate-900 dark:text-white">{log.action}</p>
                        <span className="text-xs text-slate-500 dark:text-[#92adc9]">{log.time}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
