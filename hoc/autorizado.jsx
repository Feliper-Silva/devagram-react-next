import { useRouter } from "next/router";
import UsuarioService from "../services/UsuarioService";
import Header from "../componentes/layout/header.jsx";
import Footer from "../componentes/layout/footer";

const usuarioService = new UsuarioService();

export default function Autorizado(Componente) {
  // eslint-disable-next-line react/display-name
  return props => {
    const router = new useRouter();
    if (typeof window !== "undefined") {
      if (!usuarioService.autenticado()) {
        router.replace("/");
        return null;
      }

      return (
        <>
          <Header />
          <Componente {...props} />
          <Footer />
        </>
      );
    }
    return null;
  };
}
