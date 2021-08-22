$(document).ready(function(){ 

  $('a').click(function(e){
    e.preventDefault()

    let pagina = $(this).attr('href')

    $('.modal-title').empty()
    $('.modal-body').empty()

    switch(pagina){
      case 'receita':
        $('.modal-title').append('Receitas')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-danger">Meus Projetos</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae earum ex reprehenderit, provident doloremque fugiat possimus quaerat assumenda, tempora accusantium placeat quasi explicabo. Ea dicta eos quia error tempora quod!</p>
              </div>
            </div>
          </div>
        `)
      break
      default: alert('Página não encontrada')
    }


    $('#modal-info').modal('show')

  })
})