let projetos = [
    {"titulo": "Projeto Bluecap", "descricao": "Landing Page desenvolvimento front-end", "img": 'assets/img/bluecap.jpg', "alt":"Projeto bluecap", "link": "bluecap/Projeto-blueCap/index.html"},
    {"titulo": "Projeto City Turbo Fibra", "descricao": "Criação do layout e desenvolvimento front-end", "img": 'assets/img/city-turbo-fibra.jpg', "alt":"Projeto City Turbo Fibra", "link": "https://cityturbofibra.com.br/"},
    {"titulo": "Projeto Classe a imoveis", "descricao": "Criação do layout e desenvolvimento front-end", "img": 'assets/img/classe-a.jpg', "alt":"Projeto Classe a imoveis", "link": "http://classeaimoveispe.com.br/"},
    {"titulo": "laus tattoo", "descricao": "Manutenção e atualizaações de paginas", "img": 'assets/img/laus-tatto.jpg', "alt":"Projeto laus tattoo", "link": "https://www.laustattoo.com/"},
    {"titulo": "Projeto Raizes de aldeia", "descricao": "Manutenção e atualizaações de paginas", "img": 'assets/img/raizes-de-aldeia.jpg', "alt":"Projeto laus tattoo", "link": "https://raizesdealdeia.com.br/"}
 ]
  
 
 $(document).ready(function(){


   $(document).scroll(function(){
       let scrollTopo = $(this).scrollTop()

       if(scrollTopo > 200){
           $('.ir-topo').addClass('topo-atctive')
       }else{
           $('.ir-topo').removeClass('topo-atctive')
       }

   })


   $('.ir-topo').on('click', function(e){
       e.preventDefault()
       $("html,body").animate({scrollTop: 0}, 1000);
   });

   projetos.map(function(item){
   
       $('#projetos').append(
       
           "<div class='card m-3' style='width: 20rem;'>" +
               "<img class='card-img-top' src="+item.img+" alt="+item.alt+" >"+
               "<div class='card-body'>" +
               "<h5 class='card-title'>"+item.titulo+"</h5>" +
               "<p class='card-text'>"+item.descricao+"</p>" +
               "<a target='_blank'  href="+item.link+" class='btn btn-success'>Ver Projeto</a>" +
           "</div>"
       )
   
 });

 })