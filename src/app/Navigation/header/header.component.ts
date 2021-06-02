import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sideNavBar = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(){
this.sideNavBar.emit();
  }
}
