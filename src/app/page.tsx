
export default function Home() {
  return (
    <div className="">
      <div id="navbar" className="bg-black h-12">
        <div className="flex">
          <h1 className="text-white text-2xl p-2 ml-4">Logo</h1>
        </div>
      </div>
      <div id="body" className="m-32 mt-0">
        <div id="title" className="items-center flex justify-center">
          <span className="mr-2 w-8 h-8 bg-red-600 rounded-full mt-9"></span>
          <h1 className="text-5xl text-center mt-10 font-bold">Exame de sangue</h1>
          <span className="ml-2 w-8 h-8 bg-red-600 rounded-full mt-9"></span>
        </div>
        <div className="flex-col flex justify-center items-center mt-10">
          <p className="mb-9">O exame de sangue desempenha um papel crucial na prevenção, diagnóstico e tratamento de uma ampla gama de condições médicas.</p>
          <p>Veja um video para explicação rapida e pratica sobre o exame</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/HgNPdXTCXKQ?si=ic-mFvK_3UngnvIA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="flex ml-24 mt-16 items-center">
          <span className="ml-2 w-3 h-3 bg-red-600 rounded-full"></span>
          <h1 className="text-2xl ml-2 font-semibold">Sobre o exame</h1>
        </div>
        <div id="foto-exame" className="">
          <div className="flex justify-center mt-0">
            <p className="pl-24 text-lg mr-9 pt-8">O exame de sangue é uma ferramenta fundamental no campo da medicina, oferecendo insights valiosos sobre a saúde e o bem-estar do paciente. Este procedimento simples e amplamente utilizado fornece uma riqueza de informações que os profissionais de saúde podem usar para diagnosticar condições médicas, monitorar tratamentos e prevenir doenças.</p>
            <img src="https://beepsaude.com.br/wp-content/uploads/2021/06/como-fazer-exame-de-sangue-beep-saude-3.jpg"
              alt="Exame"
              className="max-w-lg h-80  mr-28 bg-cover" />
          </div>
        </div>
        <div id="texto2-imagem" className="m-24 mt-6 mb-10">
          <p className="text-lg">Durante o exame de sangue, uma pequena amostra de sangue é coletada geralmente de uma veia no braço do paciente. Essa amostra é então enviada para um laboratório, onde é analisada por técnicos especializados. Existem diferentes tipos de exames de sangue, e cada um pode fornecer informações específicas sobre a saúde do indivíduo.</p>
          <p className="text-lg">Esses átomos, quando expostos ao campo magnético, alinham-se em uma direção específica. Quando as ondas de rádio são desligadas, os átomos liberam energia e voltam ao seu estado original, produzindo sinais detectáveis ​​por antenas especiais. Esses sinais são processados por computadores para criar imagens detalhadas dos órgãos, músculos, ossos e outras estruturas internas.</p>
        </div>
        <hr className="w-full mb-6 border-black"></hr>
        <div className="flex justify-end items-center" id="titulo-tipos">
          <h1 className="text-2xl mr-3 font-semibold">Tipos comuns de exames de sangue</h1>
          <span className="mr-28 w-3 h-3 bg-red-600 rounded-full"></span>
        </div>
        <div id="textp-imagem2" className="flex ">
          <img src="https://bkt-sa-east-1-cms-drupal.s3.sa-east-1.amazonaws.com/laboratorioexame.com.br/styles/large/s3/2020-06/hemo.png?itok=QWtjwCSS"
            alt="Exame"
            className="max-w-lg h-96  pl-16 bg-cover mt-4" />
          <div className="flex flex-col ml-3 mt-6">
            <div className="flex items-start mb-4">
              <span className="mt-2 w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
              <p className="pl-2 text-lg">
                Hemograma Completo: Este exame avalia a contagem de glóbulos vermelhos, glóbulos brancos e plaquetas no sangue, fornecendo informações sobre a saúde geral do paciente.
              </p>
            </div>
            <div className="flex items-start mb-4">
              <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
              <p className="pl-2 text-lg">
                Perfil Lipídico: Avalia os níveis de colesterol e triglicerídeos no sangue, ajudando a avaliar o risco de doenças cardiovasculares.
              </p>
            </div>
            <div className="flex items-start mb-4">
              <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
              <p className="pl-2  text-lg">
                Glicemia: Mede os níveis de glicose no sangue, sendo útil no diagnóstico e monitoramento do diabetes.
              </p>
            </div>
            <div className="flex items-start mb-4">
              <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
              <p className="pl-2  text-lg">
                Perfil Hepático: Avalia a função do fígado, verificando os níveis de enzimas hepáticas e bilirrubina.
              </p>
            </div>
            <div className="flex items-start mb-4">
              <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
              <p className="pl-2  text-lg">
                Perfil Renal: Analisa a função dos rins, medindo os níveis de ureia, creatinina e eletrólitos no sangue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer>
          <div className="bg-black h-16 flex justify-center">
            <div className="flex justify-center items-center text-center">
              <p className="text-white text-center ">&copy; 2024 Tech do Bem. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>


    </div>
  );
}
