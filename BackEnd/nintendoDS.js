const games = [
    {
        title: "New Super Mario Bros",
        year: 2006,
        image: "https://upload.wikimedia.org/wikipedia/pt/2/2e/New_Super_Mario_Bros._-_Norh-american_cover.jpg",
    },

    {
        title: "The Legend of Zelda: Phantom Hourglass",
        year: 2007,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuxAuBTnappwMopFbGsZEroEzmsqJMy4eMA&s",
    },

    {
        title: "Mario Kart DS",
        year: 2005,
        image: "https://upload.wikimedia.org/wikipedia/pt/9/9a/Mario_Kart_DS_front.jpg",
    },

    {
        title: "Pokemon Diamond Version",
        year: 2006,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_1NDo6DZnGghR1ZjC6EtVOJpZoRXGOxkKA&s",
    },

    {
        title: "Pokemon Pearl",
        year: 2007,
        image: "https://m.media-amazon.com/images/I/61MM1UJWfeL.jpg"
    },

    {
        title: "Animal Crossing",
        year: 2005,
        image: "https://m.media-amazon.com/images/I/61f+b+PcEeL.jpg",
    },

    {
        title: "Pokemon Black",
        year: 2010,
        image: "https://img.pokemondb.net/boxes/lg/black-large.jpg",
    },

    {
        title: "Pokemon White",
        year: 2010,
        image: "https://m.media-amazon.com/images/I/81ZhVKZo2+L._AC_UF1000,1000_QL80_.jpg",
    },

    {
        title: "Castelvania: Dawn of Sorrow",
        year: 2005,
        image: "https://upload.wikimedia.org/wikipedia/en/d/d5/Castlevania_Dawn_of_Sorrow_NA_Cover.jpg",
    },

    {
        title: "Metroid Prime: Hunters",
        year: 2006,
        image: "https://upload.wikimedia.org/wikipedia/pt/d/da/Metroid_Prime_Hunters_cover.png",
    },

    {
        title: "Ben 10: Protector of Eath",
        year: 2008,
        image: "https://cdn.awsli.com.br/600x450/138/138431/produto/7989292/jogo-ben-10-protector-of-earth-ds-dbd22c18.jpg",
    },

    {
        title: "Adventure Time: Hey ice King! Why'd You steal our Garbage?!!",
        year: 2012,
        image: "https://images-na.ssl-images-amazon.com/images/I/818KzQx8w9L._AC_UL600_SR600,600_.jpg",
    },

    {
        title: "Kirby Super Star Ultra",
        year: 2008,
        image: "https://jogorama.com.br/arquivos/capas/2183.jpg",
    },

    {
        title: "Kingdom Hearts 358/2 Days",       
        year: 2009,
        image: "https://upload.wikimedia.org/wikipedia/pt/2/2f/KH_358-2_Days_capa.png",
    },

    {
        title: "Sonic Rush",
        year: 2005,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNM6dj0SC5KEqDcT_lynn7h-o9IpRyx_KoA&s",
    },

    {
        title: "Yosh's Island DS",
        year: 2006,
        image: "https://cdn.awsli.com.br/600x450/138/138431/produto/11018447/fc18a50081.jpg",
    },

    {
        title: "Kirby: Canvas Curse",
        year: 2005,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8X4X1GxH44vxMqekO6DKKVr675Kb16xmsuQ&s",
    },

    {
        title: "Scribblenauts",
        year: 2009,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIDDHn4zHKQ0Z7uU_VkTrmXAfWsOqnVjjc6ewWaleNZNbYb_ARwI_3niOoGmNfBhRy2b9ov8qz0srYvpDrGa_GIpa9zvyNRwn8gz7XJx23eT4p2zXftyUyiAGYrFojNX9AFQC1lyASOJk/rw/?imgmax=800",
    },

    {
        title: "Plants vs Zombies (DS port)",
        year: 2011,
        image: "https://m.media-amazon.com/images/I/713I-woJsSL._AC_UF1000,1000_QL80_.jpg",
    },

    {
        title: "Ben 10: Alien Force",
        year: 2008,
        image: "https://m.media-amazon.com/images/I/71ByV7Dc+eL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    },

    {
        title: "Danny Phantom: Urban Jungle",
        year: 2006,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIcLnnEjHDr5BppRxWsYuwosK_n2UBkuFtw&s",
    },

    {
        title: "Astro Boy",
        year: 2009,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0rj27J6KYkpgMOgMkZldm10AufWplOggCEw&s",
    },

    {
        title: "The Simpsons game",
        year: 2007,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-CwaVZZl9GrCocIEDMHcuhTjd4-4GeSKYMQ&s",
    },

    {
        title: "Shrek the Third",
        year: 2007,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyUPY8Ig4ZdmGFKHp0pIDYgK_sdwvLro77w&s",
    },

]

function CriarCardDosGames(games) {
    const galeria = document.getElementById('galeria');

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <div class="card-front">
        <img src="${games.image}" alt="${games.title}" class="card-img">
        <p 
            class="card-text" style="display: none;"> ${games.title} <br> ${games.year} 
        </p>
    </div>
    `;
    
    galeria.appendChild(card);

    const img = card.querySelector('.card-img');
    const text = card.querySelector('.card-text');

    img.addEventListener('click', () => {
        img.style.display = 'none'; 
        text.style.display = 'flex'; 
    });
    
    text.addEventListener('click', () => {
        img.style.display = 'block';
        text.style.display = 'none';
    });
}

let indiceAtual = 0;
const quantidadePorVez = 12;

function carregarJogos() {
    const galeria = document.getElementById('galeria');
    const slice = games.slice(indiceAtual, indiceAtual + quantidadePorVez);

    slice.forEach(game => CriarCardDosGames(game));

    indiceAtual += quantidadePorVez;

    if (indiceAtual >= games.length) {
        document.getElementById('carregarmais').style.display = 'none';
    }
}

document.getElementById('carregarmais').addEventListener('click', carregarJogos);

carregarJogos();

//tbm add botao de proximo/anterior

