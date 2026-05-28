"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/app/dev/components/header";
import Footer from "@/app/dev/components/footer";
import { ArrowLeft, Shield } from "lucide-react";

const LAST_UPDATED = "28 de maio de 2026";

const sections = [
  {
    id: "apresentacao",
    title: "Apresentação",
    content: (
      <p className="text-slate-600 leading-relaxed">
        Esta Política de Privacidade descreve como a DMTN Sistemas Ltda (CNPJ
        59.171.428/0001-40), com sede em
          R. General Mário Tourinho, 1746, Curitiba, PR, CEP 80740-000
        , coleta, usa, compartilha e protege seus dados pessoais, em
        conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
      </p>
    ),
  },
  {
    id: "quais-dados-coletamos",
    title: "Quais dados coletamos",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Coletamos os seguintes dados quando você interage com nossos canais:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
          <li>
            <strong>Por formulários de contato e campanhas de marketing:</strong>{" "}
            nome, e-mail, telefone, nome da empresa, informações sobre seu
            projeto (serviço de interesse, orçamento, prazo).
          </li>
          <li>
            <strong>Automaticamente, via cookies e ferramentas analíticas:</strong>{" "}
            endereço IP, tipo de navegador, páginas visitadas, tempo de
            permanência.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "para-que-usamos",
    title: "Para que usamos seus dados",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Utilizamos seus dados exclusivamente para:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
          <li>
            Entrar em contato sobre o projeto/serviço que você nos solicitou.
          </li>
          <li>
            Enviar propostas comerciais e materiais informativos relacionados ao
            seu interesse declarado.
          </li>
          <li>Cumprir obrigações legais e fiscais.</li>
          <li>Melhorar nossos serviços e atendimento.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          Não utilizamos seus dados para fins não relacionados ao contato
          comercial solicitado.
        </p>
      </div>
    ),
  },
  {
    id: "compartilhamento",
    title: "Compartilhamento de dados",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Seus dados podem ser compartilhados com:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
          <li>
            <strong>Amazon Web Services (AWS) e Vercel:</strong>{" "}
            hospedagem e processamento de dados.
          </li>
          <li>
            <strong>Amazon SES:</strong>{" "}
            envio de e-mails transacionais e de marketing.
          </li>
          <li>
            <strong>Meta (Facebook/Instagram/WhatsApp Business):</strong>{" "}
            campanhas publicitárias, formulários de captação de leads e
            atendimento via WhatsApp.
          </li>
          <li>
            <strong>Google (Analytics e Ads):</strong>{" "}
            análise de tráfego e remarketing.
          </li>
          <li>
            <strong>Anthropic:</strong>{" "}
            processamento por inteligência artificial em algumas funcionalidades
            de atendimento e análise de documentos.
          </li>
          <li>Autoridades públicas, quando exigido por lei.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          Cada operador é contratualmente obrigado a tratar seus dados conforme a
          LGPD.
        </p>
        <p className="text-slate-600 leading-relaxed font-medium">
          NÃO comercializamos, alugamos ou cedemos seus dados a terceiros para
          fins de marketing de terceiros.
        </p>
      </div>
    ),
  },
  {
    id: "armazenamento",
    title: "Por quanto tempo armazenamos",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Mantemos seus dados pelo tempo necessário para a finalidade declarada:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
          <li>
            Leads que não converteram em contrato: até 24 meses
            
            após o último contato.
          </li>
          <li>
            Clientes ativos: durante toda a vigência do contrato e pelo prazo
            legal de retenção após o término (5 anos para fins fiscais, conforme
            legislação aplicável).
          </li>
          <li>Após o prazo, os dados são anonimizados ou excluídos.</li>
        </ul>
        
      </div>
    ),
  },
  {
    id: "direitos",
    title: "Seus direitos como titular",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Conforme a LGPD, você pode a qualquer momento solicitar:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
          <li>Confirmação da existência de tratamento dos seus dados</li>
          <li>Acesso aos dados que temos sobre você</li>
          <li>Correção de dados incompletos ou desatualizados</li>
          <li>Anonimização, bloqueio ou eliminação dos dados</li>
          <li>Portabilidade dos dados a outro fornecedor</li>
          <li>Revogação do consentimento (opt-out)</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          Para exercer qualquer um desses direitos, envie um e-mail para{" "}
            ryan@dmtn.com.br
          indicando sua solicitação. Responderemos em até 15 dias.
        </p>
      </div>
    ),
  },
  {
    id: "seguranca",
    title: "Segurança",
    content: (
      <p className="text-slate-600 leading-relaxed">
        Adotamos medidas técnicas e administrativas para proteger seus dados,
        incluindo criptografia em trânsito (HTTPS/TLS), controle de acesso,
        backups regulares e monitoramento de incidentes. Em caso de incidente de
        segurança que afete seus dados, notificaremos você e a ANPD conforme
        exigido por lei.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Nosso site utiliza cookies essenciais para o funcionamento básico e
          cookies não-essenciais para análise de tráfego (Google Analytics),
          remarketing (Google Ads) e acompanhamento de conversões (Meta Pixel).
        </p>
        <p className="text-slate-600 leading-relaxed">
          Conforme a LGPD (Art. 8º), cookies de marketing e remarketing só são
          ativados após o seu consentimento explícito, coletado por meio do
          banner de cookies exibido na sua primeira visita ao site. Você pode
          revogar esse consentimento a qualquer momento através do mesmo banner
          ou limpando os cookies do navegador.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Cookies essenciais (necessários para navegação e segurança) não
          requerem consentimento e permanecem ativos.
        </p>
      </div>
    ),
  },
  {
    id: "dpo",
    title: "Encarregado de Dados (DPO)",
    content: (
      <p className="text-slate-600 leading-relaxed">
        Em conformidade com o Art. 41 da LGPD, nosso Encarregado pelo Tratamento
        de Dados Pessoais é Ryan D`Oliveira Lopes Figueredo, contato: ryan@dmtn.com.br
      </p>
    ),
  },
  {
    id: "atualizacoes",
    title: "Atualizações desta política",
    content: (
      <p className="text-slate-600 leading-relaxed">
        Esta política pode ser atualizada periodicamente. A versão vigente está
        sempre disponível nesta página. Última atualização:{" "}
        <span className="bg-amber-100 text-amber-800 px-1 rounded font-medium">
          28/05/2026
        </span>
        .
      </p>
    ),
  },
];

export default function PrivacidadeContent() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="bg-[#0F1629] pt-28">
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.06] text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-5">
              LGPD
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-white mb-5">
              Política de Privacidade
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Saiba como a DMTN Sistemas coleta, usa e protege seus dados
              pessoais, em conformidade com a Lei Geral de Proteção de Dados.
            </p>
            <p className="text-sm text-slate-500 mt-6">
              Atualizada em {LAST_UPDATED}
            </p>
          </motion.div>
        </div>
        <svg
          className="w-full block -mb-px"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
        >
          <path
            d="M0,0 C360,60 1080,60 1440,0 L1440,80 L0,80 Z"
            fill="#FAFAF8"
          />
        </svg>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-8 sm:p-10 space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-grotesk font-bold text-[#0F1629]">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-11">{section.content}</div>
              </motion.div>
            ))}
          </div>

      
        </div>
      </section>

      {/* Footer */}
      <div className="bg-[#0F1629]">
        <svg
          className="w-full block bg-[#FAFAF8] -mb-px"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
        >
          <path
            d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z"
            fill="#0F1629"
          />
        </svg>
        <Footer />
      </div>
    </div>
  );
}
