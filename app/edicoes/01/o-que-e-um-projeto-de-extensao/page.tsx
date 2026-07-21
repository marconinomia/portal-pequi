import ArticleTemplate from "@/app/components/ArticleTemplate";
import type { ReactNode } from "react";

const content: ReactNode = (
  <>
    <h3 id="o-que-e-um-projeto-de-extensao" className="text-2xl font-semibold text-[#0b2f5f]">O que é um projeto de extensão?</h3>
    <p>
      Os projetos de extensão são iniciativas desenvolvidas pelas instituições de ensino com o objetivo de aproximar a comunidade acadêmica da sociedade. Mais do que atividades complementares, eles representam uma via de troca de conhecimentos, em que estudantes e professores colocam em prática o que é produzido dentro da instituição, ao mesmo tempo em que dialogam com a realidade ao seu redor.
    </p>
    <p>
      Nesse contexto, a Revista PEQUI surge como um exemplo concreto de projeto de extensão. A iniciativa partiu do professor Marco Ninomia que, junto a outros docentes do Câmpus, convidou os estudantes Kauan Costa, Natália Costa e Yasmim Rocha para integrarem a equipe do projeto.
    </p>
    <p>
      A revista tem como objetivo a divulgação científica e acadêmica, buscando dar visibilidade a artigos, pesquisas e projetos desenvolvidos no Câmpus, além de fortalecer a produção intelectual local e incentivar a participação da comunidade acadêmica.
    </p>
    <p>
      A proposta é lançar diferentes edições da revista, ampliando a divulgação das atividades realizadas no Instituto Federal de Goiás – Câmpus Águas Lindas de Goiás.
    </p>

    <div id="producao-coletiva" className="rounded-[1.2rem] border border-[#e8dfd0] bg-[#f8f4eb] p-5 shadow-[0_8px_20px_rgba(11,47,95,0.04)]">
      <h4 className="mb-2 text-xl font-semibold text-[#0b2f5f]">Produção coletiva</h4>
      <p>
        Além da participação de discentes e docentes no projeto, foi formada uma equipe editorial composta por outros estudantes, responsáveis por contribuir com a escrita e a organização das matérias. Essa colaboração foi essencial para a construção e a qualidade do trabalho final, fortalecendo o caráter coletivo da produção científica.
      </p>
    </div>

    <h3 id="mas-por-que-pequi" className="pt-2 text-2xl font-semibold text-[#0b2f5f]">Mas por que PEQUI?</h3>
    <p>
      O nome da revista carrega, ao mesmo tempo, identidade e propósito. Além de ser um acrônimo para Pesquisa, Educação, Qualidade e Inovação, o termo “pequi” foi escolhido por seu forte valor simbólico.
    </p>
    <p>
      Fruto típico do Cerrado brasileiro, o pequi está profundamente enraizado na cultura e na paisagem de Goiás. Sua árvore, resistente e marcante, está presente em grande parte do território goiano, tornando-se um elemento que representa pertencimento, tradição e identidade regional.
    </p>
    <p>
      Ao adotar esse nome, a revista busca refletir essa conexão com o território e com as pessoas que o constroem: estudantes, professores e a comunidade de Águas Lindas e região. Assim como o pequi é um símbolo do Cerrado, a Revista PEQUI se propõe a ser um espaço de expressão, valorização e difusão do conhecimento produzido localmente.
    </p>

    <blockquote className="border-l-4 border-[#0b7c65] pl-5 text-xl font-medium italic text-[#0b2f5f]">
      Assim como o pequi representa o Cerrado, a Revista PEQUI busca representar o conhecimento produzido no IFG e sua conexão com a comunidade.
    </blockquote>
  </>
);

export default function MateriaProjetoExtensao() {
  return (
    <ArticleTemplate
      category="Apresentação"
      title="O que é um projeto de extensão? Por que PEQUI?"
      summary="A Revista PEQUI nasceu como um projeto de extensão destinado a aproximar a produção científica e acadêmica do IFG da comunidade, valorizando o conhecimento construído por estudantes e docentes do Câmpus Águas Lindas de Goiás."
      author="Kauan Costa dos Santos"
      edition="01"
      year="2026"
      page="05"
      readTime="4 min"
      imageAlt="Imagem de destaque da matéria"
      imageCaption="Equipe responsável pela construção da primeira edição da Revista PEQUI."
      imageCredit="Foto: acervo do projeto."
      content={content}
      previousHref={undefined}
      nextLabel="Nosso Câmpus em Foco"
      nextCategory="Apresentação"
      nextHref="/edicoes/01/nosso-campus-em-foco"
      relatedItems={[
        {
          category: "Nosso Câmpus em Foco",
          title: "Nosso Câmpus em Foco",
          page: "08",
          href: "/edicoes/01",
        },
        {
          category: "Bio em Ação",
          title: "Botânica ao alcance",
          page: "15",
          href: "/edicoes/01",
        },
        {
          category: "Arte & Ciência",
          title: "Biologia através das lentes",
          page: "36",
          href: "/edicoes/01",
        },
      ]}
    />
  );
}
