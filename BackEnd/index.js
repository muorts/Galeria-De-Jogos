document.addEventListener('DOMContentLoaded', () => {
    const botaoPesquisar = document.getElementById('pesquisa');
    const PopPesquisa = document.getElementById('pop-pesquisa');
    const inputPesquisa = document.getElementById('input-pesquisa');

    function AbrirPop() {
        PopPesquisa.classList.add('active');
        inputPesquisa.focus();
    }

    function FecharPop() {
        PopPesquisa.classList.remove('active');
        inputPesquisa.value = ''; 
    }

    botaoPesquisar.addEventListener('click', (event) => {
        event.stopPropagation();
        if (PopPesquisa.classList.contains('active'))
        {
            FecharPop();
        }
        else 
        {
            AbrirPop();
        }
    });

    inputPesquisa.addEventListener('keydown', (event) => {
        if (event.key == 'Enter')
        {
            event.preventDefault();
            const query = inputPesquisa.value.trim();
            if (query)
            {
                alert('Voce pesquisou por ' + query);
                FecharPop();
            }

            else 
            {
                alert('Por favor, digite algo...');
            }
        }
    });

    document.addEventListener('click', (event) => {
        if (!PopPesquisa.contains(event.target) && !botaoPesquisar.contains(event.target))
        {
            FecharPop();
        }

    });


});

