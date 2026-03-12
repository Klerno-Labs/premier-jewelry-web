import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  CheckCircle2, 
  Clock, 
  AlertCircle 
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

// Mock Data for demonstration
const stats = [
  {
    title: "Total Revenue",
    value: formatCurrency(45231.89),
    change: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    title: "Active Projects",
    value: "12",
    change: "+2 this week",
    icon: CheckCircle2,
  },
  {
    title: "Pending Tasks",
    value: "23",
    change: "+5 from yesterday",
    icon: Clock,
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180 since last hour",
    icon: Users,
  },
];

const recentProjects = [
  { name: "Website Redesign", client: "Acme Corp", status: "In Progress", budget: 12000, due: "2023-11-15" },
  { name: "Mobile App Phase 2", client: "Globex Inc", status: "Completed", budget: 45000, due: "2023-10-30" },
  { name: "Marketing Campaign", client: "Soylent Corp", status: "At Risk", budget: 8000, due: "2023-11-01" },
  { name: "Q4 Analytics Report", client: "Initech", status: "Review", budget: 2500, due: "2023-10-28" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case &quot;Completed": return <Badge variant="success">{status}</Badge>;
    case &quot;In Progress": return <Badge variant="default">{status}</Badge>;
    case &quot;At Risk": return <Badge variant="destructive">{status}</Badge>;
    case &quot;Review": return <Badge variant="warning">{status}</Badge>;
    default: return <Badge variant="outline">{status}</Badge>;
  }
};

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        
        {/* Recent Projects Table */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Budget</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentProjects.map((project) => (
                  <TableRow key={project.name}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>{project.client}</TableCell>
                    <TableCell>{getStatusBadge(project.status)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(project.budget)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Activity / Alerts */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-2 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Project &quot;Mobile App" completed</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-2 rounded-full">
                <AlertCircle className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Soylent Corp payment overdue</p>
                <p className="text-xs text-muted-foreground">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full">
                <Users className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">New team member added</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Monthly report generated</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}