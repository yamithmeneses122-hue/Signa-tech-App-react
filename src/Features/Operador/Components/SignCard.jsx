import React from 'react';

export default function SignCard({ iconClass, title, category, onPlay }) {
  return (
    <>
      <article className="flex flex-col justify-between p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl hover:border-teal-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl border-l-4 border-l-teal-500">
        <section className="flex flex-col gap-4">
          <figure className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-xl border border-teal-500/20">
            <i className={iconClass}></i>
          </figure>
          <section className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <span className="text-xs font-medium text-teal-400 bg-teal-500/10 px-2 py-1 rounded-md w-fit border border-teal-500/20">{category}</span>
          </section>
        </section>
        <button 
          type="button" 
          className="mt-6 w-full py-2.5 px-4 bg-teal-600/20 text-teal-300 font-bold rounded-xl text-xs hover:bg-teal-600 hover:text-white transition-colors shadow-lg border border-teal-500/30 flex items-center justify-center gap-2"
          onClick={onPlay}
        >
          <i className="fa-solid fa-play"></i> Ver Seña
        </button>
      </article>
    </>
  );
}