const API_KEY = 'a1bda006eb7772b68285a83454a1de68';

function exibeNoticias () {
    let divTela = document.getElementById('tela');
    let texto = '';

    //Montar texto html das noticias
    let dados = JSON.parse (this.responseText);
    for(i=0; i< dados.results.length; i++){
        let noticia = dados.results[i];

        texto = texto + `
            <div class="box-noticia">
            <img src="http://image.tmdb.org/t/p/original${noticia.poster_path}" alt="">
            <span class="titulo">${noticia.title}</span><br>
            <span class="creditos">${noticia.release_date}</span><br>
            <span class="texto">${noticia.overview}
            <a href="https://www.themoviedb.org/movie/${noticia.id}?language=pt-BR">Leia Mais ...</a>
            </span>
        </div>
        `
    };
    

    //Preencher a div com o texto
    divTela.innerHTML = texto;
}


function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=pt-BR`)
    xhr.send ();
}

document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);