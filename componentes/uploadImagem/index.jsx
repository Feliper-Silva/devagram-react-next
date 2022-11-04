import { useRef, useEffect } from "react";

export const UploadImagem = ({
  className = "",
  setImagem,
  imagemPreview,
  imagemPreviewClassName = "",
  aoSetarReferencia
}) => {
  const refInput = useRef(null);

  useEffect(() => {
    if (!aoSetarReferencia) {
      return;
    }
    aoSetarReferencia(refInput?.current);
  }, [refInput?.current]);

  const abrirSeletorArquivos = () => {
    refInput?.current?.click();
  };

  const alterarImagem = () => {
    if (!refInput?.current?.files?.length) {
      return;
    }
    const arquivo = refInput?.current?.files[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(arquivo);
    fileReader.onloadend = () => {
      setImagem({
        preview: fileReader.result,
        arquivo
      });
    };
  };
  return (
    <div
      className={`uploadImagemContainer ${className}`}
      onClick={abrirSeletorArquivos}
    >
      {imagemPreview && (
        <div className="imagemPreviewContainer">
          <img
            src={imagemPreview}
            alt="preview imagem"
            className={imagemPreviewClassName}
          />
        </div>
      )}
      <input
        type="file"
        className="oculto"
        accept="image/*"
        ref={refInput}
        onChange={alterarImagem}
      />
    </div>
  );
};
