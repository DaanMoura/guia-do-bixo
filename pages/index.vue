<template>
  <div class="background">
    <div class="container">
      <h1>Bem vindo ao Guia do Bixo!</h1>
      <p>
        Querido bixo e querida bixete, parabéns pelo ingresso na universidade!
        Os próximos anos de sua vida serão marcados por muito aprendizado e crescimento,
        amizades, experiências incríveis e, claro, alguns perrengues também. Esse guia tem
        o objetivo de te ajudar a sobreviver aos primeiros dias em São Carlos. Aqui você encontra
        informações importantes sobre a USP-São Carlos e UFSCar, além de contatos úteis em Sanca.
      </p>
      <h2>ABUSCar</h2>
      <p>
        Quem somos nós? A Aliança Bíblia Universitária de São Carlos (ABUSCar) é formada por
        estudantes universitários de diversos cursos da UFSCar, USP-São Carlos e UNICEP, que
        buscam estudar e compreender o que a Bíblia tem para nos falar hoje em nosso contexto.
        Gostamos de compartilhar nossas dúvidas, convicções e experiências, sempre buscando o
        crescimento como grupo e o diálogo com a universidade. A ABUSCar é filiada a ABUB
        (Aliança Bíblica Universitária do Brasil), organização nacional que atua nas universidades
        de todas as regiões do País com mais de 100 grupos, visando o viver e o compartilhar da fé
        cristã na universidade e o serviço à sociedade.”
      </p>
      <p>
        Lembrando que todos e todas são bem-vindos (as) em nossos encontros, basta ter curiosidade para estudar os textos bíblicos!
      </p>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: 0 8rem;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  z-index: 1;
}

p {
  text-align: justify;
}

.background {
  background-image: url('../assets/people.png');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 540px;
}
</style>
