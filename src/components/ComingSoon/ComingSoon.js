import Link from "next/link";

export default function ComingSoon() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">This Page is</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl">Coming Soon...</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">We are excited to share with you that our brand new website is currently under construction and will be launching soon</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }