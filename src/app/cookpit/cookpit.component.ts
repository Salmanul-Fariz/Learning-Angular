import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css'],
})
export class CookpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() bluprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @ViewChild('newServerContent') newServerContent: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: this.newServerContent.nativeElement.value,
    });
  }

  onAddBlueprint(newServerName: HTMLInputElement) {
    this.bluprintCreated.emit({
      serverName: newServerName.value,
      serverContent: this.newServerContent.nativeElement.value,
    });
  }
}
