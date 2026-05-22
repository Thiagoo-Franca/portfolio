import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-row items-center justify-center h-[80vh] gap-20">
            <div className="flex flex-col">
            <h1 className="text-5xl font-bold mb-4">Seja bem-vindo ao meu <span className="text-primary ">Portfólio</span></h1>
            <p className="text-lg text-muted-foreground mb-8">Conheca um pouco mais sobre meus projetos e minhas habilidades</p>

            <a href="#sobre-mim" className="px-6 py-3 bg-primary max-w-1/3 text-white rounded hover:bg-primary-dark transition duration-200 text-center">
                Saiba Mais
            </a>
            </div>
            <div className="flex flex-col items-end justify-end bg-blue-200 rounded rounded-lg">
            <Image src='/assets/heroImage.png' alt="hero image" width={400} height={300} />

            </div>
        </section>
    );
}