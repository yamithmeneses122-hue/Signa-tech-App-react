export default function DownloadPanel() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-10 lg:px-10">
      <article className="rounded-[2rem] border border-white/10 bg-[#10191f] p-8 lg:flex lg:items-center lg:justify-between lg:p-10">
        <section>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">
            Información del proyecto
          </p>
          <h2 className="mt-3 text-3xl font-black">
            Conoce la documentación de SIGNA-TECH.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            Consulta los materiales disponibles desde el repositorio y conoce el
            alcance del proyecto.
          </p>
        </section>
        
        <a
          href="/documentos/ficha-producto-signa-tech.pdf"
          download
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/10 px-6 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:text-cyan-300 lg:mt-0"
        >
          Descargar ficha
        </a>
      </article>
    </section>
  );
}