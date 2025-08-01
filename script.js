// 🌿 feature/add-form-logic — Captura y guardado de nombres
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    if (!nombre || nombre.length < 2) {
      alert("Por favor, ingresa un nombre válido con al menos 2 caracteres");
      return;
    }
  
    const usuario = { nombre };
    const lista = JSON.parse(localStorage.getItem("usuarios")) || [];
    lista.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(lista));
  
    document.getElementById("form").reset();
    mostrarUsuarios();
  });