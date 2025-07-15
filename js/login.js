document.getElementById("verifica").addEventListener("click", function () {

    const email = document.getElementById("eemail").value;
    const senha = document.getElementById("paasword").value;

    const emailCorreto = "teste@site.com"; // pelo visto precisa ser comparado com uma variavel
    const senhaCorreta = "123456";

    if (email === emailCorreto && senha === senhaCorreta) {
        window.location.href = "../index.html";
    } else {
        window.location.href = "login.html";
    }
})