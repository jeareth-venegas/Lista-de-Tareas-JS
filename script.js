//LISTA DE TAREAS

const formulario = document.getElementById('new-task-form');
//se añade un contador de tareas
let contador = 0;
const lista = document.getElementById('task-list');

//function

formulario.addEventListener('submit',(event)=> {

    //se cancela el default del formulario

    event.preventDefault(); //evita que la pagina se refresque sin que se llene el formulario
    //console.log('formulario enviado');


    //texto que el usuario introduce
    console.log(formulario.elements[0].value); 


    // se crea HTML extra para que se pueda modificar cada que el usuario
    //interactúe con la lista de tarea


    //item de lista
    const item = document.createElement('li');
    item.className = 'list-item';
    //item.classList.add('list-item');
    const tareas = [];

    //checkbox para la lista de tareas
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('id',`tarea-${contador}`);// se quita el ++ para que no se incremente cuando esta el contador en el segundo punto

    //se añade el elemento label

    const label = document.createElement('label');
    label.setAttribute('for',`tarea-${contador}`);
    contador++;
    label.innerHTML = formulario.elements[0].value;

    //meter el label, input al li

    item.appendChild(checkbox);
    item.appendChild(label);
    lista.appendChild(item);

    //arreglo de las tareas[] con el objeto

    const miTarea = {
        id: contador,
        nombre: formulario.elements[0].value,
        completo: false,
        fecha: formulario.elements[1].value,
    };
    tareas.push(miTarea); //sin comillas
    console.log(tareas);
    contador++;


    //resetear el formulario
    formulario.elements[0].value = '';

})




//let text = document.getElementById('new-task-input');

//for (let text i = 0; i <)