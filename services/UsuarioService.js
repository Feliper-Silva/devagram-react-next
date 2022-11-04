import { Post } from "./HttpService";

export const PostCadastro = async dados => {
  return await Post("/cadastro", dados);
};
