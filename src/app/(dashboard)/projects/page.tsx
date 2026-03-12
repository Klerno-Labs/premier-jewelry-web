import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, MoreHorizontal, Filter } from "lucide-react";
import { formatDate, formatCurrency } from "@/lib/utils";

const projects = [
  { id: 1, name: "Website Redesign", description: "Overhaul of corporate website", client: "Acme Corp", status: "In Progress", budget: 12000, due: "2023-11-15" },
  { id: 2, name: "Mobile App Phase 2", description: "Add social features", client: "Globex Inc", status: "Completed", budget: 45000, due: "2023-10-30" },
  { id: 3, name: "Marketing Campaign", description: "Q4 digital ads", client: "Soylent Corp", status: "At Risk", budget: 8000, due: "2023-11-01" },
  { id: 4, name: "Q4 Analytics Report", description: "Internal reporting", client: "Initech", status: "Review", budget: 2500, due: "2023-10-28" },
  { id: 5, name: "E-commerce Integration", description: "Stripe setup", client: "Umbrella Corp", status: "In Progress", budget: 15000, due: "2023-12-10" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed": return <Badge variant="success">{status}</Badge>;
    case "In Progress": return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{status}</Badge>;
    case "At Risk": return <Badge variant="destructive">{status}</Badge>;
    case "Review": return <Badge variant="warning">{status}</Badge>;
    default: return <Badge variant="outline">{status}</Badge>;
  }
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-col gap-4 sm:flex-row">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Manage your client projects and track progress.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <CardTitle>All Projects</CardTitle>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Filter projects..." 
                  className="pl-9 w-full"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead className="hidden md:table-cell">Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Budget</TableHead>
                  <TableHead className="hidden md:table-cell">Due Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>
                      <div className="flex flex-col">
                        <Link href={`/projects/${project.id}`} className="font-medium hover:underline text-indigo-600">
                          {project.name}
                        </Link>
                        <span className="text-xs text-muted-foreground sm:hidden mt-1">{project.client}</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{project.client}</TableCell>
                    <TableCell>{getStatusBadge(project.status)}</TableCell>
                    <TableCell className="hidden md:table-cell">{formatCurrency(project.budget)}</TableCell>
                    <TableCell className="hidden md:table-cell">{formatDate(project.due)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
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