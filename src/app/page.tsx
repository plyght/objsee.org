import { Bio, Links } from "@/components/Shell";
import { BootMark } from "@/components/MarkSVG";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-[860px] flex-col justify-center px-6 py-14 sm:px-12">
      <BootMark />
      <div className="mt-10 space-y-6">
        <Bio delay="rv-2" />
        <Links delay="rv-3" />
      </div>
    </main>
  );
}
