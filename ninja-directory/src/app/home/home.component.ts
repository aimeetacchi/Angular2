import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the ninja directory";
    // @Input() ninja;
    // @Output() onYell = new EventEmitter();

// Event Binding
    // alertMe(val) {
    // 	alert(val);
    // }
// Custom Event Binding
    // fireYellEvent(e){
    //   this.onYell.emit(e);
    // }

  constructor(private logger: LoggingService) { }

  logIt() {
    // .log() function is in the logging.service.ts file
    this.logger.log();
  }

  ngOnInit() {
  }

}
