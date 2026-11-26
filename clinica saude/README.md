# ✚ Clínica Saúde+ | Projeto Final de Interface Homem-Máquina (IHM)

Protótipo funcional de uma aplicação web para a **Clínica Saúde+**, desenvolvido como projeto final da disciplina de **Interface Homem-Máquina (IHM)** do curso de Tecnologia em Análise e Desenvolvimento de Sistemas (ADS) — IF Baiano, Campus Guanambi.

---

## 🎯 Objetivo do Projeto
Facilitar o acesso dos pacientes aos serviços de saúde por meio de uma interface digital intuitiva, acolhedora e responsiva. O sistema permite visualizar especialidades, acompanhar campanhas de vacinação, realizar login, gerenciar consultas (presenciais e telemedicina), editar dados cadastrais e efetuar pagamentos de forma simples e rápida.

---

## ✨ Telas e Funcionalidades
* **Página Inicial (`index.html`):** Apresentação institucional, campanhas ativas de vacinação, diferenciais de atendimento e catálogo de serviços.
* **Autenticação (`pages/login.html`):** Acesso do paciente via e-mail/senha ou login rápido via WhatsApp.
* **Agendamentos (`pages/meusagendamentos.html`):** Listagem de consultas marcadas, cancelamento com confirmação e formulário para solicitação de novos atendimentos.
* **Pagamento (`pages/pagamento.html`):** Resumo dinâmico da consulta selecionada e escolha entre Pix, Cartão de Crédito ou Pagamento Presencial.
* **Perfil do Paciente (`pages/perfil.html`):** Visualização e edição de dados cadastrais, telefone, data de nascimento e convênio.

---

## 🎨 Princípios de IHM Aplicados
* **Visibilidade do Status do Sistema:** Uso de selos informativos e indicadores visuais na barra de navegação.
* **Correspondência entre o Sistema e o Mundo Real:** Linguagem clara, acolhedora e humanizada voltada ao contexto médico.
* **Consistência e Padrões:** Identidade visual unificada em todas as telas, mantendo cabeçalho, rodapé, tipografia e paleta de cores padronizadas.
* **Prevenção de Erros e Acessibilidade:** Confirmação antes de cancelar consultas, validação de campos obrigatórios, estrutura semântica HTML5 e atributos `aria-hidden` para ícones decorativos.

---

## 📁 Estrutura de Pastas
```text
FINAL-IHM/
├── index.html                  # Página Principal (Landing Page)
├── README.md                   # Documentação do projeto
├── .gitignore                  # Arquivos ignorados pelo Git
├── assets/
│   ├── css/
│   │   └── style.css           # Folha de estilos unificada
│   └── scripts/
│       └── app.js              # Lógica e integração entre as telas
└── pages/
    ├── login.html              # Tela de Login do Paciente
    ├── meusagendamentos.html   # Tela de Consultas e Novo Agendamento
    ├── pagamento.html          # Tela de Finalização e Pagamento
    └── perfil.html             # Tela de Perfil / Conta do Paciente
```

---

## 🚀 Como Executar o Projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/fabianocba/FINAL-IHM.git
   ```
2. Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no Visual Studio Code.

---

## 👥 Equipe de Desenvolvimento
* **Gustavo Veber Cerqueira Silva** — [@GustavoVeber](https://github.com/GustavoVeber)
* **Fabiano** — [@fabianocba](https://github.com/fabianocba)
* **Camila de Fátima** — [@camiladefatimaoliveiraalves7-lgtm](https://github.com/camiladefatimaoliveiraalves7-lgtm)
* **Dafini Costa** — [@dafini-costa](https://github.com/dafini-costa)
* **Vanessa dos Santos** — [@vanessadossantossilva](https://github.com/vanessadossantossilva)
