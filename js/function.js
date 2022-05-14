function circulo() {

var selector = document.getElementById("figura") ;

selector.className = ' ';

selector.classList.toggle("circulo")



}

function cuadrado() {

    var selector = document.getElementById("figura") ;

    selector.className =  ' ';
    
    selector.classList.toggle("cuadrado")
    
    
    
    }

    function arriba() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("arriba")


        
    }

    function abajo() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("abajo")


        
    }

    function derecha() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("derecha")


        
    }

    function izq() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("izq")


        
    }

    function dgab() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("dgab")


        
    }

    function dgai() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("dgai")


        
    }

    function rombo() {

        var selector = document.getElementById("figura") ;
    
        selector.className =  ' ';
        
        selector.classList.toggle("rombo")

    }
    
    function tri() {

        var selector = document.getElementById("figura") ;
    
        selector.className =  ' ';
        
        selector.classList.toggle("tri")

    }

    function imagen() {

        var selector = document.getElementById("figura") ;
    
        selector.className =  ' ';
        
        selector.classList.toggle("imagen")

    }

    function rech() {

        var selector = document.getElementById("figura") ;
    
        selector.className =  ' ';
        
        selector.classList.toggle("rech")

    }

    function recv() {

        var selector = document.getElementById("figura") ;
    
        selector.className =  ' ';
        
        selector.classList.toggle("recv")

    }





    function capturarDatos() {

    //capturamos los valores de los campos  
    //atravez de sus id y el atributo.value
      var nombre= document.getElementById("cnombres").value;
      var edad= document.getElementById("cedad").value;
      var fecha = document.getElementById("cfnacimiento").value;
      var genero = document.getElementById("cgenero").value;
      var email=document.getElementById("cemail").value;
      var desc= document.getElementById("cdescripcion"). value;
      var color = document.getElementById("ccolor").value;


    
      //capturamos los parrafos donde mostraremos la informacion

      var name=document.getElementById("mnombres");
      var age = document.getElementById("medad");
      var fechanac =document.getElementById("mfnacimiento");
      var gender = document.getElementById("mgenero");
      var correo=document.getElementById("memail");
      var descrip=document.getElementById("mdescripcion");

      name.textContent=nombre;
      age.textContent=edad;
      fechanac.textContent=fecha;
      gender.textContent=genero;
      correo.textContent=email;
      descrip.textContent=desc;
   
      // capturamos el contenedor del avatar para luego cambiar su color del fondo


      var selector= document.getElementById("card-avatar");

      //if (color=="azul") {
         // selector.style.backgroundColor="blue";
        
    //} //else if (color=="morado"){
   // selector.style.backgroundColor="purple";


   // }
    
//}

 

switch(color) {
    case "azul":
       selector.style.backgroundColor="blue";
      break;
    case "morado":
       selector.style.backgroundColor="purple";
      break;
      case "verde":
     selector.style.backgroundColor="green";
     break;

}
    

//capturar la foto del avatar para cambiar
// segun genero
var imgAvatar=document.getElementById("foto");

if (genero== "masculino"){
imgAvatar.src ="img/men.jpg";
}
else if (genero== "femenino"){

    imgAvatar.src="img/woman.png";
}


    }

