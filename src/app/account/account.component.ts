import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AccountService } from "../accound.service";
import { LoggingService } from "../loggin.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private logginService: LoggingService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    // this.logginService.logStatusChanged(status);
  }
}
