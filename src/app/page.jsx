export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>   
          <h1 className="text-6xl font-thin">
            <span className="opacity-25">www.</span>
            <span>justin</span>
            <span className="opacity-25">-</span>
            <span>null</span>
            <span className="opacity-25">.com</span>
          </h1>
        </div>
        <div>
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="https://www.linkedin.com/in/justinnull/">About Me</a>
        </div>
      </main>
    </div>
  );
}
