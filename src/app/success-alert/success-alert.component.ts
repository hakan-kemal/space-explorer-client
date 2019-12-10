import { Component } from "@angular/core";

@Component({
  selector: "app-success-alert",
  templateUrl: "./success-alert.component.html",
  styleUrls: ["./success-alert.component.css"]
})
export class SuccessAlertComponent {
  success = "Success Alert";
  allowNewUser = false;
  userCreationStatus = "No user was created!";
  username = "";
}
