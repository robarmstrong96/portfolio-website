export function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 min-w-max bg-neutral-50 shadow-md">
      <div className="h-32 py-8">
        <Title />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div>
      <h1 className="flex justify-center text-5xl font-bold antialiased">
        Kyle Armstrong
      </h1>
      <h6 className="py-1 flex justify-center text-md text-gray-500">
        kylearmstrong96@outlook.com
      </h6>
    </div>
  );
}
