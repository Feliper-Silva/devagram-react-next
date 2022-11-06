import Image from "next/image";
import homeAtivoImg from "../../public/imagens/homeAtivo.svg";
import homeCinzaImg from "../../public/imagens/homeCinza.svg";
import publicacaoAtivoImg from "../../public/imagens/pubicacaoAtivo.svg";
import publicacaoCinzaImg from "../../public/imagens/publicacaoCinza.svg";
import usuarioAtivoImg from "../../public/imagens/usuarioAtivo.svg";
import usuarioCinzaImg from "../../public/imagens/usuarioCinza.svg";

export default function Navbar({ className }) {
  return (
    <nav className={`barraNavegacao ${className}`}>
      <ul>
        <li>
          <Image
            src={homeAtivoImg}
            alt="ícone home"
            layout="fill"
            width={20}
            height={20}
          />
        </li>
        <li>
          <Image
            src={publicacaoCinzaImg}
            alt="ícone publicação "
            layout="fill"
            width={20}
            height={20}
          />
        </li>
        <li>
          <Image
            src={usuarioCinzaImg}
            alt="ícone usuario"
            layout="fill"
            width={20}
            height={20}
          />
        </li>
      </ul>
    </nav>
  );
}
