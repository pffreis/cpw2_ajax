var carregando = false; // indica se uma requisição Ajax está em andamento

// função para carregar mais imagens

//carregamento inicial das imagens
window.onload = function(){
    carregarImagens();
}

//função que analisa o fim da página e lança novamente a função carrega imagens
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      carregarImagens();
    }
}

//função carrega imagens
function carregarImagens() {
  if (carregando) {
    return;
  }
  carregando = true;
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'list.json', true);
  ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        var images = JSON.parse(ajax.responseText);
        var divImagens = document.getElementById("images");
        for (var image of images.animals) {
            var img = document.createElement("img");
            img.src = image.imagemUrl;
            img.alt = image.name;
            divImagens.appendChild(img);
        }
        carregando = false;
    }
  };
  ajax.send();
}
