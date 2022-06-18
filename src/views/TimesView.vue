<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      times: [
        {
          id: "01986caa-0a42-4eef-9d11-25c77fd98df1",
          nome: "Boston Celtics",
          estadio: "TD Garden",
        },
        {
          id: "19be6257-67d9-413a-a0ff-840a8acaba75",
          nome: "Los Angeles Clippers",
          estadio: "Staples Center",
        },
        {
          id: "520465a6-36e2-4554-9499-d2ed6209b9e7",
          nome: "Portland Trailblazers",
          estadio: "Moda Center",
        },
        {
          id: "632a0b5e-41f2-4acb-8c36-019b10f81ade",
          nome: "Denver Nuggets",
          estadio: "Pepsi Center",
        },
        {
          id: "9db7a2ed-e1c2-43b2-b222-47a64a860427",
          nome: "Minnesota Timberwolves",
          estadio: "Target Center",
        },
      ],
      novo_time: "",
      novo_estadio: "esse",
    };
  },
  methods: {
    salvar() {
      if (this.novo_time !== "") {
        const novo_id = uuidv4();
        this.times.push({
          id: novo_id,
          nome: this.novo_time,
          estadio: this.novo_estadio,
        });
        this.novo_time = "";
      }
    },
    excluir(time) {
      const indice = this.times.indexOf(time);
      this.times.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de Times</h2>
      </div>
      <div class="form-input">
        <input type="text" v-model="novo_time" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-times">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
              <th>Estádios</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="time in times" :key="time.id">
              <td>{{ time.id }}</td>
              <td>{{ time.nome }}</td>
              <td>
                <button>Editar</button>
                <button @click="excluir(time)">Excluir</button>
              </td>
              <td>{{ time.estadio }}</td>
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

.list-times {
  display: flex;
  justify-content: center;
}

.list-times table {
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
