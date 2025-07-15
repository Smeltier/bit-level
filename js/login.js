document.getElementById("verifica").addEventListener("click", function () {

    const email = document.getElementById("eemail").value;
    const senha = document.getElementById("paasword").value;

    const emailCorreto = "chatGPT@gmail.com"; // pelo visto precisa ser comparado com uma variavel
    const senhaCorreta = "gpt123";

    if (email === emailCorreto && senha === senhaCorreta) {
        window.location.href = "../index.html";
    } else {
        alert("Email e senha invalidos.")
        window.location.href = "login.html";
    }
})