import ITv from "../interfaces/Tv";

export default class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string;
  // connectedTo: string;

  constructor({ brand, size, resolution, connections }: ITv) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn(): void {
    console.log(this.brand);
    console.log(this.size);
    console.log(this.resolution);
    console.log(this.connections);
  }
}
