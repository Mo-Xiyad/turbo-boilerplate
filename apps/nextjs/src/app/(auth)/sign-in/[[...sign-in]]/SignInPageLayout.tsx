import { cn } from "@acme/ui";

export default function SignInPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={cn("flex flex-1 flex-col")} id="top">
      <div className={cn("absolute left-10 top-0 z-50 mr-2 mt-4")}></div>
      <section>
        <div className={cn("relative flex flex-1")}>
          <div className={cn("relative z-10 flex h-screen w-screen px-4")}>
            <div className={cn("flex flex-1 flex-col justify-center")}>
              <div className={cn("flex flex-wrap justify-around")}>
                {/* Main component on the left */}

                <div
                  className={cn(
                    "slideUpFadeIn mt-10 md:mt-0 xl:grid xl:h-fit xl:w-max xl:grid-cols-1 xl:gap-2",
                  )}
                >
                  {/* Children component */}
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
