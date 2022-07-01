<script>
import {v4 as uuidv4} from "uuid";
export default {
  data() {
    return {
      editoras: [
        {
          id: "7332e932-7bc7-47e2-99d0-a2c9dc7b4d31",
          nome: "1984",
          editoras: "Antofágica",
        },
        {
          id: "72674295-4b5d-4668-8abc-c968a307c9fc",
          nome: "O avesso da pele",
          editoras: "Companhia das Letras",
        },
        {
          id: "64fe1b8c-12cb-4d94-9233-a56167aab6a7",
          nome: "1984",
          editoras: "Excelsior",
        },
        {
          id: "e33d09ba-8db8-4dd1-be14-0cea1ad9ac59",
          nome: "1984",
          editoras: "Tricaju",
        },
        {
          id: "7abaf6ba-6a70-4838-81d6-9d4eb40c0d34",
          nome: "1984",
          editoras: "Principis",
        },
      ],
      novo_editoras: "",
      novo_nome: "esse",
    };
  },
  methods: {
    salvar (){
      const novo_id = uuidv4();
      this.editoras.push({
        id: novo_id,
        nome: this.novo_editoras,
        editoras: this.novo_nome,
      }
      ) 
    }
  }
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de editoras</h2>
      </div>
      <div class="form-input">
        <input type="text" v-model="novo_editoras" />
        <button @click="salvar" >Salvar</button>
      </div>
      <div class="list-editoras">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Livro</th>
              <th>Editoras</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="editoras in editoras" :key="editoras.id">
              <td>{{ editoras.id }}</td>
              <td>{{ editoras.nome }}</td>
              <td>{{ editoras.editoras }}</td>
              <td>??</td>
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
  background-color: #0064bb;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}

.list-editoras {
  display: flex;
  justify-content: center;
}

.list-editoras table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

table tr td {
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}
</style>
