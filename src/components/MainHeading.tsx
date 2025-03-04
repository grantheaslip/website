import { FC, memo } from "react";
import { twMerge } from "tailwind-merge";

const MainHeading: FC<{ children: string; className?: string }> = memo(
  ({ children, className, ...remainingProps }) => (
    <h1
      className={twMerge("font-sans text-4xl font-bold", className)}
      {...remainingProps}
    >
      {children}
    </h1>
  ),
);

MainHeading.displayName = "MainHeading";

export default MainHeading;
