function metaTagsGenerator() {
    geradorDTags = ""
}









function megaSena2422() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "6"  
    dataMega = ''
    if (diaDaSemana == "3") {
        dataMega = "quarta-feira"
    } 
    else if (diaDaSemana == "4") {
        dataMega = "quinta-feira"
    } 
    else if (diaDaSemana == "5") {
        dataMega = "sexta-feira"
    } 
    else if (diaDaSemana == "6") {
        dataMega = "sábado"
    } 
    else if (diaDaSemana == "7") {
        dataMega = "domingo"
    } 
    else if (diaDaSemana == "1") {
        dataMega = "terça-feira"
    } 
    else if (diaDaSemana == "2") {
        dataMega = "terça-feira"
    } 
    else {
        dataMega = "Dia não encontrado"
    } 
    concurso = 2422
    data = "23/10/2021"
    bola01 = "02"
    nS1 = bola01
    bola02 = "07"
    nS2 = bola02
    bola03 = "10"
    nS3 = bola03
    bola04 = "20"
    nS4 = bola04
    bola05 = "30"
    nS5 = bola05
    bola06 = "46"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1

    premioSenaEstimado = "26.500.000,00"
    ganhadorSena = "0"
    premioSena = "0"
    ganhadorQuina = "110"
    premioQuina = "26.323,93"
    ganhadorQuadra = "6.942"
    premioQuadra = "595,88"
    acumulaOuGanhaP = ""
    premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 27/10/2021"
    valorEstimado = "33.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`


    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

   

    

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong>${acumulaOuGanhaP}</strong> Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `No concurso da Mega-sena passado, que foi o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha).`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concursoP}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    sTPalpite.innerHTML = `<strong>${acumulaOuGanhaP}.</strong> Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${respostaPalpiteAcumulado} <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`

    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}

/* iniciando as funções */
















function megaSena24222() {
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */

    diaDaSemana = "6"  
    concurso = "2422"
    cMegaPassado = concurso
    data = "23/10/2021"
    bola01 = "02"
    nS1 = bola01
    bola02 = "07"
    nS2 = bola02
    bola03 = "10"
    nS3 = bola03
    bola04 = "20"
    nS4 = bola04
    bola05 = "30"
    nS5 = bola05
    bola06 = "46"
    nS6 = bola06  
    dataMega = ''
    if (diaDaSemana == "3") {
        dataMega = "quarta-feira"
    } 
    else if (diaDaSemana == "4") {
        dataMega = "quinta-feira"
    } 
    else if (diaDaSemana == "5") {
        dataMega = "sexta-feira"
    } 
    else if (diaDaSemana == "6") {
        dataMega = "sábado"
    } 
    else if (diaDaSemana == "7") {
        dataMega = "domingo"
    } 
    else if (diaDaSemana == "1") {
        dataMega = "terça-feira"
    } 
    else if (diaDaSemana == "2") {
        dataMega = "terça-feira"
    } 
    else {
        dataMega = "Dia não encontrado"
    } 
    

    
    
    
    /* Ganhadores */
    ganhadorSena = "0"
    premioDSena = "0"
    ganhadorQuina = "110"
    premioQuina = "26.323,93"
    ganhadorQuadra = "6942"
    premioQuadra = "595,88"
    acumulaOuGanhaP = ""
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `${ganhadorSena} Ganhador(es)`
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!! "
        acumulaOuGanha.innerHTML = `ACUMULOU!!`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    

    /* Proximo Sorteio - Inserir Valores */

    
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioDSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`
    
    pSorteio = "2222/10/2021"
    valorEstimado = "33.000.000,00"


    
    /* Novas variaveis para descrever concurso anterior */
    

    
    
        
    
    
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`


    

    

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `${acumulaOuGanhaP}Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSena} de reais, confira agora mesmo o resultado da mega-sena ${concurso}.`
    

    rMegaA.innerHTML = `No concurso da Mega-sena passado, que foi o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`

    

    

    

    
    
    /*Para o blog */
    
    
}


