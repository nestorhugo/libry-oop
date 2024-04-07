import PrimaryScreen from "../view/PrimaryScreen";
import BookController from "../controllers/BookController";
import Datacenter from "../db/Datacenter";

const datacenter = new Datacenter();

export default class BasicController {
  private primaryScreen: PrimaryScreen = new PrimaryScreen(
    new BookController(datacenter)
  );

  public startSystem(): void {
    this.primaryScreen.getFirstScreen();
  }
}
