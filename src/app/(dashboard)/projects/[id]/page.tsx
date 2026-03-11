import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  Users, 
  FileText, 
  CheckCircle2 
} from "lucide-react";
import Link from "next/link";
import { formatCurrency, formatDate, getInitials } from "@/lib/utils";

// Mock Data
const project = {
  id: 1,
  name: "Website Redesign",
  description: "Complete overhaul of the corporate website including new branding, responsive design, and CMS integration.",
  status: "In Progress",
  budget: 12000,
  spent: 8450,
  dueDate: "2023-11-15",
  client: "Acme Corp",
  team: [
    { name: "Sarah Connor", role: "Lead Designer" },
    { name: "John Smith", role: "Developer" },
    { name: "Emily Doe", role: "Project Manager" },
  ]
};

const tasks = [
  { id: 1, title: "Wireframing", status: "Completed", assignee: "Sarah Connor" },
  { id: 2, title: "Visual Design", status: "In Progress", assignee: "Sarah Connor" },
  { id: 3, title: "Frontend Dev", status: "In Progress", assignee: "John Smith" },
  { id: 4, title: "Content Strategy", status: "Todo", assignee: "Emily Doe" },
];

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
          <p className="text-muted-foreground">{project.client}</p>
        </div>
        <div className="ml-auto">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{project.status}</Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Main Info */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {project.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Due: {formatDate(project.dueDate)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="h-4 w-4" />
                  <span>Budget: {formatCurrency(project.budget)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-5 w-5 rounded-full border flex items-center justify-center">
                        {task.status === 'Completed' && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                      </div>
                      <div>
                        <p className="font-medium">{task.title}</p>
                        <p className="text-xs text-muted-foreground">{task.assignee}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={task.status === 'Completed' ? 'success' : 'outline'}
                      className={task.status === 'Completed' ? 'bg-green-100 text-green-700' : ''}
                    >
                      {task.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                + Add Task
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.team.map((member, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                      {getInitials(member.name)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" size="sm" variant="outline">
                Manage Team
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Budget Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Spent</span>
                  <span className="font-medium">{formatCurrency(project.spent)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Remaining</span>
                  <span className="font-medium">{formatCurrency(project.budget - project.spent)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${(project.spent / project.budget) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}