import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  onServerLoad(id: number) {
    // Complex Program
    this.route.navigate(["/servers", 2, "edit"], {
      queryParams: { allowAccess: id },
      fragment: "loading",
    });
  }
}
