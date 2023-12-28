export function TopHeader() {
  return (
    <div className="mx-auto bg-white shadow-md">
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
