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
          <div class="w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
            <a
              href="https://www.linkedin.com/in/justinnull/"
              class="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 72 72"
                fill="none"
              >
                <path
                  d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                  fill="#111827"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
