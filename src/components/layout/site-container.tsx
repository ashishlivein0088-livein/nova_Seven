import { cn } from "@/lib/utils";

type SiteContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function SiteContainer({ children, className }: SiteContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[96vw] px-4 sm:px-6 lg:px-8 2xl:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}
