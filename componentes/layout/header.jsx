import Image from "next/image";
import logoHeaderImg from "../../public/imagens/logoHeader.svg";
import lupaImg from "../../public/imagens/lupa.svg";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="headerPrincipal">
      <div className="conteudoHeaderPrincipal">
        <div className="logoHeaderPrincipal">
          <Image src={logoHeaderImg} alt="logo Devagram" layout="fill" />
        </div>
        <div className="barraPesquisa">
          <div className="containerImagemLupa">
            <Image src={lupaImg} alt="Lupa do pesquisar" layout="fill" />
          </div>
          <input
            type="text"
            placeholder="Pesquisar"
            value={""}
            onChange={() => console.log("pesquisando")}
          />
        </div>
        <Navbar className="desktop" />
      </div>
    </header>
  );
}
