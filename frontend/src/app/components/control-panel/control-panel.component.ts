import {Component, OnInit} from '@angular/core';
import {faCoffee, faPhoneSlash, faUserPlus} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  faCoffee = faCoffee;
  faPhoneSlash = faPhoneSlash
  faUserPlus = faUserPlus


  constructor() {
  }

  ngOnInit(): void {
  }

}
