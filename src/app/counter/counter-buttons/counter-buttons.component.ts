import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement,increment, reset } from 'src/app/state/counter.actions';
import { CounterState } from 'src/app/state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  ngOnInit(): void {
  }

  onIncrement(){
    this.store.dispatch(increment());
  }

  onDecrement(){
    this.store.dispatch(decrement());
  }

  onReset(){
    this.store.dispatch(reset());
  }

}
