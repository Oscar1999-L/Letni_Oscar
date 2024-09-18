function iniciarCuentaRegresiva(fechaObjetivo) {
    const contador = document.getElementById('contador');
  
    function actualizarContador() {
      const ahora = new Date().getTime();
      const distancia = fechaObjetivo - ahora;
  
      if (distancia <= 0) {
        contador.textContent = "¡El evento ya ha comenzado!";
        clearInterval(intervalo);
        return;
      }
  
      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  
      contador.textContent = `${dias} d, ${horas} h, ${minutos} m, ${segundos} s`;
    }
  
    const intervalo = setInterval(actualizarContador, 1000);
  }
  
  // Fecha objetivo: 15 de noviembre de 2024
  const fechaObjetivo = new Date('November 15, 2024 00:00:00').getTime();
  iniciarCuentaRegresiva(fechaObjetivo);
  

  // Lista de personas con el número de invitados que pueden llevar
const guestsList = [
  { name: "Leticia Dorantes", totalGuests: 1 },
  { name: "Layalet Dorantes", totalGuests: 2 },
  { name: "Eugenia Varela", totalGuests: 1 },
  { name: "Yazmin Dorantes", totalGuests: 2 },
  { name: "Gregoria Leal", totalGuests: 1 },
  { name: "Antonio Dorantes", totalGuests: 1 },
  { name: "Candelaria Diaz", totalGuests: 2 },
  { name: "Andrea Dorantes", totalGuests: 2 },
  { name: "Enrique Dorantes", totalGuests: 1 },
  { name: "Leticia Pazos", totalGuests: 2 },
  { name: "Luis Pazos", totalGuests: 3 },
  { name: "Yamilet Pazos", totalGuests: 1 },
  { name: "Faustino Dorantes", totalGuests: 2 },
  { name: "Laura Dorantes", totalGuests: 5 },
  { name: "Jessica Sanders", totalGuests: 2 },
  { name: "Yael Martell", totalGuests: 1 },
  { name: "Kelly Trujillo", totalGuests: 2 },
  { name: "Zaira Espinosa", totalGuests: 2 },
  { name: "Ryan Owen", totalGuests: 1 },
  { name: "Camila Ferreras", totalGuests: 1 },
  { name: "Yaneiry Guerrero", totalGuests: 1 },
  { name: "Adrian Aburto", totalGuests: 1 },
  { name: "Naian Razo", totalGuests: 1 },
  { name: "Karen Herrera", totalGuests: 2 },
  { name: "Noemi Cordero", totalGuests: 1 },
  { name: "Irene Leal", totalGuests: 1 },
  { name: "Severiana Leal", totalGuests: 1 },
  { name: "Valeria Segura", totalGuests: 1 },
  { name: "Herlindo Ramirez", totalGuests: 2 },
  { name: "Mariana Ramirez", totalGuests: 5 },
  { name: "José2 Castro", totalGuests: 2 }, 
  { name: "Roberto Texon", totalGuests: 1 }, 
  { name: "Florentina Rizo", totalGuests: 2 }, 
  { name: "Guillermo Gonzalez", totalGuests: 2 }, 
  { name: "Eduardo Mendez", totalGuests: 2 }, 
  { name: "Derek Franco", totalGuests: 2 }, 
  { name: "Guillermo Milla", totalGuests: 2 }, 
  { name: "Sandra Angeles", totalGuests: 4 },
  { name: "Pedro Torres", totalGuests: 2 }, 
  { name: "Jann Flores", totalGuests: 1 }, 
  { name: "Esteban Guzman", totalGuests: 2 }, 
  { name: "Greetel Perez", totalGuests: 4 }, 
  { name: "Esther Moya", totalGuests: 1 }, 
  { name: "Yolanda Moya", totalGuests: 4 }, 
  { name: "Gerardo Moya", totalGuests: 5 }, 
  { name: "Mario Moya", totalGuests: 4 }, 
  { name: "Marta Moya", totalGuests: 1 }, 
  { name: "Jair Gonzalez", totalGuests: 2 }, 
  { name: "Lilian Mendez", totalGuests: 2 }, 
  { name: "Daniel Leon", totalGuests: 1 }, 
  { name: "Galilea Morales", totalGuests: 2 }, 
  { name: "Angel Torres", totalGuests: 2 }, 
  { name: "Emmanuel Alvarado", totalGuests: 1 }, 
];

// Función para buscar el nombre en la lista
function searchName() {
  const nameInput = document.getElementById("nameInput").value.toLowerCase();
  const result = document.getElementById("result");
  
  // Busca en la lista
  const guest = guestsList.find(person => person.name.toLowerCase() === nameInput);

  // Muestra el resultado
  var num_persona = 'persona';

  if (guest.totalGuests > 1){
      num_persona = 'personas';
  }

  if (guest) {
      result.innerHTML = `¡Hola ${guest.name}! Invitación para ${guest.totalGuests} ${num_persona}.`;
  } else {
      result.innerHTML = "Nombre no encontrado en la lista.";
  }
}