function megaSena2421passou() {
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */

    
    diaDaSemana = "3"  
    dataMega = ''
    if (diaDaSemana == "3") {
        dataMega = "quarta-feira"
    } 
    else if (diaDaSemana == "4") {
        dataMega = "quinta-feira"
    } 
    else if (diaDaSemana == "5") {
        dataMega = "sexta-feira"
    } 
    else if (diaDaSemana == "6") {
        dataMega = "sábado"
    } 
    else if (diaDaSemana == "7") {
        dataMega = "domingo"
    } 
    else if (diaDaSemana == "1") {
        dataMega = "terça-feira"
    } 
    else if (diaDaSemana == "2") {
        dataMega = "terça-feira"
    } 
    else {
        dataMega = "Dia não encontrado"
    } 
    concurso = "2451"
    data = "23/10/2021"
    bola01 = "02"
    bola02 = "10"
    bola03 = "10"
    bola04 = "10"
    bola05 = "10"
    bola06 = "09"
    /* Ganhadores */
    ganhadorSena = "0"
    premioSena = "6"
    ganhadorQuina = "3"
    premioQuina = "5"
    ganhadorQuadra = "4"
    premioQuadra = "4"
    acumulaOuGanhaP = ""
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `${ganhadorSena} Ganhador(es)`
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!! "
        acumulaOuGanha.innerHTML = `ACUMULOU!!`
    }

    pSorteio = " 25/10/2021"
    valorEstimado = "26.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`

        
    
    
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${pSorteio} - ${dataMega}`
    sTConcuros.innerHTML = `${acumulaOuGanhaP}Sorteio da mega-sena aconteceu hoje ${dataMega}, com prêmio estimado em R$ ${premioSena} de reais, confira agora mesmo o resultado da mega-sena ${concurso}`
    megaSenaAnterior.innerHTML = `${resultAnteriorDaMegaSena}`

    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

    /*Para o blog */
    
    
}

function megaSena2420correta() {
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "6"  
    dataMega = ''
    if (diaDaSemana == "3") {
        dataMega = "quarta-feira"
    } 
    else if (diaDaSemana == "4") {
        dataMega = "quinta-feira"
    } 
    else if (diaDaSemana == "5") {
        dataMega = "sexta-feira"
    } 
    else if (diaDaSemana == "6") {
        dataMega = "sábado"
    } 
    else if (diaDaSemana == "7") {
        dataMega = "domingo"
    } 
    else if (diaDaSemana == "1") {
        dataMega = "terça-feira"
    } 
    else if (diaDaSemana == "2") {
        dataMega = "terça-feira"
    } 
    else {
        dataMega = "Dia não encontrado"
    } 
    concurso = "2422"
    cMegaPassado = concurso
    data = "23/10/2021"
    bola01 = "02"
    nS1 = bola01
    bola02 = "07"
    nS2 = bola02
    bola03 = "10"
    nS3 = bola03
    bola04 = "20"
    nS4 = bola04
    bola05 = "30"
    nS5 = bola05
    bola06 = "46"
    nS6 = bola06  

    
    
    
    /* Ganhadores */
    premioSenaEstimado = "26.500.000,00"
    ganhadorSena = "0"
    premioSena = "0"
    ganhadorQuina = "110"
    premioQuina = "26.323,93"
    ganhadorQuadra = "6.942"
    premioQuadra = "595,88"
    acumulaOuGanhaP = ""
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 27/10/2021"
    valorEstimado = "33.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`


    
    /* Novas variaveis para descrever concurso anterior */
    

    
    
        
    
    
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`


    

    

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong>${acumulaOuGanhaP}</strong>Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `No concurso da Mega-sena passado, que foi o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha).`

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}

function megaSenafuncionando() {
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */

    diaDaSemana = "3"  
    dataMega = ''
    if (diaDaSemana == "3") {
        dataMega = "quarta-feira"
    } 
    else if (diaDaSemana == "4") {
        dataMega = "quinta-feira"
    } 
    else if (diaDaSemana == "5") {
        dataMega = "sexta-feira"
    } 
    else if (diaDaSemana == "6") {
        dataMega = "sábado"
    } 
    else if (diaDaSemana == "7") {
        dataMega = "domingo"
    } 
    else if (diaDaSemana == "1") {
        dataMega = "terça-feira"
    } 
    else if (diaDaSemana == "2") {
        dataMega = "terça-feira"
    } 
    else {
        dataMega = "Dia não encontrado"
    } 
    concurso = "2451"
    cMegaPassado = concurso
    data = "23/10/2021"
    bola01 = "20"
    nS1 = bola01
    bola02 = "18"
    nS2 = bola02
    bola03 = "20"
    nS3 = bola03
    bola04 = "30"
    nS4 = bola04
    bola05 = "50"
    nS5 = bola05
    bola06 = "60"
    nS6 = bola06  

    
    
    
    /* Ganhadores */
    ganhadorSena = "0"
    premioSena = "6"
    ganhadorQuina = "3"
    premioQuina = "5"
    ganhadorQuadra = "4"
    premioQuadra = "4"
    acumulaOuGanhaP = ""
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `${ganhadorSena} Ganhador(es)`
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!! "
        acumulaOuGanha.innerHTML = `ACUMULOU!!`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 25/10/2021"
    valorEstimado = "26.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`


    
    /* Novas variaveis para descrever concurso anterior */
    

    
    
        
    
    
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`


    

    

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${pSorteio} - ${dataMega}`
    sTConcuros.innerHTML = `${acumulaOuGanhaP}Sorteio da mega-sena aconteceu hoje ${dataMega}, com prêmio estimado em R$ ${premioSena} de reais, confira agora mesmo o resultado da mega-sena ${concurso}.`
    

    rMegaA.innerHTML = `No concurso da Mega-sena passado, que foi o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}




function recarregarPagina() {
    window.document.location = location
}