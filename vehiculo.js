class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo) {
        //Faltaba añadir un super para heredar el atributo marca
        super(marca)
        this.modelo = modelo;
    }

    mostrarInfo() {
        console.log(`Auto: ${this.marca}, ${this.modelo}`);
    }
}

const miAuto = new Auto("Nissan", "Tiida");
miAuto.mostrarInfo();
