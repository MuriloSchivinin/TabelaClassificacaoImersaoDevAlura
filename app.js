//DECLARANDO VARIÁVEIS DE TIMES

var primavera = {
    nome: 'PRIMAVERA E.C',
    defeat: 0,
    tie: 0,
    victory: 0
}

var corinthians = {
    nome: 'CORINTHIANS',
    defeat: 0,
    tie: 0,
    victory: 0
}

var flamengo = {
    nome: 'FLAMENGO',
    defeat: 0,
    tie: 0,
    victory: 0
}

var santos = {
    nome: 'SANTOS',
    defeat: 0,
    tie: 0,
    victory: 0
}

var atletico = {
    nome: 'ATLETICO MG',
    defeat: 0,
    tie: 0,
    victory: 0
}

var saoPaulo = {
    nome: 'SÃO PAULO',
    defeat: 0,
    tie: 0,
    victory: 0
}

var gremio = {
    nome: 'GRÊMIO',
    defeat: 0,
    tie: 0,
    victory: 0
}

var palmeiras = {
    nome: 'PALMEIRAS',
    defeat: 0,
    tie: 0,
    victory: 0
}

//ARRAY QUE AGRUPA OS OBJETOS DOSS TIMES
var teams = [
    primavera,
    corinthians,
    flamengo,
    santos,
    atletico,
    saoPaulo,
    gremio,
    palmeiras
]


//CRIANDO FUNÇÃO PARA CALCULAR PONTUAÇÃO
function calculatePoints(time) {
    var points = (time.victory * 3) + time.tie

    return points
}

//ATRIBUINDO O VALOR DOS PONTOS PARA CADA TIME
primavera.points = calculatePoints(primavera)
corinthians.points = calculatePoints(corinthians)
flamengo.points = calculatePoints(flamengo)
santos.points = calculatePoints(santos)
atletico.points = calculatePoints(atletico)
saoPaulo.points = calculatePoints(saoPaulo)
gremio.points = calculatePoints(gremio)
palmeiras.points = calculatePoints(palmeiras)


//FUNÇÃO LOOP QUE IRÁ APRESENTAR TODOS OS TIMES CADASTRADOS NAS VARIÁVEIS ACIMA E TAMBÉM OS BOTÕES DE AÇÃO
function displayTeams(teams) {
    var html = ""
    for (var i = 0; i < teams.length; i++) {
        html += `<tr style="font-weight: bold; font-size: 20px"> <td>${teams[i].nome}</td>`
        html += `<td>${teams[i].victory}</td>`
        html += `<td>${teams[i].tie}</td>`
        html += `<td>${teams[i].defeat}</td>`
        html += `<td>${teams[i].points}</td>`
        html += `<td class="btns"> <button onClick="addVictory(${[i]})">Vitória</button>`
        html += `<td class="btns"> <button onClick="addTie(${[i]})">Empate</button>`
        html += `<td class="btns"> <button onClick="addDefeat(${[i]})">Derrota</button></tr>`
    }

    //BUSCAMOS A ESTRUTURA DA ÁREA DE DADOS DA TABELA
    var tablePlayers = document.getElementById('table-players')
    //INSERINDO O QUE FOI MONTADO NO LOOP ACIMA
    tablePlayers.innerHTML = html
}

//CHAMANDO A FUNÇÃO QUE MONTA OS DADOS E APRESENTA NA TELA
displayTeams(teams)

//FUNÇÃO CHAMADA QUANDO O BOTÃO DE ADICIONAR VITÓRIA FOR CHAMADO
function addVictory(index) {
    let team = teams[index]
    team.victory++
    team.points = calculatePoints(team)

    //TODA VEZ QUE ATUALIZAR AS INFORMAÇÕES DE VITÓRIA, CHAMAREMOS ESSA FUNÇÃO PARA ATUALIZAR OS DADOS NA TELA
    displayTeams(teams)
}

//FUNÇÃO CHAMADA QUANDO O BOTÃO DE ADICIONAR EMPATE FOR CHAMADO
function addTie(index) {
    let team = teams[index]
    team.tie++
    team.points = calculatePoints(team)

    //TODA VEZ QUE ATUALIZAR AS INFORMAÇÕES DE EMPATE, CHAMAREMOS ESSA FUNÇÃO PARA ATUALIZAR OS DADOS NA TELA
    displayTeams(teams)
}

//FUNÇÃO CHAMADA QUANDO O BOTÃO DE ADICIONAR DERROTA FOR CHAMADO
function addDefeat(index) {
    let team = teams[index]
    team.defeat++

    //TODA VEZ QUE ATUALIZAR AS INFORMAÇÕES DE DERROTA, CHAMAREMOS ESSA FUNÇÃO PARA ATUALIZAR OS DADOS NA TELA
    displayTeams(teams)
}

