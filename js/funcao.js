$(document).ready(function(){
    $('.modal').modal();
    $('.tap-target').tapTarget();
    backgroundVideo.play();
});
var array = [];
var total = 0;
var valor = 0;
var removeu = [];
var video;

//carregar video ao modificar nas configurações
var loadVideo = function(event, idloadimg) {
    var output = document.getElementById(idloadimg);

    output.src = URL.createObjectURL(event.target.files[0]);
    
    output.play();

    $('.modal').modal('close');
};


//Alterar Logo ao modificar nas configurações
var loadImg = function(event, idloadimg) {
    var output = document.getElementById(idloadimg);
    output.src = URL.createObjectURL(event.target.files[0]);

    $('.modal').modal('close');
};



//carregar lista de pessoas a serem sorteadas
$(document).on('change','#fileUpload', function(){
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.txt)$/;
    if (typeof (FileReader) != "undefined") {
        var reader = new FileReader();
        reader.onload = function (e) {
            array = e.target.result.split("\n");
        }
        reader.readAsText($("#fileUpload")[0].files[0], 'ISO-8859-1');
    } else {
        alert("Erro ao Carregar Arquivo");
    }
    $('.modal').modal('close');
    $('#sortear').removeClass('scale-out');

    document.getElementById('ant1').innerHTML = "";
    document.getElementById('ant2').innerHTML = "";
    document.getElementById('ant3').innerHTML = "";
    document.getElementById('dvCSV').innerHTML = ""; 
});

/*
    sortear pessoas da lista
    diminuir contador da lista
    remover nome da lista
*/
$(document).on('click','#sortear', function(){  
    total = array.length;

    if (total ==1){
        $('#sortear').addClass('scale-out');
    }
    if (total > 0) {
        if (document.getElementById("fileUpload").value=="" ) {
            document.getElementById('error').innerHTML = "Selecione um arquivo de texto"; 
        }else{
            document.getElementById('ant1').innerHTML = document.getElementById('ant2').innerHTML;
            document.getElementById('ant2').innerHTML = document.getElementById('ant3').innerHTML;
            document.getElementById('ant3').innerHTML = document.getElementById('dvCSV').innerHTML;
            valor = Math.floor(Math.random() * total);
            document.getElementById('dvCSV').innerHTML = array[valor]; 
            document.getElementById('qtd').innerHTML = total-1;
            array.splice(valor,1);
        }                
    }
    setTimeout(function(){
        $("#error").text("");
    },2000);
});