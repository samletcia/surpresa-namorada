function mostrarCarta() {
    var botao = document.getElementById("botao");
    var caixa = document.getElementById("caixa");
    var conteudo = caixa.querySelector(".conteudo");

    botao.style.display = "none";
    caixa.style.display = "block";
    setTimeout(function() {
        caixa.classList.add("aberta");
        setTimeout(function() {
            conteudo.style.display = "block";
        }, 1000);
    }, 100);
}
