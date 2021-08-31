$(document).ready(function(){

   $('.btn-original').click(function(original){
    original.preventDefault()

    $('body').removeClass('claro')
    $('body').removeClass('escuro')
    $('body').addClass('original')
    $('p').removeClass('text-white')
    $('p').addClass('text-dark')
  })

  $('.btn-escuro').click(function(escuro){
    escuro.preventDefault()

    $('body').removeClass('original')
    $('body').removeClass('claro')
    $('body').addClass('escuro')
    $('p').removeClass('text-dark')
    $('p').addClass('text-white')
  })

  $('.btn-claro').click(function(claro){
    claro.preventDefault()

    $('body').removeClass('original')
    $('body').removeClass('escuro')
    $('body').addClass('claro')
    $('p').removeClass('text-whit')
    $('p').addClass('text-dark')
  })

})