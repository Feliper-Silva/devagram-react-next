import Image from "next/image";

export const InputPublico = ({
  imagem,
  type,
  placeholder,
  value = "",
  exibirMensagemvalidacao = false,
  mensagemValidacao = "",
  alterarValor
}) => {
  return (
    <div className="inputPublicoContainer">
      <div className="inputPublico">
        <Image
          src={imagem}
          alt="imagem do campo"
          className="iconeInputPublico"
          width={20}
          height={20}
        />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={alterarValor}
        />
      </div>
      {exibirMensagemvalidacao && (
        <p className="mensagemValidacao">{mensagemValidacao}</p>
      )}
    </div>
  );
};
