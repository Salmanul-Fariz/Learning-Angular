import { Injectable } from "@angular/core";
import { LoggingService } from "./loggin.service";

@Injectable()
export class AccountService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  constructor(private logginService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.logginService.logStatusChanged(status);
  }

  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChanged(status);
  }
}
