import { Component } from "@angular/core";
import { AccountService } from "../accound.service";
import { LoggingService } from "../loggin.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService, AccountService],
})
export class NewAccountComponent {
  constructor(
    private logginService: LoggingService,
    private accountService: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.logginService.logStatusChanged(accountStatus);
  }
}
