import { InputPublico } from "../inputPublico";
import { Botao } from "../botao";
import { validarEmail, validarSenha } from "../../utils/validadores";

import emailImg from "../../public/imagens/email.svg";
import senhaImg from "../../public/imagens/senha.svg";
import logoImg from "../../public/imagens/logo.svg";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validarFormulario = () => {
    return validarEmail(email) && validarSenha(senha);
  };

  return (
    <section className={`paginaLogin paginaPublica`}>
      <div className="logoContainer">
        <Image
          src={logoImg}
          className="logo"
          alt="Logo Devagram"
          layout="fill"
        />
      </div>

      <div className="conteudoPaginaPublica">
        <form>
          <InputPublico
            imagem={emailImg}
            type="email"
            placeholder={`E-mail`}
            alterarValor={e => setEmail(e.target.value)}
            value={email}
            mensagemValidacao="O endereço informado é inválido!"
            exibirMensagemvalidacao={email && !validarEmail(email)}
          />
          <InputPublico
            imagem={senhaImg}
            type="password"
            placeholder={`Senha`}
            alterarValor={e => setSenha(e.target.value)}
            value={senha}
            mensagemValidacao="Precisa ter pelo menos 4 carácteres!"
            exibirMensagemvalidacao={senha && !validarSenha(senha)}
          />

          <Botao
            title={"Login"}
            type="submit"
            desabilitado={!validarFormulario()}
          />
        </form>
        <footer className="footerPaginaPublica">
          <p>Não possui conta?</p>
          <Link href="/cadastro">Faça seu cadastro agora!</Link>
        </footer>
      </div>
    </section>
  );
}
