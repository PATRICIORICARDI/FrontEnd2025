function ordenarHamburguesa(ingredientes) {
  const hamburguesaPromesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (ingredientes.includes("pulpo") || ingredientes.includes("cebolla")) {
        reject("De momento no cuento con ese ingrediente 😔, una disculpa");
      }
      resolve(`🍔 con ${ingredientes.join(", ")}`);
    }, 1000);
  });
  return hamburguesaPromesa;
}

function manejoError(error) {
  console.log(error);
  return error;
}

// Pedidos
ordenarHamburguesa(["tocino", "queso"]).then(function (burger) {
  console.log(burger);
  document.getElementById("info-cheese-bacon").textContent = burger;
});

ordenarHamburguesa(["pollo"]).then(function (burger) {
  console.log(burger);
  document.getElementById("info-chicken").textContent = burger;
});

ordenarHamburguesa(["pulpo", "cebolla", "tomate"])
  .then(function (burger) {
    console.log(burger);
    document.getElementById("info-octopus").textContent = burger;
  })
  .catch(function (error) {
    console.log(error);
    document.getElementById("info-octopus").textContent = error;
  });

// También se pueden ver las promesas en consola si se desea:
console.log(ordenarHamburguesa(["tocino", "queso"]));
console.log(ordenarHamburguesa(["pollo"]));
console.log(ordenarHamburguesa(["pulpo", "cebolla", "tomate"]));
