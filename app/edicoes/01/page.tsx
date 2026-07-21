import Link from "next/link";

const sections = [
  {
    category: "Apresentação",
    description: "Abertura da edição e apresentação da proposta da Revista PEQUI.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path d="M5 7h14M5 12h14M5 17h8" strokeLinecap="round" />
      </svg>
    ),
    items: [
      {
        title: "O que é um projeto de extensão? Por que PEQUI?",
        author: "Kauan Costa dos Santos",
        page: "Página 05",
      },
    ],
  },
  {
    category: "Nosso Câmpus em Foco",
    description:
      "Histórias, trajetórias e aspectos que ajudam a construir a identidade do IFG – Câmpus Águas Lindas de Goiás.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path d="M4 20V9l8-5 8 5v11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      {
        title: "Nosso Câmpus em Foco",
        subtitle:
          "Um retrato do Câmpus Águas Lindas: sua história, estrutura e identidade.",
        author: "Rebeca Cardoso Feitosa",
        page: "Página 08",
      },
      {
        title: "Figuras do nosso câmpus: histórias marcadas pela educação",
        subtitle:
          "Da paixão pela biologia à sala de aula — uma trajetória de recomeço pela educação.",
        author: "Jenyfer Ferreira da Silva",
        page: "Página 10",
      },
    ],
  },
  {
    category: "Bio em Ação",
    description: "Projetos, pesquisas, práticas formativas e experiências desenvolvidas no IFG.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path d="M12 3c3 0 6 2 6 5 0 4-3 7-6 10-3-3-6-6-6-10 0-3 3-5 6-5Z" strokeLinejoin="round" />
        <path d="M8 13c1 1 2 2 4 2s3-1 4-2" strokeLinecap="round" />
      </svg>
    ),
    items: [
      {
        title: "PIBIC — Programa Institucional de Bolsas de Iniciação Científica",
        subtitle: '"Boa noite, Cinderela": substâncias facilitadoras de crimes.',
        author: "Estefânia Silva França",
        page: "Página 13",
      },
      {
        title: "Botânica ao alcance",
        subtitle:
          "Pesquisa, iniciação tecnológica e o universo vegetal ao alcance dos estudantes.",
        author: "Natália Costa da Silva",
        page: "Página 15",
      },
      {
        title: "PIBID: aprendendo a ser professor na prática",
        subtitle: "Como funciona o PIBID? A experiência na visão dos licenciandos.",
        author: "Anna Júlya Pereira Miranda",
        page: "Página 17",
      },
      {
        title: "Aprender fazendo: a formação docente na prática",
        subtitle: "Embriologia na prática.",
        author: "Yasmim Cristina de Aquino Rocha",
        page: "Página 20",
      },
      {
        title: "Trabalho de Conclusão de Curso",
        subtitle: "O papel do TCC na formação acadêmica dos estudantes do IFG.",
        author: "Estefânia Silva França",
        page: "Página 22",
      },
      {
        title: "Quando aprender vai além da sala de aula",
        subtitle: "Vivência que transforma.",
        author: "Yasmim Cristina de Aquino Rocha",
        page: "Página 24",
      },
      {
        title: "Laboratório de aulas-teste: quando o licenciando assume o papel de professor",
        author: "Jenyfer Ferreira da Silva",
        page: "Página 27",
      },
      {
        title: "Promotoras Legais Populares",
        subtitle:
          "As PLPs em Águas Lindas — a experiência de uma cursista — em memória de Rosa Maria — trajetória que transforma.",
        author: "Anna Júlya Pereira Miranda",
        page: "Página 29",
      },
    ],
  },
  {
    category: "Arte & Ciência",
    description: "Expressões visuais e experiências que aproximam produção artística e conhecimento científico.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path d="M5 19V9l7-4 7 4v10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 19v-5h8v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      {
        title: "Biologia através das lentes",
        subtitle: "I Concurso de Fotografia Científica — Projeto LABIO | CA de Biologia — IFG.",
        author: "Rebeca Cardoso Feitosa",
        page: "Página 36",
      },
    ],
  },
  {
    category: "Memória & Identidade",
    description: "Relatos e trajetórias de pessoas que ajudam a construir a história do câmpus.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path d="M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        <path d="M8 9h8M8 13h5" strokeLinecap="round" />
      </svg>
    ),
    items: [
      {
        title: "Fala, egresso!",
        subtitle:
          "Quem passou pelo câmpus tem muito a dizer. Histórias de quem construiu sua trajetória aqui.",
        author: "Natália Costa da Silva",
        page: "Página 37",
      },
    ],
  },
];

