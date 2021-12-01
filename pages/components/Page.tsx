import React from "react";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export default function Page({ children }: Props) {
  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden">
      {children}
    </div>
  );
}
