/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
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
      console.log(fileReader.result);
    };
  };
  return (
    <div
      className={`uploadImagemContainer ${className}`}
      onClick={abrirSeletorArquivos}
    >
      <button>Enviar imagem</button>
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
