function mostrarUsuarios() {
    const lista = JSON.parse(localStorage.getItem("usuarios")) || [];
    const tbody = document.getElementById("tabla-usuarios");
    tbody.innerHTML = "";
  
    lista.forEach((usuario, index) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${usuario.nombre}</td>
        <td>
          <button onclick="editarUsuario(${index})">Editar</button>
          <button onclick="eliminarUsuario(${index})">Eliminar</button>
        </td>
      `;
      tbody.appendChild(fila);
    });
  }
  
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  if (editando !== null) {
    usuarios[editando] = { nombre, correo };
    editando = null;
  } else {
    usuarios.push({ nombre, correo });
  }

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  e.target.reset();
  renderTabla();
});

let editando = null;

function editar(index) {
  const usuario = usuarios[index];
  document.getElementById("nombre").value = usuario.nombre;
  document.getElementById("correo").value = usuario.correo;
  editando = index;
}

function eliminar(index) {
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  renderTabla();
}

renderTabla();


