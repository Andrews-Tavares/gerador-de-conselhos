const btnAdvice = document.querySelector(".button");
const numeroDoConselho = document.querySelector(".advice");
const decricaoDoConselho = document.querySelector(".numero-id");

async function gerarConselho() {
  try {
    const pegarConselho = await fetch("https://api.adviceslip.com/advice");

    if (!pegarConselho.ok) {
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
    }

    const response = await pegarConselho.json();
    const idDoconselho = `Advice #${response.slip.id}`;
    const conselho = `"${response.slip.advice}"`;

    numeroDoConselho.innerText = idDoconselho;
    decricaoDoConselho.innerText = conselho;

  } catch (error) {
    console.error("Erro ao tentar buscar as informações da API", error);
  }
}



btnAdvice.addEventListener("click", gerarConselho);

gerarConselho()

