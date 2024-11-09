import Image from "next/image";
import localFont from "next/font/local";
import Button from "@/components/button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl text-center">
          Agendamento <br />
          <strong>Sta. Teresinha</strong>
        </h1>
        <div className="w-[150px] h-[150px] border-4 rounded-full overflow-hidden">
          <Image
            className=""
            src="/logo.png"
            alt="Next.js logo"
            width={150}
            height={150}
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button>Agendar</Button>
          <Button>Ver Agendamento</Button>
        </div>
      </main>
    </div>
  );
}
