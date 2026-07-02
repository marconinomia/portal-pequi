export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-[#0b2f5f]">
      <header className="border-b border-[#d8d2c4] bg-white/80 px-8 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">PEQUI</h1>
            <p className="text-sm uppercase tracking-[0.35em] text-[#174b8a]">
              Revista de Divulgação Científica
            </p>
          </div>

          <nav className="hidden gap-8 text-sm font-semibold uppercase tracking-widest md:flex">
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Edição 01</a>
            <a href="#">Equipe</a>
            <a href="#">Contato</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-8 py-28 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#0b7c65]">
            1ª Edição • 2026
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            Ciência que nasce no IFG, cresce, transforma e floresce.
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-[#24364f]">
            A Revista PEQUI é uma publicação digital de divulgação científica
            do IFG Câmpus Águas Lindas de Goiás, produzida por estudantes e
            professores da Licenciatura em Ciências Biológicas.
          </p>

          <div className="flex flex-wrap gap-4">
            <a className="rounded-full bg-[#0b2f5f] px-6 py-3 font-semibold text-white" href="#">
              📖 Ler edição online
            </a>
            <a className="rounded-full border border-[#0b2f5f] px-6 py-3 font-semibold" href="#">
              ⬇️ Baixar PDF
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-[#d8d2c4] bg-white p-8 shadow-lg">
          <div className="flex items-center justify-center rounded-2xl bg-white">
            <img
              src="/CAPA.jpg"
              alt="Capa da edição PEQUI"
              className="w-full max-w-[90%] rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
