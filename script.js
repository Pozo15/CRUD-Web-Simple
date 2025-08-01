let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function renderTabla() {
  const tbody = document.getElementById("tabla-body");
  tbody.innerHTML = "";
  usuarios.forEach((usuario, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${usuario.nombre}</td>
        <td>${usuario.correo}</td>
        <td>
          <button onclick="editar(${index})">Editar</button>
          <button onclick="eliminar(${index})">Eliminar</button>
        </td>
      </tr>
    `;
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



function editarUsuario(index) {
    const lista = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = lista[index];
  
    document.getElementById("nombre").value = usuario.nombre;
  
    document.getElementById("form").onsubmit = function(e) {
      e.preventDefault();
  
      const nuevoNombre = document.getElementById("nombre").value.trim();
      if (!nuevoNombre || nuevoNombre.length < 2) {
        alert("El nombre editado no es válido");
        return;
      }
  
      usuario.nombre = nuevoNombre;
      lista[index] = usuario;
      localStorage.setItem("usuarios", JSON.stringify(lista));
  
      document.getElementById("form").reset();
      document.getElementById("form").onsubmit = null;
      mostrarUsuarios();
    };
  }