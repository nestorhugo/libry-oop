import Datacenter from "../db/Datacenter";

const datacenter = new Datacenter();

export default class BasicController {
  public startSystem(): void {
    console.log("Aplicação está rodando");
  }
}
