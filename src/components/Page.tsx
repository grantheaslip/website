import { FC, memo, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import Layout from "src/components/Layout";

const Page: FC<{ children: ReactNode; className?: string }> = memo(
  ({ children, className, ...remainingProps }) => (
    <Layout>
      <main
        className={twMerge(
          "flex w-full max-w-lg flex-col gap-y-4 overflow-hidden border-1 border-neutral-200 bg-white p-6 dark:bg-black [&_a]:text-sky-600 [&_a]:underline dark:[&_a]:text-sky-400",
          className,
        )}
        {...remainingProps}
      >
        {children}
      </main>
    </Layout>
  ),
);

Page.displayName = "Page";

export default Page;
