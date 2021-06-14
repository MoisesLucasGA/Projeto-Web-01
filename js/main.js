var id = 0
function Adicionar() {
    var nome = document.getElementById("nome").value
    var texto = document.getElementById("mensagem").value
    var forum  = document.getElementById("recados").innerHTML
    if(nome != "" && texto != ""){
        forum = forum+"<p id="+id+">"+nome+": "+texto+"<button id = "+id+" class='btnExcluir' onclick='excluir(this.id)'>Excluir</button></p>"
        document.getElementById("recados").innerHTML = forum
        id++
    }else{
        alert('Preencha os campos')
    }
    
}
function excluir(id){
    var elmnt = document.getElementById(id)
    elmnt.remove()
}

function creditos(){
    alert('Desenvolvimento de Software para Web\nMoisés Lucas Gondim de Almeida')
}