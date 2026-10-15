import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RESULTADOS_LOTERIA } from './products';

// Mesmo texto da tela "Política de privacidade" do app (resultado-loteria-app,
// src/screens/privacy-policy-screen). Mudou lá, mude aqui também.
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <!-- Breadcrumb -->
      <nav class="mb-8 text-sm text-fg-muted" aria-label="Você está em">
        <a routerLink="/produtos" class="hover:text-accent-strong transition-colors">Produtos</a>
        <span class="mx-2">/</span>
        <a [routerLink]="app.pagina" class="hover:text-accent-strong transition-colors">{{ app.nome }}</a>
        <span class="mx-2">/</span>
        <span class="text-fg">Privacidade</span>
      </nav>

      <div class="flex items-center gap-4 mb-8">
        <img [src]="app.icone" alt="" class="w-14 h-14 shrink-0 rounded-xl" />
        <div>
          <h1 class="text-3xl sm:text-4xl font-bold text-fg">Política de Privacidade</h1>
          <p class="text-fg-muted">{{ app.nome }}</p>
        </div>
      </div>

      <div class="card p-6 sm:p-10 space-y-8 text-fg leading-relaxed">
        <div>
          <h2 class="text-lg font-bold mb-3">Sobre</h2>
          <p>
            Solution in Code desenvolveu o aplicativo Resultados Loteria do Brasil como um aplicativo gratuito. Este
            aplicativo é fornecido pela Solution in Code sem nenhum custo, mas possui a opção de compras dentro do
            aplicativo que permite remover os anúncios.
          </p>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-3">Coleta e uso de informações</h2>
          <p class="mb-3 font-medium bg-accent-soft rounded-lg p-4">
            Este aplicativo não é afiliado a nenhuma entidade governamental e não representa o governo do Brasil. As
            informações fornecidas são baseadas em fontes públicas e oficiais (site oficial da
            <a href="https://caixa.gov.br/" target="_blank" rel="noopener noreferrer" class="link">CAIXA</a>).
          </p>
          <p class="mb-3">
            Para uma melhor experiência, ao usar nosso Serviço, podemos exigir que você nos forneça certas informações
            de identificação pessoal. As informações que solicitamos serão retidas por nós e usadas conforme descrito
            nesta política de privacidade.
          </p>
          <p class="mb-3">
            O aplicativo usa serviços de terceiros que podem coletar informações usadas para identificá-lo. Links para
            políticas de privacidade dos provedores terceirizados:
          </p>
          <ul class="list-disc ml-6 space-y-1">
            @for (terceiro of terceiros; track terceiro.url) {
              <li>
                <a [href]="terceiro.url" target="_blank" rel="noopener noreferrer" class="link">{{ terceiro.nome }}</a>
              </li>
            }
          </ul>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-3">Dados de log</h2>
          <p>
            Sempre que você utiliza o nosso Serviço, em caso de erro no aplicativo, coletamos dados e informações (por
            meio de produtos de terceiros) no seu telefone chamados Log Data. Esses dados podem incluir informações como
            endereço IP do dispositivo, nome do dispositivo, versão do sistema operacional, configuração do aplicativo,
            hora e data de uso do serviço e outras estatísticas.
          </p>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-3">Cookies</h2>
          <p>
            Este Serviço não usa "cookies" explicitamente. No entanto, o aplicativo pode usar código de terceiros e
            bibliotecas que usam "cookies" para coletar informações e melhorar seus serviços. Você tem a opção de aceitar
            ou recusar esses cookies.
          </p>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-3">Provedores de serviço</h2>
          <p class="mb-3">Podemos empregar empresas terceirizadas e indivíduos pelos seguintes motivos:</p>
          <ul class="list-disc ml-6 space-y-1 mb-3">
            <li>Para facilitar nosso serviço</li>
            <li>Para fornecer o Serviço em nosso nome</li>
            <li>Para executar serviços relacionados</li>
            <li>Para nos ajudar a analisar como nosso Serviço é usado</li>
          </ul>
          <p>
            Esses terceiros têm acesso às suas informações pessoais para realizar tarefas em nosso nome, mas são
            obrigados a não divulgar ou usar as informações para qualquer outra finalidade.
          </p>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-3">Segurança</h2>
          <p>
            Valorizamos sua confiança em nos fornecer suas informações pessoais e estamos nos empenhando para usar meios
            comercialmente aceitáveis de protegê-las. No entanto, nenhum método de transmissão pela internet ou
            armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta.
          </p>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-3">Links para outros sites</h2>
          <p>
            Este serviço pode conter links para outros sites. Se você clicar em um link de terceiros, será direcionado a
            esse site. Esses sites externos não são operados por nós, portanto, recomendamos que você reveja a Política
            de Privacidade desses sites.
          </p>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-3">Privacidade das crianças</h2>
          <p>
            Estes Serviços não se dirigem a menores de 13 anos. Não coletamos intencionalmente informações de
            identificação pessoal de crianças com menos de 13 anos. Se descobrirmos que uma criança nos forneceu
            informações pessoais, as eliminaremos imediatamente dos nossos servidores.
          </p>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-3">Mudanças nesta Política</h2>
          <p class="mb-3">
            Podemos atualizar nossa Política de Privacidade periodicamente. É aconselhável revisar esta página para
            quaisquer alterações. Iremos notificá-lo de quaisquer mudanças publicando a nova Política de Privacidade
            nesta página.
          </p>
          <p class="text-sm text-fg-muted">Esta política entra em vigor em 10/12/2020</p>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-3">Contate-Nos</h2>
          <p>
            Se você tiver dúvidas ou sugestões sobre nossa Política de Privacidade, não hesite em nos contatar em
            <a href="mailto:suporte@solutionincode.com.br" class="link font-bold">suporte&#64;solutionincode.com.br</a>
          </p>
        </div>
      </div>
    </section>
  `,
})
export class PrivacyPolicyComponent {
  app = RESULTADOS_LOTERIA;

  terceiros = [
    { nome: 'Caixa do Brasil', url: 'https://caixa.gov.br/' },
    { nome: 'Google Play Services', url: 'https://policies.google.com/privacy' },
    { nome: 'AdMob', url: 'https://support.google.com/admob/answer/6128543?hl=pt' },
    { nome: 'Google Analytics for Firebase', url: 'https://firebase.google.com/policies/analytics' },
    { nome: 'Firebase Crashlytics', url: 'https://firebase.google.com/support/privacy/' },
  ];
}
