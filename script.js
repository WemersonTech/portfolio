// Espera o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
    // Mensagem de boas-vindas ao carregar a página
    alert("Bem-vindo ao meu portfólio!");

    // Mudança de cor ao passar o mouse nos projetos
    const projetos = document.querySelectorAll(".projeto");

    projetos.forEach(projeto => {
        projeto.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#ddd";
        });

        projeto.addEventListener("mouseout", function () {
            this.style.backgroundColor = "white";
        });
    });
});
