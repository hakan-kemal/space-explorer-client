import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  title = "Server";
  serverId: number = 10;
  serverStatus: string = "Offline";

  getServerStatus() {
    return this.serverStatus;
  }
}
