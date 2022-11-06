import { useRouter } from "next/router";
import UsuarioSevice from "../services/UsuarioService";

const usuarioSevice = new UsuarioSevice();

export default function Autorizado(Componente) {
  // eslint-disable-next-line react/display-name
  return props => {
    const router = useRouter();
    if (typeof window !== "undefined") {
      if (!usuarioSevice.autenticado()) {
        router.replace("/");
        return null;
      }

      return <Componente {...props} />;
    }
  };
}
