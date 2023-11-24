import { ReactNode } from "react";

export interface ClassNameProps {
  className?: string;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface ClassNameChildrenProps extends ClassNameProps, ChildrenProps {}
