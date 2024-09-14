import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { ...child.props });
        }
        return child;
      })}
    </div>
  );
};
