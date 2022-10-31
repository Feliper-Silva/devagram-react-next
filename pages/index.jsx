import { Botao } from "../componentes/botao";

export default function Home() {
  return (
    <div>
      <h1>teste</h1>
      <Botao title={"Login"} manipularClique={() => console.log("clique")} />
    </div>
  );
}
