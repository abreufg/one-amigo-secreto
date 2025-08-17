let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        input.value = "";
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "✕";
        btnRemover.classList.add("remove-btn");
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const indice = Math.floor(Math.random() * amigos.length);
    const escolhido = amigos[indice];

    const li = document.createElement("li");
    li.textContent = `🎉 O amigo secreto sorteado foi: ${escolhido}`;
    resultado.appendChild(li);
}
