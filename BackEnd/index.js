document.addEventListener('DOMContentLoaded', () => {
    const botaoPesquisar = document.getElementById('pesquisa');
    const Pesquisa = document.getElementById('pop-pesquisa');
    const inputPesquisa = document.getElementById('input-pesquisa');
    const submeterPesquisa = document.getElementById('botao-pesquisa');

    function AbrirPop() {
        submeterPesquisa.classList.add('active');
        inputPesquisa.focus();
    }

    function FecharPop() {
        Pesquisa.classList.remove('active');
        inputPesquisa.value = ''; 
    }

    botaoPesquisar.addEventListener('click', (event) => {
        event.stopPropagation();
        if (Pesquisa.classList.contains('active'))
        {
            FecharPop();
        }
        else 
        {
            AbrirPop();
        }
    });

    submeterPesquisa.addEventListener('click', () => {
        const query = inputPesquisa.value.trim();
        if (query)
        {
            alert('Voce pesquisou por: ' + query);
        }
        else 
        {
            alert('Por favor, digite algo...');
        }
    });

    document.addEventListener('click', (event) => {
        if (!Pesquisar.contains(event.target) && !botaoPesquisar.contains(event.target))
        {
            closePesquisar();
        }

    });


});

