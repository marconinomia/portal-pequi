import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#faf7f2_0%,_#f7f2e8_100%)] text-[#0b2f5f]">
      <header className="border-b border-[#e8dfd0] bg-[#fcfaf7]/90 px-4 py-5 shadow-[0_8px_30px_rgba(11,47,95,0.04)] backdrop-blur-sm sm:px-6 lg:px-8 lg:py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0b2f5f] sm:text-4xl">
              PEQUI
            </h1>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.35em] text-[#174b8a] sm:text-sm">
              Revista de Divulgação Científica
            </p>
          </div>

          <nav className="hidden gap-7 text-sm font-semibold uppercase tracking-[0.25em] md:flex">
            <Link
              className="relative pb-1 text-[#0b2f5f] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0b7c65] after:transition-all after:duration-300 hover:text-[#0b7c65] hover:after:w-full"
              href="/"
            >
              <span className="font-bold text-[#0b7c65]">Início</span>
            </Link>
            <Link
              className="relative pb-1 text-[#0b2f5f] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0b7c65] after:transition-all after:duration-300 hover:text-[#0b7c65] hover:after:w-full"
              href="/sobre"
            >
              Sobre
            </Link>
            <Link
              className="relative pb-1 text-[#0b2f5f] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0b7c65] after:transition-all after:duration-300 hover:text-[#0b7c65] hover:after:w-full"
              href="/edicoes/01"
            >
              Edição 01
            </Link>
            <Link
              className="relative pb-1 text-[#0b2f5f] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0b7c65] after:transition-all after:duration-300 hover:text-[#0b7c65] hover:after:w-full"
              href="/equipe"
            >
              Equipe
            </Link>
            <Link
              className="relative pb-1 text-[#0b2f5f] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0b7c65] after:transition-all after:duration-300 hover:text-[#0b7c65] hover:after:w-full"
              href="/contato"
            >
              Contato
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Abrir menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d2c4] bg-white/90 text-[#0b2f5f] shadow-sm transition hover:border-[#0b7c65] hover:text-[#0b7c65] md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 sm:py-28 md:grid-cols-2 md:items-center lg:gap-16 lg:py-32">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#0b7c65]">
            1ª Edição • 2026
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-[1.15] text-[#0b2f5f] md:text-6xl">
            Ciência que nasce no IFG, cresce, transforma e floresce.
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-[#24364f]">
            A Revista PEQUI é uma publicação digital de divulgação científica
            do IFG Câmpus Águas Lindas de Goiás, produzida por estudantes e
            professores da Licenciatura em Ciências Biológicas.
          </p>

          <div className="flex flex-wrap gap-4">
            <a className="rounded-full bg-[#0b2f5f] px-6 py-3 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5" href="/edicoes/01">
              📖 Ler edição online
            </a>
            <a className="rounded-full border border-[#0b2f5f] px-6 py-3 font-semibold transition-transform duration-200 hover:-translate-y-0.5" href="#">
              ⬇️ Baixar PDF
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e8dfd0] bg-[#fcfaf7] p-6 shadow-[0_20px_60px_rgba(11,47,95,0.08)] sm:p-8 lg:p-10">
          <div className="flex items-center justify-center rounded-[1.5rem] bg-white/70">
            <img
              src="/CAPA.jpg"
              alt="Capa da edição PEQUI"
              className="w-full max-w-[95%] rounded-[1.25rem] object-contain shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[#e8dfd0] bg-white py-24 sm:py-28 lg:py-32">
        <div className="mx-auto flex max-w-6xl flex-col px-6 sm:px-8">
          <div className="max-w-[42rem]">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#0b7c65]">
              Sobre a Revista
            </p>
            <h3 className="mb-6 text-3xl font-bold leading-tight text-[#0b2f5f] sm:text-4xl">
              Conheça a Revista PEQUI
            </h3>
            <p className="mb-5 text-lg leading-8 text-[#24364f]">
              Divulgação científica que conecta ensino, pesquisa e extensão no IFG – Câmpus Águas Lindas de Goiás.
            </p>
            <p className="text-[1.025rem] leading-8 text-[#24364f]">
              A Revista PEQUI é uma publicação digital dedicada à divulgação da produção científica, tecnológica e educacional desenvolvida por estudantes e docentes do Instituto Federal de Goiás – Câmpus Águas Lindas de Goiás. Seu objetivo é tornar o conhecimento científico mais acessível à comunidade, valorizando iniciativas que promovem inovação, educação e impacto social.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            <article className="flex h-full flex-col rounded-[1.4rem] border border-[#e8dfd0] bg-[#fcfaf7] p-6 shadow-[0_10px_24px_rgba(11,47,95,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(11,47,95,0.08)] sm:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8d2c4] bg-white text-[#0b7c65]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
                  <path d="M5 7h14M5 12h14M5 17h8" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-[#0b2f5f]">
                Divulgação Científica
              </h4>
              <p className="text-base leading-7 text-[#24364f]">
                Transformamos pesquisas, projetos e experiências acadêmicas em conteúdos acessíveis para toda a sociedade.
              </p>
            </article>

            <article className="flex h-full flex-col rounded-[1.4rem] border border-[#e8dfd0] bg-[#fcfaf7] p-6 shadow-[0_10px_24px_rgba(11,47,95,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(11,47,95,0.08)] sm:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8d2c4] bg-white text-[#0b7c65]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
                  <path d="M12 3v18M3 12h18" strokeLinecap="round" />
                  <path d="M7 7l10 10M17 7L7 17" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-[#0b2f5f]">
                Ensino, Pesquisa e Extensão
              </h4>
              <p className="text-base leading-7 text-[#24364f]">
                Integramos diferentes áreas do conhecimento para mostrar como o IFG produz ciência que transforma a realidade.
              </p>
            </article>

            <article className="flex h-full flex-col rounded-[1.4rem] border border-[#e8dfd0] bg-[#fcfaf7] p-6 shadow-[0_10px_24px_rgba(11,47,95,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(11,47,95,0.08)] sm:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8d2c4] bg-white text-[#0b7c65]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
                  <path d="M7 4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                  <path d="M8 8h8M8 12h5" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-[#0b2f5f]">
                Acesso Aberto
              </h4>
              <p className="text-base leading-7 text-[#24364f]">
                Todo o conteúdo da revista é gratuito e disponível para leitura online e download.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

