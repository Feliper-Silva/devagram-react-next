import DevagramApiService from "./DevagramApiService";

export default class UsuarioService extends DevagramApiService {
  async cadastro(dados) {
    return this.post("/cadastro", dados);
  }

  async login(credenciais) {
    const { data } = await this.post("/login", credenciais);

    localStorage.setItem("nome", data.nome);
    localStorage.setItem("email", data.email);
    localStorage.setItem("token", data.token);

    const usuario = await this.get("/usuario");
    localStorage.setItem("id", usuario.data._id);

    if (usuario.data.avatar) {
      localStorage.setItem("avatar", usuario.data.avatar);
    }
  }

  autenticado() {
    return localStorage.getItem("token") !== null;
  }
}
