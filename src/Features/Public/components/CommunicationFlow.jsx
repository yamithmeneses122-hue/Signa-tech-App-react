const flows = [
  ["01", "Voz a texto", "Hablas", "SIGNA procesa", "Recibes texto"],
  ["02", "Señas a texto", "Realizas una seña", "SIGNA interpreta", "Obtienes texto"],
];

export default function CommunicationFlow() {
  return (
    <section id="demo" className="border-y border-white/8 bg-cyan-300/[.025]">
      <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
        <header className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">
            El puente
          </span>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Una experiencia pensada en dos direcciones.
          </h2>
        </header>

        <section className="mt-12 grid gap-5 lg:grid-cols-2">
          {flows.map(([number, title, first, second, third]) => (
            <article
              key={number}
              className="rounded-[2rem] border border-white/9 bg-[#111a20]/80 p-7"
            >
              <span className="text-xs font-black text-cyan-300">
                {number}
              </span>
              <h3 className="mt-3 text-xl font-bold">{title}</h3>
              
              <ol className="mt-8 grid gap-3 sm:grid-cols-3">
                {[first, second, third].map((item, index) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/[.025] p-5 text-center"
                  >
                    <span className="text-[11px] font-bold text-cyan-300">
                      0{index + 1}
                    </span>
                    <p className="mt-2 text-sm font-semibold text-slate-200">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </section>
      </section>
    </section>
  );
}