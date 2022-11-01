import avatarImg from "../../public/imagens/avatar.svg";

export const Avatar = ({ src }) => {
  const getAvatar = () => {
    if (src && src !== undefined) {
      return src;
    }
    return avatarImg.src;
  };
  return <img src={getAvatar()} alt="Avatar" className="avatar" />;
};
