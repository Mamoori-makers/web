export const IntroTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="mb-3 text-2xl font-bold sm:text-3xl lg:m-3 lg:text-4xl">{children}</h1>;
};

export const IntroContents = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center text-base sm:text-lg">
      {children}
    </div>
  );
};

export const IntroBox = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-8 my-12 flex flex-col items-center">{children}</div>;
};
