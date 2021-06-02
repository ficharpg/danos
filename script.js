var soco = {nome:'Soco',dano:'?',roll:'?'}
var pistola = {nome:'Desert Eagle',dano:'?',roll:'?'}


var armas = [soco, pistola]
verarmas(armas)

function verarmas(armas){
	var html = ""
	for(var i=0;i<armas.length;i++){
		html += "<tr><td>"+armas[i].nome+"</td>"
		html += "<td>"+armas[i].dano+"</td>"
		html += "<td>"+armas[i].roll+"</td>"
	}
}