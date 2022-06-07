// texto a encriptar/desencriptar
var textoIngresado= document.querySelector("#texto");
textoIngresado.addEventListener("click",function(){
    textoIngresado.value="";
})

//boton encriptar
var encriptar = document.querySelector("#btn-encriptar");
encriptar.addEventListener("click", function(event){
console.log("Encriptando");

});
//boton desencriptar
var desencriptar = document.querySelector("#btn-desencriptar");
desencriptar.addEventListener("click", function(event){
console.log("Desencriptando");
});
//boton copiar
var copiar = document.querySelector("#btn-copiar");
copiar.addEventListener("click", function(event){
console.log("Copiando");
});