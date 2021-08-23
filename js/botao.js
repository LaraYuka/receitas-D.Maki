$(document).ready(function(){ 

  $("a").click(function(e){
    e.preventDefault()

    let pagina = $(this).attr('href')
  

    $('.modal-title').empty()
    $('.modal-body').empty()

    switch(pagina){
      case 'home':
        $(location).attr('href', 'index.html');
      break
      case 'teste':
        $('.modal-title').append('Doce')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-danger">Doce</h4>
                <p>Por enquanto não possui nada nessa página</p>
              </div>
            </div>
          </div>
        `)
      break
      case 'doce':
        $('.modal-title').append('Doce')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-titulo">Doce</h4>
                <p>Por enquanto não possui nada nessa página</p>
              </div>
            </div>
          </div>
        `)
      break
      case 'salgado':
        $('.modal-title').append('Salgado')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-titulo">Salgado</h4>
                <p>Por enquanto não possui nada nessa página</p>
              </div>
            </div>
          </div>
        `)
      break
      case 'contato':
        $('.modal-title').append('Contato')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-titulo">Contato</h4>
                <p>Por enquanto não possui nada nessa página</p>
              </div>
            </div>
          </div>
        `)
      break
      case 'cadastro':
        $('.modal-title').append('Cadastro')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-titulo">Cadastro</h4>
                <p>Por enquanto não possui nada nessa página</p>
              </div>
            </div>
          </div>
        `)
      break
      case 'email':
        $('.modal-title').append('Email')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-titulo">Email</h4>
                <p>Por enquanto não possui nada nessa página</p>
              </div>
            </div>
          </div>
        `)
      break
      case 'sair':
        $('.modal-title').append('Sair')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-titulo">Sair</h4>
                <p>Por enquanto não possui nada nessa página</p>
              </div>
            </div>
          </div>
        `)
      break
      case 'receita':
        $('.modal-title').append('Receita')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-titulo">Receita</h4>
                <p>Por enquanto não possui nada nessa página</p>
              </div>
            </div>
          </div>
        `)
      break
      case 'whats':
        $('.modal-title').append('Whatsapp')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-titulo">Número</h4>
                <p>(XX) XXXXXXXXX</p>
              </div>
            </div>
          </div>
        `)
      break
      case 'insta':
        $(location).attr('href', 'https://www.instagram.com/larasakanaka/');
      break
      case 'face':
        $(location).attr('href', 'https://www.facebook.com/lara.sakanaka.9');
      break
      default: alert('Página não encontrada')
    }


    $('#exampleModal"').modal('show');
    

  })
})