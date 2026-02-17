import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Breadcrumb -->
      <nav class="mb-8 text-sm text-gray-500">
        <a routerLink="/produtos" class="hover:text-violet-400 transition-colors">Produtos</a>
        <span class="mx-2">/</span>
        <a routerLink="/produtos/resultados-loteria-do-brasil" class="hover:text-violet-400 transition-colors">Resultados Loteria do Brasil</a>
        <span class="mx-2">/</span>
        <span class="text-gray-300">Privacidade</span>
      </nav>

      <div class="bg-gray-900 border border-gray-800 rounded-xl p-8 sm:p-12">
        <h1 class="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Política de Privacidade</h1>

        <div class="space-y-8 text-gray-300 leading-relaxed">
          <!-- Introdução -->
          <div>
            <p class="mb-3">
              <strong class="text-white">Solution in Code</strong> desenvolveu o aplicativo Resultados Loteria do Brasil
              como um aplicativo gratuito. Este aplicativo é fornecido pela Solution in Code sem nenhum custo. Mas tem a
              opção de compras dentro do aplicativo que permite remover os anúncios.
            </p>
            <p class="mb-3">
              Esta página é usada para informar os visitantes sobre nossas políticas de coleta, uso e divulgação de
              Informações Pessoais, caso alguém decida usar nosso Serviço.
            </p>
            <p class="mb-3">
              Se você optar por usar nosso Serviço, você concorda com a coleta e uso de informações em relação a esta
              política. As informações pessoais que coletamos são usadas para fornecer e melhorar o serviço. Não usaremos
              ou compartilharemos suas informações com ninguém, exceto conforme descrito nesta Política de Privacidade.
            </p>
            <p>
              Os termos utilizados nesta Política de Privacidade têm os mesmos significados dos nossos Termos e Condições,
              que podem ser acessados na Resultados Loteria do Brasil, a menos que definido de outra forma nesta Política
              de Privacidade.
            </p>
          </div>

          <!-- Coleta e uso de informações -->
          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Coleta e uso de informações</h2>
            <p class="mb-3 font-semibold text-amber-300/90">
              Este aplicativo não é afiliado a nenhuma entidade governamental e não representa o governo do Brasil. As
              informações fornecidas são baseadas em fontes públicas e oficiais
              (site oficial da <a target="_blank" href="https://caixa.gov.br/" class="text-violet-400 hover:underline">CAIXA</a>).
            </p>
            <p class="mb-3">
              Para uma melhor experiência, ao usar nosso Serviço, podemos exigir que você nos forneça certas informações
              de identificação pessoal. As informações que solicitamos serão retidas por nós e usadas conforme descrito
              nesta política de privacidade.
            </p>
            <p class="mb-3">
              O aplicativo usa serviços de terceiros que podem coletar informações usadas para identificá-lo.
            </p>
            <p class="mb-4">
              Link para a política de privacidade de provedores de serviços terceirizados usados pelo aplicativo.
            </p>
            <ul class="space-y-2 ml-4">
              <li>
                <a target="_blank" href="https://caixa.gov.br/" class="text-violet-400 hover:underline">Caixa do Brasil</a>
              </li>
              <li>
                <a target="_blank" href="https://policies.google.com/privacy" class="text-violet-400 hover:underline">Google Play Services</a>
              </li>
              <li>
                <a target="_blank" href="https://support.google.com/admob/answer/6128543?hl=pt" class="text-violet-400 hover:underline">AdMob</a>
              </li>
              <li>
                <a target="_blank" href="https://firebase.google.com/policies/analytics" class="text-violet-400 hover:underline">Google Analytics for Firebase</a>
              </li>
              <li>
                <a target="_blank" href="https://firebase.google.com/support/privacy/" class="text-violet-400 hover:underline">Firebase Crashlytics</a>
              </li>
            </ul>
          </div>

          <!-- Dados de log -->
          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Dados de log</h2>
            <p>
              Queremos informar que sempre que você utiliza o nosso Serviço, em caso de erro no aplicativo, coletamos
              dados e informações (por meio de produtos de terceiros) no seu telefone chamados Log Data. Esses dados de
              registro podem incluir informações como endereço de protocolo de Internet ('IP') do dispositivo, nome do
              dispositivo, versão do sistema operacional, configuração do aplicativo ao utilizar nosso serviço, hora e
              data de uso do serviço e outras estatísticas.
            </p>
          </div>

          <!-- Cookies -->
          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Cookies</h2>
            <p class="mb-3">
              Cookies são arquivos com uma pequena quantidade de dados que são comumente usados como identificadores
              exclusivos anônimos. Eles são enviados para o seu navegador a partir dos sites que você visita e são
              armazenados na memória interna do seu dispositivo.
            </p>
            <p>
              Este Serviço não usa esses 'cookies' explicitamente. No entanto, o aplicativo pode usar código de terceiros
              e bibliotecas que usam 'cookies' para coletar informações e melhorar seus serviços. Você tem a opção de
              aceitar ou recusar esses cookies e saber quando um cookie está sendo enviado para o seu dispositivo. Se você
              optar por recusar nossos cookies, pode não ser capaz de usar algumas partes deste Serviço.
            </p>
          </div>

          <!-- Provedores de serviço -->
          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Provedores de serviço</h2>
            <p class="mb-3">Podemos empregar empresas terceirizadas e indivíduos pelos seguintes motivos:</p>
            <ul class="list-disc ml-6 space-y-1 mb-3">
              <li>Para facilitar nosso serviço;</li>
              <li>Para fornecer o Serviço em nosso nome;</li>
              <li>Para executar serviços relacionados com o serviço; ou</li>
              <li>Para nos ajudar a analisar como nosso Serviço é usado.</li>
            </ul>
            <p>
              Queremos informar aos usuários deste serviço que esses terceiros têm acesso às suas informações pessoais.
              O motivo é realizar as tarefas atribuídas a eles em nosso nome. No entanto, eles são obrigados a não
              divulgar ou usar as informações para qualquer outra finalidade.
            </p>
          </div>

          <!-- Segurança -->
          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Segurança</h2>
            <p>
              Valorizamos sua confiança em nos fornecer suas informações pessoais, portanto, estamos nos empenhando para
              usar meios comercialmente aceitáveis de protegê-las. Mas lembre-se que nenhum método de transmissão pela
              internet, ou método de armazenamento eletrônico é 100% seguro e confiável, e não podemos garantir sua
              segurança absoluta.
            </p>
          </div>

          <!-- Links para outros sites -->
          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Links para outros sites</h2>
            <p>
              Este serviço pode conter links para outros sites. Se você clicar em um link de terceiros, você será
              direcionado a esse site. Observe que esses sites externos não são operados por nós. Portanto, recomendamos
              fortemente que você reveja a Política de Privacidade desses sites. Não temos controle e não assumimos
              responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de
              terceiros.
            </p>
          </div>

          <!-- Privacidade das crianças -->
          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Privacidade das crianças</h2>
            <p class="mb-3">
              Estes Serviços não se dirigem a ninguém com idade inferior a 13 anos. Não recolhemos intencionalmente
              informações de identificação pessoal de crianças com menos de 13 anos. No caso de descobrirmos que uma
              criança com menos de 13 anos nos forneceu informações pessoais, as eliminamos imediatamente dos nossos
              servidores. Se você é um pai ou responsável e está ciente de que seu filho nos forneceu informações
              pessoais, entre em contato para que possamos tomar as medidas necessárias.
            </p>
          </div>

          <!-- Mudanças -->
          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Mudanças nesta Política de Privacidade</h2>
            <p class="mb-3">
              Podemos atualizar nossa Política de Privacidade de tempos em tempos. Portanto, é aconselhável revisar esta
              página periodicamente para quaisquer alterações. Iremos notificá-lo de quaisquer alterações, publicando a
              nova Política de Privacidade nesta página.
            </p>
            <p>Esta política entra em vigor em 2020-12-10.</p>
          </div>

          <!-- Contato -->
          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Contate-Nos</h2>
            <p>
              Se você tiver dúvidas ou sugestões sobre nossa Política de Privacidade, não hesite em nos contatar em
              <a href="mailto:suporte@solutionincode.com" class="text-violet-400 hover:underline font-semibold">suporte&#64;solutionincode.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class PrivacyPolicyComponent {}
