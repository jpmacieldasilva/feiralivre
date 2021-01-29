<template>
  <div class="list-view" @enviandoBusca="recebendoFiltro">
    <router-link class="card-bussiness"
    :to="{name: 'profile',
      params: {name: user.name.toLowerCase().replace(/[\s-]/g,'-'),
       id: user.id}}" v-for="user in users" :key="user.id">
      <div class="">
          <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="card-image">
          <div class="card-info">
              <div class="card-primary">
                <h4>{{user.name}}</h4>
                <div class="card-flags">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png" alt="" class="flag-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png" alt="" class="flag-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png" alt="" class="flag-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png" alt="" class="flag-info">
                 </div>
              </div>
              <div class="card-detail">
                  <div class="detail-info">
                       <img src="../assets/briefcase.svg" >
                      <p>{{user.index}}</p>
                  </div>
                  <div class="detail-info">
                      <img src="../assets/pin.svg" >
                      <p>{{user.city}}</p>
                  </div>
              </div>
          </div>
      </div>
    </router-link>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Lista',
  created() {
    this.getUsers();
  },
  data() {
    return {
      users: [],
      user: '',
      termoFiltro: '',
      cidadeFiltro: '',
      categoriaFiltro: '',
      grupoFiltro: [],
    };
  },
  components: {
  },
  filteredList() {
    let filtered = this.users;
    if (this.searchString) {
      filtered = this.users.filter(
        (u) => u.name.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1
        || u.email.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1,
      );
    }
    if (this.selectNumber) {
      filtered = filtered.filter(
        (u) => u.email.toLowerCase().indexOf(this.selectNumber.toLowerCase()) > -1,
      );
    }
    return filtered;
  },
  methods: {
    getUsers() {
      const url = 'https://feiralivre-a686b-default-rtdb.firebaseio.com/users.json';
      // const url = 'https://jsonplaceholder.typicode.com/users';
      axios.get(url).then((response) => {
        this.users = response.data;
        console.log(response.data);
      });
    },
    recebendoFiltro($event) {
      this.termoFiltro = $event.termo;
      this.cidadeFiltro = $event.cidade;
      this.categoriaFiltro = $event.categoria;
      this.grupoFiltro = $event.grupo;
    },
  },
  mounted() {
    if (localStorage.termoBusca) this.termoFiltro = localStorage.termoBusca;
    if (localStorage.cidadeBusca) this.cidadeFiltro = localStorage.cidadeBusca;
    if (localStorage.categoriaBusca) this.categoriaFiltro = localStorage.categoriaBusca;
    if (localStorage.grupoBusca) this.grupoFiltro = localStorage.grupoBusca;
  },
};

</script>

<style lang='scss' scoped>
@import '../stylesheet.scss';

.list-view{
    width: 100%;
    background-color: $background-color;
    padding: 1.875rem;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
}

.card-bussiness{
    background-color: $primary-white;
    width: 30%;
    min-width: 280px;
    max-height: 300px;
    margin: 0.8rem;

    & img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .card-info{
        display: flex;
        flex-direction: column;
        height: 180px;
        padding: 10px;

        .card-primary{
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: .938rem;

            & h4{
             font-family: $secondary-type;
             color: $primary-color;
             font-style: normal;
             font-weight: 900;
             font-size: 1.25rem;
             width: 65%;
            }

            & .card-flags {
                width: 35%;
                display: flex;
                justify-content: space-around;

                & img {
                    width: 25px;
                    height: auto;
                    max-height: 20px;
                    object-fit: cover;
                }
            }
        }

        & .card-detail {
            display: flex;
            width: 100%;
            font-size: .875rem;

            & .detail-info{
                display: flex;
                align-items: center;
            }

            & p{
                margin-right: .625rem;
                }

           & img {
               width: auto;
               height: 16px;
               margin-right: .313rem;
           }
        }
    }
}
</style>
