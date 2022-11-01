import { useState, useRef } from "react";
import { Avatar } from "../componentes/avatar";
import { Botao } from "../componentes/botao";
import { UploadImagem } from "../componentes/uploadImagem";

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const refInput = useRef(null);

  console.log(imagem);
  return (
    <>
      <h1>teste</h1>
      <Avatar />
      <button onClick={() => refInput?.current?.click()}>clique</button>
      <UploadImagem
        setImagem={setImagem}
        imagemPreview={imagem?.preview}
        aoSetarReferencia={ref => (refInput.current = ref)}
      />
      <Botao
        title={"Login"}
        color={"invertido"}
        desabilitado={false}
        manipularClique={() => console.log("clique")}
      />
    </>
  );
}
