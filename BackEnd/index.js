document.addEventListener('PopupPesquisa', () => {
    const botaoPesquisar = document.getElementById('pesquisa');
    const Pesquisa = document.getElementById('pop-pesquisa');
    const inputPesquisa = document.getElementById('input-pesquisa');
    const submeterPesquisa = document.getElementById('botao-pesquisa');

    function AbrirPop() {
        submeterPesquisa.classList.add('active');
        inputPesquisa.focus();
    }


}) 

