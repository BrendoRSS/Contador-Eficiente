function contagem() {
var tini = document.getElementById('txtini')
var inicio = Number(tini.value)
var tfim = document.getElementById('txtfim')
var fim = Number(tfim.value)
var tpass = document.getElementById('txtpassos')
var passos = Number(tpass.value)
var emoji = document.getElementById('txtemoji')
var img = document.createElement('img')
img.setAttribute('id', 'emoji')
img.setAttribute('src', 'emojidedo.png')
var c = 1
/*res.innerHTML = `${Number(inicio)}` mostrar na tela*/

if (inicio == '' || fim == '') {
    res.innerHTML = (`Impossível contar!  0`)
}else if(passos == '' || passos<=0) {
    window.alert ('Passos inválidos! Considerando PASSO 1')
    passos = 1
    res.innerHTML = (`Contando: ${inicio}`)
        if (inicio<fim) {
        while (inicio<fim){
            c = inicio + passos
            if(c<=fim){
                res.innerHTML += (` ${c} `)}
            inicio = inicio + passos
        }
        /*
        }else if(inicio>fim){
            while (inicio>fim){
                c = inicio - passos
                if(c<=fim){
                    res.innerHTML += (` ${c} `)}
                fim = fim + passos 
        }
        ANALIZAR A LÓGICA AMANHÃ
        */

}else if(inicio !== '' && fim !== '' && passos !== '') {
    res.innerHTML = (`Contando: ${inicio}`)
    while (inicio<fim){
        c = inicio + passos
        if(c<=fim){
        res.innerHTML += (` ${c} `)}
        inicio = inicio + passos
    }

}
}
}