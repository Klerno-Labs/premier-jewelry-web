import * as React from "react";

export function DropdownMenu({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={className} {...props}>{children}</div>;
}
