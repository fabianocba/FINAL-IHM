document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formAgendamento");
    const listaConsultas = document.querySelector(".lista-consultas");

    if (form && listaConsultas) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const selects = form.querySelectorAll("select");
            const inputData = form.querySelector("input[type='date']");

            const especialidade = selects[0]?.value || "Consulta Geral";
            const profissional = selects[1]?.value || "Dr. João Martins";
            const dataRaw = inputData?.value || "2026-12-10";
            const horario = selects[2]?.value || "09:00";
            const modalidade = selects[3]?.value || "Presencial";

            const partesData = dataRaw.split("-");
            const dataFormatada = partesData.length === 3
                ? `${partesData[2]}/${partesData[1]}/${partesData[0]}`
                : dataRaw;

            const codigo = `#CS00${listaConsultas.children.length + 1}`;

            const novoCard = document.createElement("article");
            novoCard.className = "card-consulta";
            novoCard.innerHTML = `
                <div class="consulta-topo">
                    <span class="status-pendente">Aguardando confirmação</span>
                    <span class="consulta-codigo">${codigo}</span>
                </div>
                <div class="consulta-info">
                    <div class="consulta-icone" aria-hidden="true">✚</div>
                    <div>
                        <h3>Consulta ${especialidade}</h3>
                        <p>${profissional}</p>
                    </div>
                </div>
                <div class="consulta-detalhes">
                    <div><span>Data</span><strong>${dataFormatada}</strong></div>
                    <div><span>Horário</span><strong>${horario}</strong></div>
                    <div><span>Modalidade</span><strong>${modalidade}</strong></div>
                </div>
                <div class="consulta-rodape">
                    <a href="../pagamento.html" class="link-detalhes">Realizar pagamento →</a>
                    <button type="button" class="botao-cancelar">Cancelar consulta</button>
                </div>
            `;

            listaConsultas.appendChild(novoCard);
            form.reset();
            alert(`Solicitação ${codigo} realizada com sucesso!`);
            novoCard.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (listaConsultas) {
        listaConsultas.addEventListener("click", (event) => {
            if (event.target.classList.contains("botao-cancelar")) {
                const confirmar = confirm("Tem certeza que deseja cancelar esta consulta?");
                if (confirmar) {
                    const card = event.target.closest(".card-consulta");
                    card.remove();
                }
            }
        });
    }
});
