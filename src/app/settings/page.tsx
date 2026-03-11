import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Save, User, Bell, Shield, CreditCard as CreditCardIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Information
            </CardTitle>
            <CardDescription>
              Update your account's profile information and email address.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium leading-none">
                  First Name
                </label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium leading-none">
                  Last Name
                </label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">
                Email Address
              </label>
              <Input id="email" type="email" defaultValue="john@pegrio.app" />
              <p className="text-xs text-muted-foreground">
                We will send a verification email to this address.
              </p>
            </div>
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium leading-none">
                Username
              </label>
              <div className="flex gap-2">
                <span className="flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
                  pegrio.app/
                </span>
                <Input id="username" defaultValue="johndoe" className="rounded-l-none" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Notifications Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Configure how you receive notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <label htmlFor="email-notifications" className="text-sm font-medium leading-none">
                  Email Notifications
                </label>
                <p className="text-xs text-muted-foreground">
                  Receive emails about your account activity.
                </p>
              </div>
              <input type="checkbox" id="email-notifications" className="h-5 w-5 accent-primary" defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <label htmlFor="marketing-emails" className="text-sm font-medium leading-none">
                  Marketing Emails
                </label>
                <p className="text-xs text-muted-foreground">
                  Receive emails about new features and offers.
                </p>
              </div>
              <input type="checkbox" id="marketing-emails" className="h-5 w-5 accent-primary" />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <label htmlFor="security-alerts" className="text-sm font-medium leading-none">
                  Security Alerts
                </label>
                <p className="text-xs text-muted-foreground">
                  Receive emails for important security updates.
                </p>
              </div>
              <input type="checkbox" id="security-alerts" className="h-5 w-5 accent-primary" defaultChecked disabled />
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Subscription/Billing Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCardIcon className="h-5 w-5" />
              Subscription
            </CardTitle>
            <CardDescription>
              Manage your current plan and payment methods.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Growth Plan</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Your next billing date is Oct 24, 2024 ($399/mo).
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Cancel Plan</Button>
                <Button>Manage Payment</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}