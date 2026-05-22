import Contato from "./components/contato";
import Hero from "./components/hero";
import MeusProjetos from "./components/projetos";
import SobreMim from "./components/sobre-mim";

export default function Home() {
  return (
    <>
    <Hero />
    <SobreMim />
    <MeusProjetos />
    <Contato />
    </>
  );
}
