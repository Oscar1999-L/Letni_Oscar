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

    // Usar padStart para agregar ceros si el número es menor a 10
    const formatoDias = dias.toString().padStart(2, '0');
    const formatoHoras = horas.toString().padStart(2, '0');
    const formatoMinutos = minutos.toString().padStart(2, '0');
    const formatoSegundos = segundos.toString().padStart(2, '0');

    contador.textContent = `${formatoDias} d. ${formatoHoras} h. ${formatoMinutos} m. ${formatoSegundos} s.`;
  }

  const intervalo = setInterval(actualizarContador, 1000);
}

// Fecha objetivo: 15 de noviembre de 2024
const fechaObjetivo = new Date('November 15, 2024 17:30:00').getTime();
iniciarCuentaRegresiva(fechaObjetivo);

  

  // Lista de personas con el número de invitados que pueden llevar
const guestsList = [
  { name: "Leticia Dorantes", totalGuests: 1 },
{ name: "Layalet Dorantes", totalGuests: 1 },
{ name: "Maria Varela", totalGuests: 1 },
{ name: "Yazmín Dorantes", totalGuests: 2 },
{ name: "Gregoria Leal", totalGuests: 1 },
{ name: "Antonio Dorantes", totalGuests: 1 },
{ name: "Candelaria Diaz", totalGuests: 1 },
{ name: "Andrea Dorantes", totalGuests: 2 },
{ name: "Enrique Dorantes", totalGuests: 1 },
{ name: "Leticia Pazos", totalGuests: 2 },
{ name: "Luis Pazos", totalGuests: 3 },
{ name: "Yamilet Pazos", totalGuests: 1 },
{ name: "Faustino Dorantes", totalGuests: 2 },
{ name: "Laura Dorantes", totalGuests: 5 },
{ name: "Jessica Sanders", totalGuests: 2 },
{ name: "Yael Martell", totalGuests: 2 },
{ name: "Kelly Trujillo", totalGuests: 2 },
{ name: "Zaira Espinosa", totalGuests: 2 },
{ name: "Ryan Owen", totalGuests: 1 },
{ name: "Camila Ferreras", totalGuests: 1 },
{ name: "Adrian Aburto", totalGuests: 1 },
{ name: "Naian Razo", totalGuests: 1 },
{ name: "Karen Herrera", totalGuests: 2 },
{ name: "Noemí Cordero", totalGuests: 1 },
{ name: "Irene Leal", totalGuests: 1 },
{ name: "Severiana Leal", totalGuests: 1 },
{ name: "María Luna", totalGuests: 1 },
{ name: "María Zamora", totalGuests: 1 },
{ name: "Ivan Cabrera", totalGuests: 2 },
{ name: "Jose Cabrera", totalGuests: 1 },
{ name: "Herlindo Ramirez", totalGuests: 2 },
{ name: "Mariana Ramirez", totalGuests: 5 },
{ name: "Matrimonio Castro Amaro", totalGuests: 2 },
{ name: "Roberto Texon", totalGuests: 1 },
{ name: "Florentina Rizo", totalGuests: 1 },
{ name: "Derek Franco", totalGuests: 1 },
{ name: "Guillermo Milla", totalGuests: 2 },
{ name: "Sandra Angeles", totalGuests: 4 },
{ name: "Pedro Torres", totalGuests: 2 },
{ name: "Jann Flores", totalGuests: 1 },
{ name: "Esteban Guzman", totalGuests: 2 },
{ name: "Greetel Perez", totalGuests: 3 },
{ name: "Esther Moya", totalGuests: 1 },
{ name: "Yolanda Moya", totalGuests: 2 },
{ name: "Gerardo Moya", totalGuests: 3 },
{ name: "Mario Moya", totalGuests: 4 },
{ name: "Marta Moya", totalGuests: 1 },
{ name: "Lilian Mendez", totalGuests: 1 },
{ name: "Daniel Leon", totalGuests: 1 },
{ name: "Galilea Morales", totalGuests: 2 },
{ name: "Emmanuel Alvarado", totalGuests: 1 },
{ name: "Jafet Figueroa", totalGuests: 4 },
{ name: "Valeria Segura", totalGuests: 1 }
];

// Función para buscar el nombre en la lista
function searchName() {
  const nameInput = document.getElementById("nameInput").value.toLowerCase();
  const result = document.getElementById("result");
  
  // Busca en la lista
  const guest = guestsList.find(person => person.name.toLowerCase() === nameInput);

  if (guest) {
      // Verifica si es una o más personas
      let num_persona = guest.totalGuests > 1 ? 'personas' : 'persona';
      
      // Muestra el resultado
      result.innerHTML = `<b>¡Hola ${guest.name}! Invitación para ${guest.totalGuests} ${num_persona}.</b>`;
  } else {
      // Si no se encontró el nombre
      result.innerHTML = "<b>Nombre no encontrado en la lista.</b>";
  }
}

