<template>
  <div class="lg-9 profile">
    <div class="profile-back">
        <a href=""><img class="ico" src="../assets/back.svg" alt=""> voltar para lista </a>
    </div>
    <div class="profile-content">
        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="profile-image">
        <div class="profile-info">
            <div class="profile-head">
                <div class="head-infos">
                    <h4>Pitanga Cozinha</h4>
                    <div class="profile-flags">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png" alt="" class="flag-info">
                    </div>
                </div>
                <a href="" class="profile-contact">entrar em contato</a>
            </div>
            <div class="profile-details">
                <div class="detail-info">
                    <img src="../assets/briefcase.svg" >
                    <p>Alimentação</p>
                </div>
                <div class="detail-info">
                    <img src="../assets/pin.svg" >
                    <p>Taguatinga</p>
                </div>
                <div class="detail-info">
                    <img src="../assets/briefcase.svg" >
                    <p>Alimentação</p>
                </div>
            </div>
            <div class="profile-text">
                <p>Quisque accumsan arcu diam, ut placerat elit malesuada non. Donec ex nisl,
                vestibulum ut urna eget, rhoncus ullamcorper leo. Quisque fringilla,
                 diam a efficitur porttitor, tortor nunc tincidunt augue, et.</p>
            </div>
        </div>
    </div>

    <hr>

    <div class="profile-album">
        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">

    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>
@import '../stylesheet.scss';
.profile{
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
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

.profile-album{
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
