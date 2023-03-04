function enviarFormulario() {
    // Pega os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verifica se todos os campos foram preenchidos corretamente
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Monta o corpo do e-mail com os valores dos campos do formulário
    var corpoDoEmail = "Nome: " + nome + "\n";
    corpoDoEmail += "E-mail: " + email + "\n";
    corpoDoEmail += "Mensagem: " + mensagem;

    // Abre um link com o endereço de e-mail e o corpo do e-mail
    var link = "mailto:oldzinho3035@gmail.com"
        + "?subject=Contato"
        + "&body=" + encodeURIComponent(corpoDoEmail);
    window.location.href = link;
}