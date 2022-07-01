<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "001",
          nome: "1984",
        },
        {
          id: "002",
          nome: "O avesso da pele",
        },
        {
          id: "003",
          nome: "Portland Trailblazers",
        },
        {
          id: "004",
          nome: "Denver Nuggets",
        },
        {
          id: "005",
          nome: "Minnesota Timberwolves",
        },
      ],
      novo_livro: "",
      novo_editoras: "esse",
    };
  },
  methods: {
    salvar() {
      if (this.novo_livro !== "") {
        const novo_id = uuidv4();
        this.livros.push({
          id: novo_id,
          nome: this.novo_livro,
          editoras: this.novo_editoras,
        });
        this.novo_livro = "";
      }
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de Livros</h2>
      </div>
      <div class="form-input">
        <input type="text" v-model="novo_livro" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-livros">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Livros</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="livro in livros" :key="livro.id">
              <td>{{ livro.id }}</td>
              <td>{{ livro.nome }}</td>
              <td>
                <button>Editar</button>
                <button @click="excluir(livro)">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>
.title {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.form-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.form-input input {
  width: 60%;
  height: 40px;
  border: 1px solid rgb(147, 147, 147);
  border-radius: 10px;
  padding: 0 10px;
}

.form-input button {
  margin-left: 1px;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  background-color: #004a85;
  font-weight: bold;
  color: black;
  cursor: pointer;
}

.list-livros {
  display: flex;
  justify-content: center;
}

.list-livros table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

table,
tr,
th,
td {
  border: 2px solid black;
  padding: 10px;
}
</style>
