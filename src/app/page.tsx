import { Bio, Links } from "@/components/Shell";
import { BootMark } from "@/components/MarkSVG";

export default function Home() {
  return (
    <main className="mx-auto grid min-h-[100dvh] w-full max-w-[860px] grid-rows-[1fr_auto_1fr] px-6 py-10 sm:px-12 sm:py-14">
      <div />
      <BootMark />
      <div className="mt-10 space-y-6 self-start">
        <Bio delay="rv-2" />
        <Links delay="rv-3" />
      </div>
    </main>
  );
}
