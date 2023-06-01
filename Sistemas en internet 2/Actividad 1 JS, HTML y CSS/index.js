function addTask(){
    const input = document.getElementById('IA')
    const text = input.value;

    if (text.length) {
        const list = document.getElementById('EP');

        const newItem = document.createElement('label');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.setAttribute('id', 'BP1');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar'
        deleteButton.setAttribute('id', 'BP1');

        newItem.appendChild(checkbox);
        newItem.innerHTML = text;
        newItem.appendChild(editButton);
        newItem.appendChild(deleteButton);

        list.appendChild(newItem);

        const salto = document.createElement('br');
        list.appendChild(salto);

        input.value = '';
    }
}