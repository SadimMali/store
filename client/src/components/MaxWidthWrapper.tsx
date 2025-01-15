import { cn } from "@/lib/utils";

type MaxWidthProps = {
  className?: string;
  children: React.ReactNode;
};

const MaxWidthWrapper = ({ className, children }: MaxWidthProps) => {
  return (
    <div className={cn("h-full w-full px-2.5 md:px-10 lg:px-20", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
