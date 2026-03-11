import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"; // Assuming badge component or creating inline
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  ArrowUpRight,
} from "lucide-react";

// Mock Data for production look
const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1% from last month",
    icon: Users,
  },
  {
    title: "Active Projects",
    value: "12",
    change: "+19% from last month",
    icon: Activity,
  },
  {
    title: "Active Now",
    value: "573",
    change: "+201 since last hour",
    icon: TrendingUp,
  },
];

const recentProjects = [
  {
    id: "PRJ-001",
    name: "Website Redesign",
    client: "Acme Corp",
    status: "active",
    dueDate: "2024-05-15",
    budget: "$12,000",
  },
  {
    id: "PRJ-002",
    name: "Mobile App MVP",
    client: "Globex",
    status: "pending",
    dueDate: "2024-06-01",
    budget: "$45,000",
  },
  {
    id: "PRJ-003",
    name: "Marketing Campaign",
    client: "Soylent Corp",
    status: "active",
    dueDate: "2024-04-30",
    budget: "$8,500",
  },
  {
    id: "PRJ-004",
    name: "Q2 Financial Audit",
    client: "Initech",
    status: "completed",
    dueDate: "2024-03-15",
    budget: "$15,000",
  },
  {
    id: "PRJ-005",
    name: "Cloud Migration",
    client: "Umbrella Corp",
    status: "active",
    dueDate: "2024-07-20",
    budget: "$22,000",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your business performance and activities.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="flex items-center text-xs text-muted-foreground">
                <span className="mr-1 flex items-center text-green-600">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Budget</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.id}</TableCell>
                    <TableCell>{project.name}</TableCell>
                    <TableCell>{project.client}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          project.status === "active"
                            ? "bg-green-100 text-green-800"
                            : project.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {project.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">{project.budget}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full flex items-center justify-center bg-gray-50 rounded border border-dashed border-gray-300 text-gray-500">
              <div className="text-center">
                <Activity className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                <p className="text-sm">Chart visualization placeholder</p>
                <p className="text-xs">(Recharts integration ready)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}