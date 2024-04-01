import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export default function DashBroadLayout({ children }: IProps) {
  return (
    <div>
      <nav>Header</nav>
      {children}
      <footer>Footer</footer>
    </div>
  );
}
