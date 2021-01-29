<template>
  <div class="lg-9 profile">
    <div class="profile-back">
        <a href="javascript:history.go(-1)">
            <img class="ico" src="../assets/back.svg" alt=""> voltar para lista </a>
    </div>
    <div class="profile-content">
        <div class="profile-info">
            <div class="profile-head">
                <div class="head-infos">
                    <h4>{{usuario.name}}</h4>
                    <div class="profile-flags">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png" alt="" class="flag-info">
                    </div>
                </div>
                <a :href="usuario.phone" class="profile-contact">entrar em contato</a>
            </div>
            <div class="profile-details">
                <div class="detail-info">
                    <img src="../assets/briefcase.svg" >
                    <p>{{usuario.category}}</p>
                </div>
                <div class="detail-info">
                    <img src="../assets/pin.svg" >
                    <p>{{usuario.city}}</p>
                </div>
                <div v-show="usuario.site" class="detail-info">
                    <img src="../assets/briefcase.svg" >
                    <p>{{usuario.site}}</p>
                </div>
            </div>
            <div class="profile-text">
                <p>{{usuario.about}}</p>
            </div>
        </div>
    </div>

    <hr>

    <insta-vue v-if="!usuario.photo1" class="profile-album" :tag='usuario.instagram'
    :quantity="9" :cols="3"> </insta-vue>

    <div v-if="usuario.photo1" class="profile-album">
        <img :src='usuario.photo1.replace("open","uc")' alt="">
        <img :src='usuario.photo2.replace("open","uc")' alt="">
        <img :src='usuario.photo3.replace("open","uc")' alt="">
        <img :src='usuario.photo4.replace("open","uc")' alt="">
        <img :src='usuario.photo5.replace("open","uc")' alt="">
        <img :src='usuario.photo6.replace("open","uc")' alt="">
        <img :src='usuario.photo7.replace("open","uc")' alt="">
        <img :src='usuario.photo8.replace("open","uc")' alt="">
        <img :src='usuario.photo9.replace("open","uc")' alt="">
    </div>
  </div>
</template>

<script>
import InstaVue from 'insta-vue';
import axios from 'axios';

export default {
  name: 'profile',
  components: {
    InstaVue,
  },
  created() {
    this.getUsers();
  },
  data() {
    return {
      usuario: {},
      /* eslint-disable-next-line */
      dataToken: 'IGQVJYMVdta2lySkU3MF9xMERMZAzVDcTZAmT1dYYlJqOFd0Ym53U2dUbWVES2tDeFZA5el90VWFnN3IwMExxUnBRVzBGQXNkdFhIVWhNVl96ZAW04aXQ1NmhoQUt6NDFOcDY5R0t1NjRnSV9fZA1l6dWUwTgZDZD',
    };
  },
  methods: {
    getUsers() {
      const url = `https://feiralivre-a686b-default-rtdb.firebaseio.com/users/${this.$route.params.name}.json`;
      console.log(url);
      axios.get(url).then((response) => {
        this.usuario = response.data;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../stylesheet.scss';
.profile{
    width: 100vw;
    height: 110vh;
    max-height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $background-color;
    padding: 30px 40px 0px 60px;
    overflow: hidden;
    flex-wrap: nowrap;
}
.profile-back{
    color: $primary-color;
    margin-bottom: 2rem;
}

.profile-content{
    display: flex;
    width: 100%;
    justify-content: space-between;

    & .profile-image {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        object-fit: cover;
        margin-right: 2rem;
    }

    & .profile-info{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-evenly;
    }
}

.profile-head{
    display: flex;
    justify-content: space-between;

    & .head-infos{
        display: flex;
        flex-grow: 2;
        align-items: center;

     & h4{
        font-family: $secondary-type;
        color: $primary-color;
        font-style: normal;
        font-weight: 900;
        font-size: 2.25rem;
        margin-right: 1rem;
    }
     & .profile-flags {
        width: 35%;
        display: flex;

        & img {
            width: 35px;
            height: auto;
            max-height: 20px;
            object-fit: cover;
        }
    }
    }
}
.profile-contact{
        border: 1px solid $primary-color;
        padding: 0.3rem;
        font-size: 1rem;
        color: $primary-color;
        margin-top: 0.5rem;
        width: 215px;
        height: 30px;
        text-align: center;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
}

.profile-details {
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

.profile-text{
    color: $primary-grey;
    font-size: 1rem;
    line-height: 1.75rem;
}

hr{
    border: 1px solid rgba(24, 72, 56, 0.3);
    width: 100%;
    margin: 30px 0 ;
}

.profile-album {
    width: 100%;
    height: 940px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow: scroll;
    height: 100%;

    & img{
        width: 30%;
        height: 300px;
        object-fit: cover;
        margin-bottom: 20px;
    }
}
</style>
