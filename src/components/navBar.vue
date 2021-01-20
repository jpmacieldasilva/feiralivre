<template>
  <div class="lg-3 navbar">
    <div class="navbar-logo">
      <img src="../assets/logo.svg" alt="">
      <p>Negócios liderados pela diversidade</p>
      <button>cadastre seu negócio</button>
    </div>
    <div class="navbar-search">
      <h3>ENCONTRE UM NEGÓCIO</h3>
     <div class="navbar-check">
       <div class="navbar-option">
         <input type="checkbox" id="mulheres" name="mulheres" value="mulheres">
         <label for="mulheres"> Mulheres</label>
       </div>
       <div class="navbar-option">
        <input type="checkbox" id="negros" name="negros" value="negros">
        <label for="negros"> Pessoas negras</label>
       </div>
       <div class="navbar-option">
        <input type="checkbox" id="indigenas" name="indigenas" value="indigenas">
        <label for="indigenas">Indígenas</label>
       </div>
       <div class="navbar-option">
         <input type="checkbox" id="lgbt" name="lgbt" value="lgbt">
         <label for="lgbt"> LGBTQI+</label>
       </div>
     </div>
      <label for="search" >Buscar por um termo</label>
      <input type="search" placeholder="Digite aqui">
      <label for="categoria">Categoria</label>
      <select name="categoria" id="categoria">
       <option disabled selected>Escolha uma categoria</option>
       <option value="volvo">Volvo</option>
       <option value="saab">Saab</option>
       <option value="mercedes">Mercedes</option>
       <option value="audi">Audi</option>
      </select>
      <label for="cidade">Cidade</label>
      <select name="cidade" id="cidade">
       <option disabled selected>Escolha uma cidade</option>
       <option value="volvo">Volvo</option>
       <option value="saab">Saab</option>
       <option value="mercedes">Mercedes</option>
       <option value="audi">Audi</option>
      </select>
      <button class="button-primary">Buscar</button>
    </div>
    <div class="navbar-links">
      <a href=""> Sobre</a>
      <a href="">Instagram</a>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>
@import '../stylesheet.scss';

.navbar{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: $background-color;
  height:100vh;
  min-width: 300px;
  padding: 1.25rem;
  border-right: 1px solid rgba(24, 72, 56, 0.3);;
}
.navbar-logo{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & p{
    width: 60%;
    text-align: center;
    margin: 1rem 0;
    color: $primary-color;
  }

  & button{
    border: 1px solid $primary-color;
    padding: 0.3rem;
    font-size: 1rem;
    color: $primary-color;
    margin-top: 0.5rem;
    width: 215px;
    height: 30px;
  }
}
.navbar-search {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top: 1px solid $primary-color;
  border-bottom: 1px solid $primary-color;
  padding: 2rem 0;

  & h3{
    font-family: $primary-type;
    font-size: 1.25rem;
    font-weight: 700;
    color: $primary-color;
    margin-bottom: 1.5rem;
  }

  & input, select{
    background-color: $primary-white;
    height: 35px;
    width: 100%;
    border: 1px solid $primary-color;
    box-sizing: border-box;
    margin: 0.5rem;
    border-radius: 0.2rem;
    padding: 0 .625rem;
  }

  & label{
    font-family: $primary-type;
    font-size: .875rem;
    text-align: left;
    width: 100%;
    color: $primary-color;
  }
}

.navbar-check{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  font-family: $primary-type;
}
.navbar-option{
  display: flex;
  flex-direction: row;
  align-items: center;

  & input{
    width: 25px;
    margin: 0px;
    margin-right: 5px;
  }

  & label{
    font-family: $secondary-type;
    font-size: .875rem;
  }
}

.button-primary {
  background-color: $primary-color;
  border-radius: 30px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  color: $primary-white;
  margin-top: .938rem;
  font-size: 1rem;
}

.navbar-links{
  display: flex;
  justify-content: space-around;
  width: 80%;
  color: $primary-color;
  font-size: 1rem;
  font-family: $primary-type;
}
</style>
