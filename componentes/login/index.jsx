import { InputPublico } from "../inputPublico";
import { Botao } from "../botao";

import emailImg from "../../public/imagens/email.svg";
import senhaImg from "../../public/imagens/senha.svg";
import logoImg from "../../public/imagens/logo.svg";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <section className={`paginaLogin paginaPublica`}>
      <div className="logoContainer">
        <Image src={logoImg} alt="Logo Devagram" layout="fill" />
      </div>

      <div className="conteudoPaginaPublica">
        <form>
          <InputPublico
            imagem={emailImg}
            type="email"
            placeholder={`E-mail`}
            alterarValor={e => setEmail(e.target.value)}
            value={email}
          />
          <InputPublico
            imagem={senhaImg}
            type="password"
            placeholder={`Senha`}
            alterarValor={e => setSenha(e.target.value)}
            value={senha}
          />

          <Botao
            title={"Login"}
            type="submit"
            manipularClique={() => console.log("clicando")}
          />
        </form>
        <footer className="footerPaginaPublica">
          <p>Não possui conta?</p>
          <Link href="/cadastro">Faça seu cadastro agora!</Link>
        </footer>
      </div>
    </section>
  );
};
