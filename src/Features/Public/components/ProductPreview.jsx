export default function ProductPreview() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
      <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#10191f]">
        <section className="grid lg:grid-cols-[1.05fr_.95fr]">
          <figure className="border-b border-white/8 p-7 lg:border-b-0 lg:border-r lg:p-10">
            <figcaption className="text-xs font-bold uppercase tracking-[.18em] text-cyan-300">
              Vista del producto
            </figcaption>
            
            <section className="mt-7 rounded-3xl border border-white/8 bg-[#0b1115] p-5">
              <section className="grid gap-4 md:grid-cols-2">
                <section className="rounded-2xl bg-cyan-300/[.06] p-5">
                  <p className="text-sm font-bold">Captura visual</p>
                  <section className="mt-5 grid h-44 place-items-center rounded-2xl border border-dashed border-white/10 bg-black/20 text-4xl text-cyan-300">
                    ◉
                  </section>
                </section>

                <section className="rounded-2xl border border-white/8 bg-white/[.025] p-5">
                  <p className="text-xs text-slate-500">Resultado</p>
                  <p className="mt-5 rounded-2xl bg-white/[.04] p-4 text-sm">
                    Hola, mucho gusto.
                  </p>
                  <p className="mt-3 rounded-2xl bg-cyan-300/10 p-4 text-sm text-cyan-100">
                    Mensaje listo para comunicar.
                  </p>
                </section>
              </section>
            </section>
          </figure>

          <section className="p-7 lg:p-10">
            <span className="text-xs font-bold uppercase tracking-[.18em] text-cyan-300">
              Lo importante
            </span>
            <h2 className="mt-4 text-3xl font-black">
              Menos promesas. Más claridad.
            </h2>
            <ul className="mt-8 space-y-5 text-sm leading-7 text-slate-400">
              <li>✓ Explica el flujo antes de pedirle algo al usuario.</li>
              <li>
                ✓ Muestra el producto en lugar de depender de imágenes genéricas.
              </li>
              <li>
                ✓ Mantiene el foco en comunicación básica, cotidiana y educativa.
              </li>
              <li>
                ✓ Deja claro cuándo una función depende de integraciones
                posteriores.
              </li>
            </ul>
          </section>
        </section>
      </article>
    </section>
  );
}