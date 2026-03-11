import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Plus, MoreHorizontal, Filter } from "lucide-react";

const projectsData = [
  {
    id: "PRJ-001",
    name: "Website Redesign - Q4",
    client: "Acme Corp",
    status: "Active",
    budget: "$12,500",
    dueDate: "Oct 24, 2024",
    progress: 75,
  },
  {
    id: "PRJ-002",
    name: "Mobile App Migration",
    client: "Globex Inc",
    status: "Review",
    budget: "$45,000",
    dueDate: "Nov 12, 2024",
    progress: 90,
  },
  {
    id: "PRJ-003",
    name: "Marketing Campaign Launch",
    client: "Soylent Corp",
    status: "Planning",
    budget: "$8,200",
    dueDate: "Dec 05, 2024",
    progress: 15,
  },
  {
    id: "PRJ-004",
    name: "Internal Dashboard v2",
    client: "Initech",
    status: "On Hold",
    budget: "$5,000",
    dueDate: "Sep 15, 2024",
    progress: 40,
  },
  {
    id: "PRJ-005",
    name: "E-commerce Integration",
    client: "Umbrella Corp",
    status: "Active",
    budget: "$22,000",
    dueDate: "Jan 10, 2025",
    progress: 55,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "default";
    case "Completed":
      return "success";
    case "Review":
      return "warning";
    case "Planning":
      return "secondary";
    case "On Hold":
      return "destructive";
    default:
      return "outline";
  }
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">
            Manage your ongoing and past projects.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>All Projects</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search projects..."
                  className="pl-8 w-full sm:w-[250px]"
                />
              </div>
              <Button variant="outline" size="icon" aria-label="Filter">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Progress</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectsData.map((project) => (
                  <TableRow key={project.id} className="group">
                    <TableCell className="font-medium">
                      {project.name}
                      <div className="text-xs text-muted-foreground md:hidden">
                        {project.client}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {project.client}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(project.status) as any}>
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {project.budget}
                    </TableCell>
                    <TableCell>{project.dueDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        <span className="w-8 text-right text-xs text-muted-foreground">
                          {project.progress}%
                        </span>
                        <div className="h-2 w-16 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="More options"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}