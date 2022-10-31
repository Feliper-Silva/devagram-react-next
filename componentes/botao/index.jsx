export const Botao = ({
  title,
  type = "button",
  color = "primaria",
  desabilitado = false,
  manipularClique
}) => {
  return (
    <button
      type={type}
      className={`btn ${color}`}
      disabled={desabilitado}
      onClick={manipularClique}
    >
      {title}
    </button>
  );
};
