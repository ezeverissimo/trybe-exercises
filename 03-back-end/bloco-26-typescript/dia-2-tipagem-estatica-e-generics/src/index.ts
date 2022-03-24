enum Color {
  preta = 'preta',
  branca = 'branca',
  vermelha = 'vermelha',
  prata = 'prata',
}

enum Door {
  primeira = 'Da pessoa motorista',
  segunda = 'Da pessoa carona',
  terceira = 'De trás da pessoa motorista',
  quarta = 'De trás da pessoa carona',
}

enum Direction {
  direita = 'direita',
  esquerda = 'esquerda',
}

class Car {
  brand: string
  color: Color
  doors: number

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand
    this.color = color
    this.doors = doors
  }

  honk():void {
    console.log("Biii!!");
  }
  openTheDoor(p: Door): void {
    console.log(`Abre a ${p} porta`);
  }
  closeTheDoor(p: Door): void {
    console.log(`Fecha a ${p} porta`);
  }
  turnOn(): void {
    console.log("Liga carro");
  }
  turnOff(): void {
    console.log("Desliga carro");
  }
  speedUp(): void {
    console.log("Acelera carro");
  }
  speedDown(): void {
    console.log("Reduz velocidade");
  }
  stop(): void {
    console.log("Para carro");
  }
  turn(direction: Direction): void {
    console.log(`Vira carro para ${direction}`);
  }
};

const driver = new Car('volkswagen gol', Color.prata, 4)

driver.openTheDoor(Door.primeira);
driver.closeTheDoor(Door.primeira);
driver.turnOn();
driver.speedUp();
driver.speedDown();
driver.turn(Direction.esquerda);
driver.speedUp();
driver.speedDown();
driver.turn(Direction.direita);
driver.speedUp();
driver.speedDown();
driver.turn(Direction.direita);
driver.speedDown();
driver.stop();
driver.openTheDoor(Door.quarta);
driver.closeTheDoor(Door.quarta);
driver.speedUp();
driver.speedDown();
driver.turn(Direction.direita);
driver.speedUp();
driver.speedDown();
driver.turn(Direction.esquerda);
driver.speedUp();
driver.speedDown();
driver.turn(Direction.direita);
driver.speedDown();
driver.stop();
driver.openTheDoor(Door.quarta);
driver.closeTheDoor(Door.quarta);
driver.speedUp();
