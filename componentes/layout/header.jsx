import Image from "next/image";
import { useState } from "react";
import logoHeaderImg from "../../public/imagens/logoHeader.svg";
import lupaImg from "../../public/imagens/lupa.svg";
import Navbar from "./navbar";
import ResultSearch from "./ResultSearch";

export default function Header() {
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
  const [termoPesquisado, setTermoPesquisado] = useState([]);

  const search = e => {
    setTermoPesquisado(e.target.value);
    //setResultadoPesquisa([]);
    if (termoPesquisado.length < 3) {
      return 
    }

    setResultadoPesquisa([
      {
        avatar: "",
        nome: "Felipe",
        email: "felipe@gmail.com",
        _id: "1"
      },
      {
        avatar: "",
        nome: "Antonio",
        email: "antonio@gmail.com",
        _id: "2"
      },
      {
        avatar: "",
        nome: "Raimundo",
        email: "raimundo@gmail.com",
        _id: "3"
      }
    ]);
  };
  const clickResultSearch = id => {
    console.log("click", { id });
  };
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
            value={termoPesquisado}
            onChange={search}
          />
        </div>
        <Navbar className="desktop" />
      </div>
      {resultadoPesquisa.length > 0 && (
        <div className="resultadoPesquisaContainer">
          {resultadoPesquisa.map(r => {
            <ResultSearch
              avatar={r.avatar}
              nome={r.nome}
              email={r.email}
              key={r._id}
              id={r._id}
              onClick={clickResultSearch}
            />;
          })}
        </div>
      )}
    </header>
  );
}
