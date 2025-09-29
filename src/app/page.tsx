export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between size-full">
      <div className="mx-auto flex flex-col gap-2 justify-center items-center">
        <h1 className="mx-auto text-xl font-bold">Coming Soon,</h1>
        <p className="">
          Visit{" "}
          <a
            href="https://mbdin.cc?utm_source=phalia.pk"
            className="underline text-4xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-purple-500">MBDin</span>.cc
          </a>{" "}
          for more
        </p>
      </div>
    </main>
  );
}
