import Image from "next/image";

export default function Home() {
  return (
  <div className="min-h-screen w-full bg-zinc-700 flex ">
    <main className="flex flex-col w-full max-w-5xl py-10 px-6 bg-gray">
        <div className="flex flex-row items-start gap-10">

          <div className="flex-shrink-0">
            {/* lembrar de mudar a imagem */}
            <Image 
            className="rounded-xl shadow-md"
            src="/image.jpeg" 
            width={400} height={80} 
            alt="logo"  
            />
          </div>

          <div className="flex flex-col">
          
          <h1 className="text-6xl font-bold mb-4">
          André Neves
          </h1>
          
          <p className="text-gray-300 text-2xl leading-relaxed">
          Graduando em Ciência da Computação e estudante de CyberSec: Pentest e OSINT. 
          Malware dev tentando tomar ban em jogo online. 
          Gosto da cultura do Underground, conteúdos nichados, Old Tech e jogos de terror. 
          </p>
          
          </div>

        </div>
    </main>
  </div>  
  );
}
