import { useEffect, useState } from "react";
import Home from "../componentes/home";
import Login from "../componentes/login";
import UsuarioService from "../services/UsuarioService";

const usuarioService = new UsuarioService();

export default function Index() {
  const [autenticado, setAuthenticado] = useState(false);

  useEffect(() => {
    setAuthenticado(usuarioService.autenticado());
  }, []);
  if (autenticado) {
    return <Home />;
  }
  return (
    <>
      <Login
        afterAuthenticate={() => {
          setAuthenticado(true);
        }}
      />
    </>
  );
}
