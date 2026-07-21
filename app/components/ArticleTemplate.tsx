"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ArticleReadingIndex from "./ArticleReadingIndex";
import ArticleShareButtons from "./ArticleShareButtons";

export type ArticleTemplateProps = {
  category: string;
  title: string;
  summary?: string;
  author: string;
  edition: string;
  year: string;
  page: string;
  readTime?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageCredit?: string;
  content: ReactNode;
  previousLabel?: string;
  previousHref?: string;
  nextLabel?: string;
  nextHref?: string;
  nextCategory?: string;
  relatedItems?: Array<{
    category: string;
    title: string;
    page: string;
    href: string;
  }>;
};

export default function ArticleTemplate({
  category,
  title,
  summary,
  author,
  edition,
  year,
  page,
  readTime = "4 min",
  imageSrc = "/CAPA.jpg",
  imageAlt = "Imagem de destaque da matéria",
  imageCaption = "Equipe responsável pela construção da primeira edição da Revista PEQUI.",
  imageCredit = "Foto: acervo do projeto.",
  content,
  previousLabel = "Matéria anterior",
  previousHref,
  nextLabel = "Próxima matéria",
  nextHref,
  nextCategory,
  relatedItems = [],
}: ArticleTemplateProps) {
  const editorialItems = [
    { label: "O que é um projeto de extensão?", active: true },
    { label: "Nosso Câmpus em Foco", active: false },
    { label: "Figuras do nosso Câmpus", active: false },
    { label: "Botânica ao alcance", active: false },
    { label: "Biologia através das lentes", active: false },
  ];

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

      <section className="mx-auto flex max-w-6xl flex-col px-5 py-14 sm:px-8 sm:py-16 lg:px-8 lg:py-20">
        <style jsx global>{`
          .article-body > p {
            margin-bottom: 1.1rem;
          }

          .article-body > p:first-of-type::first-letter {
            float: left;
            font-size: 2.75rem;
            line-height: 0.8;
            margin-right: 0.45rem;
            margin-top: 0.2rem;
            padding-top: 0.1rem;
            color: #0b2f5f;
            font-weight: 700;
          }

          .article-body a {
            color: #174b8a;
            text-decoration: underline;
            text-underline-offset: 0.2em;
          }

          .article-body h3 {
            margin-top: 2.4rem;
            margin-bottom: 0.7rem;
            font-size: 1.42rem;
            line-height: 1.35;
            font-weight: 600;
            letter-spacing: -0.01em;
            color: #0b2f5f;
          }

          .article-body blockquote {
            margin: 1.6rem 0 1.4rem;
            border-left: 3px solid #0b7c65;
            padding: 0.25rem 0 0.25rem 1rem;
            font-size: 1.12rem;
            line-height: 1.8;
            font-style: italic;
            color: #0b2f5f;
          }

          .article-callout {
            margin: 1.5rem 0;
            border: 1px solid #e8dfd0;
            border-radius: 1rem;
            background: linear-gradient(135deg, #f8f4eb 0%, #fcfaf7 100%);
            padding: 0.95rem 1rem;
            box-shadow: 0 6px 16px rgba(11, 47, 95, 0.03);
          }

          .article-callout h4 {
            margin-bottom: 0.35rem;
            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.24em;
            color: #0b7c65;
          }

          .article-callout p {
            margin: 0;
            color: #24364f;
            line-height: 1.75;
          }

          .article-subtitle {
            margin-top: 2.2rem;
            margin-bottom: 0.7rem;
            font-size: 1.24rem;
            line-height: 1.35;
            font-weight: 600;
            color: #0b2f5f;
          }
        `}</style>
        <nav className="mb-7 text-sm font-medium uppercase tracking-[0.25em] text-[#0b7c65] sm:mb-8">
          <Link className="transition-colors hover:text-[#0b2f5f]" href="/">
            Início
          </Link>
          <span className="mx-2 text-[#24364f]">/</span>
          <Link className="transition-colors hover:text-[#0b2f5f]" href="/edicoes/01">
            Edição 01
          </Link>
          <span className="mx-2 text-[#24364f]">/</span>
          <span className="text-[#24364f]">{category}</span>
        </nav>

        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:gap-12">
          <div className="flex-1">
            <div className="mb-4 inline-flex rounded-full border border-[#d8d2c4] bg-[#f7f2e8] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#0b7c65] sm:mb-5">
              {category.toUpperCase()}
            </div>

            <h2 className="mb-4 text-3xl font-bold leading-[1.15] text-[#0b2f5f] sm:mb-5 sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            {summary ? (
              <p className="mb-6 max-w-3xl text-[1.02rem] leading-8 text-[#24364f] sm:text-lg">{summary}</p>
            ) : null}

            <div className="mb-7 space-y-2 text-[1rem] text-[#24364f] sm:mb-8 sm:text-lg">
              <p className="font-semibold text-[#0b2f5f]">{author}</p>
              <p className="text-sm uppercase tracking-[0.25em] text-[#0b7c65] sm:text-base">
                Edição {edition} • {year} • Página {page}
              </p>
            </div>

            <div className="mb-6 overflow-hidden rounded-[1rem] border border-[#e8dfd0] bg-[#f7f2e8] shadow-[0_4px_12px_rgba(11,47,95,0.025)] sm:mb-7">
              <div className="flex aspect-[16/9] w-full items-center justify-center bg-[linear-gradient(135deg,_#edf5ff_0%,_#f7f2e8_100%)] p-1 text-center sm:p-1.5">
                {imageSrc ? (
                  <Image src={imageSrc} alt={imageAlt} width={1200} height={675} className="h-full w-full rounded-[0.7rem] object-cover" />
                ) : (
                  <p className="text-lg font-medium text-[#174b8a]">{imageAlt}</p>
                )}
              </div>
              <div className="bg-white/70 px-4 py-3 text-left sm:px-5 sm:py-3.5">
                <p className="text-sm font-medium leading-6 text-[#0b2f5f]">{imageCaption}</p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.24em] text-[#174b8a]">{imageCredit}</p>
              </div>
            </div>

            <article className="article-body max-w-[44rem] space-y-7 text-[1rem] leading-8 text-[#24364f] sm:text-[1.02rem]">
              {content}
            </article>
          </div>

          <aside className="w-full max-w-full self-start rounded-[1.3rem] border border-[#e8dfd0] bg-[#fcfaf7] p-4 shadow-[0_10px_24px_rgba(11,47,95,0.05)] sm:p-5 lg:max-w-sm lg:sticky lg:top-6 lg:mt-2 lg:p-6">
            <h3 className="mb-3 text-[0.95rem] font-semibold uppercase tracking-[0.25em] text-[#0b7c65] sm:mb-4 sm:text-lg">
              Informações da matéria
            </h3>
            <dl className="space-y-3 text-sm leading-6 text-[#24364f]">
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0b7c65]">
                  Categoria
                </dt>
                <dd className="mt-1 font-medium text-[#0b2f5f]">{category}</dd>
              </div>
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0b7c65]">
                  Autoria
                </dt>
                <dd className="mt-1 font-medium text-[#0b2f5f]">{author}</dd>
              </div>
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0b7c65]">
                  Edição / Ano / Página
                </dt>
                <dd className="mt-1 font-medium text-[#0b2f5f]">
                  Edição {edition} • {year} • Página {page}
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0b7c65]">
                  Tempo estimado de leitura
                </dt>
                <dd className="mt-1 font-medium text-[#0b2f5f]">{readTime}</dd>
              </div>
            </dl>

            <div className="mt-5">
              <button
                type="button"
                aria-label="Baixar edição em PDF"
                className="flex w-full items-center justify-center rounded-full bg-[#0b2f5f] px-4 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b7c65] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfaf7]"
              >
                Baixar edição em PDF
              </button>
            </div>

            <div className="mt-6 rounded-[1rem] border border-[#e8dfd0] bg-white/70 p-4">
              <h4 className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#0b7c65]">
                Nesta edição
              </h4>
              <ul className="space-y-2 text-sm leading-6 text-[#24364f]">
                {editorialItems.map((item) => (
                  <li
                    key={item.label}
                    className={`rounded-full px-3 py-2 ${item.active ? "border-l-2 border-[#0b7c65] bg-white/80 font-semibold text-[#174b8a]" : "bg-transparent text-[#24364f]"}`}
                  >
                    {item.active ? "✓ " : "• "}
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <ArticleReadingIndex />
          </aside>
        </div>

        <section className="mt-14 max-w-[44rem] rounded-[1.2rem] border border-[#e8dfd0] bg-white/80 p-5 shadow-[0_8px_18px_rgba(11,47,95,0.04)] sm:p-8">
          <h3 className="mb-3 text-xl font-semibold text-[#0b2f5f] sm:mb-4">Compartilhe esta matéria</h3>
          <ArticleShareButtons shareText={title} />
        </section>

        {relatedItems.length > 0 ? (
          <section className="mt-14">
            <h3 className="mb-4 text-2xl font-semibold text-[#0b2f5f] sm:mb-5">
              Continue explorando a Edição 01
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-[1.05rem] border border-[#e8dfd0] bg-[#fcfaf7] p-4 shadow-[0_6px_16px_rgba(11,47,95,0.04)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#dcecff] hover:shadow-[0_10px_22px_rgba(11,47,95,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b7c65] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf7f2]"
                >
                  <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#0b7c65]">
                    {item.category}
                  </p>
                  <h4 className="mb-2 text-[1.02rem] font-semibold text-[#0b2f5f]">{item.title}</h4>
                  <p className="text-sm font-medium text-[#24364f]">Kauan Costa dos Santos</p>
                  <p className="mt-2 text-sm text-[#24364f]">Página {item.page}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-12 flex flex-col gap-3 border-t border-[#e8dfd0] pt-7 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <button
            type="button"
            className="w-full rounded-full border border-[#d8d2c4] bg-white/70 px-4 py-2.5 text-left font-semibold text-[#24364f] sm:w-auto"
            disabled
          >
            ← Matéria anterior
          </button>

          <Link
            className="rounded-full border border-[#0b2f5f] px-4 py-2.5 text-center font-semibold text-[#0b2f5f] transition-transform duration-200 hover:-translate-y-0.5"
            href="/edicoes/01"
          >
            Voltar para a Edição 01
          </Link>

          {nextHref ? (
            <Link
              className="flex w-full items-center justify-between gap-3 rounded-full bg-[#0b2f5f] px-4 py-2.25 text-left font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b7c65] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf7f2] sm:w-auto"
              href={nextHref}
            >
              <span className="flex flex-col">
                <span className="text-[0.7rem] uppercase tracking-[0.24em] text-[#dcecff]">
                  Próxima matéria
                </span>
                <span className="text-sm">{nextLabel}</span>
                {nextCategory ? (
                  <span className="text-[0.72rem] font-medium text-[#dcecff]">{nextCategory}</span>
                ) : null}
              </span>
              <span className="text-lg">→</span>
            </Link>
          ) : null}
        </div>
      </section>
    </main>
  );
}
