import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Botao } from "../../componentes/botao";
import { InputPublico } from "../../componentes/inputPublico";
import { UploadImagem } from "../../componentes/uploadImagem";

import logoImg from "../../public/imagens/logo.svg";
import usuarioAtivoImg from "../../public/imagens/usuarioAtivo.svg";
import emailImg from "../../public/imagens/email.svg";
import senhaImg from "../../public/imagens/senha.svg";
import avatarImg from "../../public/imagens/avatar.svg";

import {
  validarNome,
  validarEmail,
  validarSenha,
  validarConfirmacaoSenha
} from "../../utils/validadores";

export default function Cadastro() {
  const [imagem, setImagem] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const validarFormulario = () => {
    return (
      validarNome(nome) &&
      validarEmail(email) &&
      validarSenha(senha) &&
      validarConfirmacaoSenha(confirmaSenha)
    );
  };
  return (
    <>
      <section className={`paginaCadastro paginaPublica`}>
        <div className="logoContainer desktop">
          <Image
            src={logoImg}
            className="logo"
            alt="Logo Devagram"
            layout="fill"
          />
        </div>

        <div className="conteudoPaginaPublica">
          <form>
            <UploadImagem
              imagemPreviewClassName="avatar avatarPreview"
              imagemPreview={imagem?.preview || avatarImg.src}
              setImagem={setImagem}
            />
            <InputPublico
              imagem={usuarioAtivoImg}
              type="text"
              placeholder={`Nome Completo`}
              alterarValor={e => setNome(e.target.value)}
              value={nome}
              mensagemValidacao="Precisa ter pelo menos 3 carácteres!"
              exibirMensagemvalidacao={nome && !validarNome(nome)}
            />
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
            <InputPublico
              imagem={senhaImg}
              type="password"
              placeholder={`Confirmar senha`}
              alterarValor={e => setConfirmaSenha(e.target.value)}
              value={confirmaSenha}
              mensagemValidacao="As senhas não são iguais!"
              exibirMensagemvalidacao={
                confirmaSenha && !validarConfirmacaoSenha(senha, confirmaSenha)
              }
            />
            <Botao
              title="Cadastrar"
              type="submit"
              desabilitado={!validarFormulario()}
            />
          </form>
          <footer className="footerPaginaPublica">
            <p>Já possui uma conta?</p>
            <Link href="/">Faça seu login agora!</Link>
          </footer>
        </div>
      </section>
    </>
  );
}
