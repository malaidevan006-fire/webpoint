import Image from "next/image";

export default function NavbarBrand() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-11 w-11 overflow-hidden rounded-full border border-cyan-400/30 bg-slate-900/80 shadow-[0_0_30px_rgba(6,182,212,0.25)]">
        <Image
          src="/ChatGPT Image Jul 3, 2026, 08_46_34 PM.png"
          alt="Webpoint logo"
          fill
          className="object-cover"
          sizes="44px"
        />
      </div>
      <div>
        <p className="text-lg font-semibold text-white">Webpoint</p>
        <p className="text-sm text-slate-400">Design • Develop • Deliver</p>
      </div>
    </div>
  );
}
