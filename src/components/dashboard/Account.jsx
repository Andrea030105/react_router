function Account() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
      <span className="mb-3 inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
        Stats
      </span>

      <h2 className="mb-4 text-3xl font-bold text-white">Pagina Stats</h2>
      <p className="text-slate-300">
        Questa è la seconda pagina della dashboard. Puoi usarla per statistiche,
        card o test del router.
      </p>
    </section>
  );
}

export default Account;
