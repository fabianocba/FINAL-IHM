document.addEventListener("DOMContentLoaded", () => {
    // 1. Controle de Login / Logout no cabeçalho
    const linkAuth = document.getElementById("linkAuth");
    const usuarioEmail = localStorage.getItem("usuarioEmail");
    if (linkAuth && usuarioEmail) {
        linkAuth.textContent = "Sair";
        linkAuth.addEventListener("click", () => {
            localStorage.removeItem("usuarioEmail");
        });
    }

    // 2. Formulário de Login (pages/login.html)
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            localStorage.setItem("usuarioEmail", email);
            window.location.href = "../index.html";
        });
    }

    const btnWhatsapp = document.getElementById("btnWhatsapp");
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", () => {
            localStorage.setItem("usuarioEmail", "paciente.whatsapp@saudemais.com.br");
        });
    }

    // 3. Tela de Agendamentos (pages/meusagendamentos.html)
    const listaConsultas = document.getElementById("listaConsultas");
    const formAgendamento = document.getElementById("formAgendamento");

    if (listaConsultas) {
        const consultasSalvas = JSON.parse(localStorage.getItem("consultasSalvas")) || [];
        consultasSalvas.forEach((item, idx) => {
            const card = document.createElement("article");
            card.className = "card-consulta";
            card.innerHTML = `
                <div class="consulta-topo">
                    <span class="status-confirmado">Consulta confirmada</span>
                    <span class="consulta-codigo">#CS00${idx + 3}</span>
                </div>
                <div class="consulta-info">
                    <div class="consulta-icone" aria-hidden="true">✚</div>
                    <div>
                        <h3>Consulta ${item.especialidade}</h3>
                        <p>${item.profissional}</p>
                    </div>
                </div>
                <div class="consulta-detalhes">
                    <div><span>Data</span><strong>${item.data}</strong></div>
                    <div><span>Horário</span><strong>${item.horario}</strong></div>
                    <div><span>Modalidade</span><strong>${item.modalidade}</strong></div>
                </div>
                <div class="consulta-rodape">
                    <span class="link-detalhes">Pago (${item.formaPagamento || "Confirmado"})</span>
                    <button type="button" class="botao-cancelar">Cancelar consulta</button>
                </div>
            `;
            listaConsultas.appendChild(card);
        });

        listaConsultas.addEventListener("click", (e) => {
            if (e.target.classList.contains("link-detalhes") && e.target.dataset.esp) {
                const dados = {
                    especialidade: e.target.dataset.esp,
                    profissional: e.target.dataset.prof,
                    data: e.target.dataset.data,
                    horario: e.target.dataset.hora,
                    modalidade: "Presencial"
                };
                localStorage.setItem("novaConsulta", JSON.stringify(dados));
            }

            if (e.target.classList.contains("botao-cancelar")) {
                if (confirm("Tem certeza que deseja cancelar esta consulta?")) {
                    e.target.closest(".card-consulta").remove();
                }
            }
        });
    }

    if (formAgendamento) {
        formAgendamento.addEventListener("submit", (e) => {
            e.preventDefault();
            const dataRaw = document.getElementById("dataConsulta").value;
            const partes = dataRaw.split("-");
            const dataFormatada = partes.length === 3 ? `${partes[2]}/${partes[1]}/${partes[0]}` : dataRaw;

            const novaConsulta = {
                especialidade: document.getElementById("especialidade").value,
                profissional: document.getElementById("profissional").value,
                data: dataFormatada,
                horario: document.getElementById("horario").value,
                modalidade: document.getElementById("modalidade").value
            };

            localStorage.setItem("novaConsulta", JSON.stringify(novaConsulta));
            window.location.href = "pagamento.html";
        });
    }

    // 4. Tela de Pagamento (pages/pagamento.html)
    const formPagamento = document.getElementById("formPagamento");
    if (formPagamento) {
        const consultaPendente = JSON.parse(localStorage.getItem("novaConsulta"));
        if (consultaPendente) {
            document.getElementById("pagEspecialidade").textContent = consultaPendente.especialidade;
            document.getElementById("pagProfissional").textContent = consultaPendente.profissional;
            document.getElementById("pagData").textContent = consultaPendente.data;
            document.getElementById("pagHorario").textContent = consultaPendente.horario;
        }

        formPagamento.addEventListener("submit", (e) => {
            e.preventDefault();
            const opcao = formPagamento.querySelector("input[name='forma_pagamento']:checked");
            if (consultaPendente) {
                consultaPendente.formaPagamento = opcao ? opcao.value.toUpperCase() : "PIX";
                const salvas = JSON.parse(localStorage.getItem("consultasSalvas")) || [];
                salvas.push(consultaPendente);
                localStorage.setItem("consultasSalvas", JSON.stringify(salvas));
                localStorage.removeItem("novaConsulta");
            }
            alert("Agendamento e pagamento confirmados com sucesso!");
            window.location.href = "meusagendamentos.html";
        });
    }

    // 5. Tela de Perfil (pages/perfil.html)
    const formPerfil = document.getElementById("formPerfil");
    if (formPerfil) {
        const perfilSalvo = JSON.parse(localStorage.getItem("perfilPaciente"));
        if (perfilSalvo) {
            document.getElementById("perfilNome").value = perfilSalvo.nome;
            document.getElementById("perfilEmail").value = perfilSalvo.email;
            document.getElementById("perfilTelefone").value = perfilSalvo.telefone;
            document.getElementById("perfilNascimento").value = perfilSalvo.nascimento;
            document.getElementById("perfilConvenio").value = perfilSalvo.convenio;
            document.getElementById("perfilNomeExibicao").textContent = perfilSalvo.nome;
            document.getElementById("perfilEmailExibicao").textContent = perfilSalvo.email;
        } else if (usuarioEmail) {
            document.getElementById("perfilEmail").value = usuarioEmail;
            document.getElementById("perfilEmailExibicao").textContent = usuarioEmail;
        }

        formPerfil.addEventListener("submit", (e) => {
            e.preventDefault();
            const dadosPerfil = {
                nome: document.getElementById("perfilNome").value,
                email: document.getElementById("perfilEmail").value,
                telefone: document.getElementById("perfilTelefone").value,
                nascimento: document.getElementById("perfilNascimento").value,
                convenio: document.getElementById("perfilConvenio").value
            };
            localStorage.setItem("perfilPaciente", JSON.stringify(dadosPerfil));
            document.getElementById("perfilNomeExibicao").textContent = dadosPerfil.nome;
            document.getElementById("perfilEmailExibicao").textContent = dadosPerfil.email;
            alert("Dados do perfil atualizados com sucesso!");
        });
    }
});