export default function Edicao01() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#faf7f2_0%,_#f7f2e8_100%)] text-[#0b2f5f]">
      <header className="border-b border-[#e8dfd0] bg-[#fcfaf7]/90 px-4 py-5 shadow-[0_8px_30px_rgba(11,47,95,0.04)] backdrop-blur-sm sm:px-6 lg:px-8 lg:py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="min-w-0">
            <h1 className="text-2xl font-bold tracking-tight text-[#0b2f5f] sm:text-3xl">
              PEQUI — Revista de Divulgação Científica
            </h1>
          </Link>

          <nav className="hidden gap-6 text-sm font-semibold uppercase tracking-[0.25em] md:flex">
            <Link className="relative pb-1 text-[#0b2f5f] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0b7c65] after:transition-all after:duration-300 hover:text-[#0b7c65] hover:after:w-full" href="/">
              Início
            </Link>
            <Link className="relative pb-1 text-[#0b2f5f] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0b7c65] after:transition-all after:duration-300 hover:text-[#0b7c65] hover:after:w-full" href="/sobre">
              Sobre
            </Link>
            <Link className="relative pb-1 font-bold text-[#0b7c65] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#0b7c65]" href="/edicoes/01">
              Edição 01
            </Link>
            <Link className="relative pb-1 text-[#0b2f5f] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0b7c65] after:transition-all after:duration-300 hover:text-[#0b7c65] hover:after:w-full" href="/equipe">
              Equipe
            </Link>
            <Link className="relative pb-1 text-[#0b2f5f] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0b7c65] after:transition-all after:duration-300 hover:text-[#0b7c65] hover:after:w-full" href="/contato">
              Contato
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#0b7c65]">
            1ª Edição • 2026
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-[1.15] text-[#0b2f5f] sm:text-5xl">
            Revista PEQUI — Edição Inaugural
          </h2>
          <p className="mb-8 max-w-2xl text-lg leading-8 text-[#24364f]">
            A primeira edição da Revista PEQUI reúne histórias, projetos e experiências que revelam como o ensino, a pesquisa e a extensão produzem conhecimento e transformam a realidade no IFG – Câmpus Águas Lindas de Goiás.
          </p>

          <div className="flex flex-wrap gap-4">
            <a className="rounded-full bg-[#0b2f5f] px-6 py-3 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5" href="#">
              Ler edição online
            </a>
            <a className="rounded-full border border-[#0b2f5f] px-6 py-3 font-semibold transition-transform duration-200 hover:-translate-y-0.5" href="#">
              Baixar PDF
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e8dfd0] bg-[#fcfaf7] p-6 shadow-[0_20px_60px_rgba(11,47,95,0.08)] sm:p-8">
          <div className="flex items-center justify-center rounded-[1.5rem] bg-white/70 p-2">
            <img
              src="/CAPA.jpg"
              alt="Capa da primeira edição da Revista PEQUI"
              className="w-full max-w-[92%] rounded-[1.25rem] object-contain shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[#e8dfd0] bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto flex max-w-6xl flex-col px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#0b7c65]">
              Nesta edição
            </p>
            <h3 className="text-3xl font-bold leading-tight text-[#0b2f5f] sm:text-4xl">
              Conheça as matérias que compõem a edição inaugural da Revista PEQUI.
            </h3>
          </div>

          <div className="mt-10 space-y-7">
            {sections.map((section) => (
              <div key={section.category}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d2c4] bg-[#f7f2e8] text-[#0b7c65]">
                    {section.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold uppercase tracking-[0.25em] text-[#0b7c65]">
                      {section.category}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-[#24364f]">
                      {section.description}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {section.items.map((item) => {
                    const isSingle = section.items.length === 1;
                    const isTargetMatter =
                      item.title === "O que é um projeto de extensão? Por que PEQUI?";
                    const card = (
                      <article
                        className={`flex h-full cursor-pointer flex-col rounded-[1.2rem] border border-[#e8dfd0] bg-[#fcfaf7] p-4 shadow-[0_8px_20px_rgba(11,47,95,0.05)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#dcecff] hover:shadow-[0_12px_28px_rgba(11,47,95,0.1)] ${isSingle ? "md:mx-auto md:w-[78%]" : ""}`}
                      >
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <h5 className="text-[1.025rem] font-semibold leading-7 text-[#0b2f5f]">
                            {item.title}
                          </h5>
                          <span className="rounded-full bg-[#eaf3ff] px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#174b8a]">
                            {item.page.replace("Página ", "Pág. ")}
                          </span>
                        </div>
                        {item.subtitle ? (
                          <p className="mb-3 text-sm leading-7 text-[#24364f]">
                            {item.subtitle}
                          </p>
                        ) : null}
                        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[#e8dfd0] pt-2.5 text-sm text-[#24364f]">
                          <div>
                            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#0b7c65]">
                              Autoria
                            </span>
                            <span>{item.author}</span>
                          </div>
                        </div>
                      </article>
                    );

                    if (isTargetMatter) {
                      return (
                        <Link
                          key={`${section.category}-${item.title}`}
                          href="/edicoes/01/o-que-e-um-projeto-de-extensao"
                          className="block h-full"
                        >
                          {card}
                        </Link>
                      );
                    }

                    return (
                      <div key={`${section.category}-${item.title}`} className="h-full">
                        {card}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.3rem] border border-[#e8dfd0] bg-[#fcfaf7] px-6 py-6 text-center shadow-[0_10px_24px_rgba(11,47,95,0.04)] sm:px-8 sm:py-7">
            <h3 className="text-2xl font-semibold text-[#0b2f5f] sm:text-[1.6rem]">
              Conheça a edição inaugural da Revista PEQUI
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-[#24364f] sm:text-lg">
              Leia gratuitamente a edição completa e descubra como estudantes e docentes transformam ensino, pesquisa e extensão em conhecimento acessível para toda a comunidade.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a className="rounded-full bg-[#0b2f5f] px-5 py-2.5 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5" href="#">
                Ler edição online
              </a>
              <a className="rounded-full border border-[#0b2f5f] px-5 py-2.5 font-semibold transition-transform duration-200 hover:-translate-y-0.5" href="#">
                Baixar PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
