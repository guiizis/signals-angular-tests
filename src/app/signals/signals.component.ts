import { NgFor } from '@angular/common';
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal<number>(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log('Counter:', this.counter());
    });
  }

  increment() {
    this.counter.update((oldValue) => oldValue + 1);
    this.actions.update((oldArray) => oldArray.concat('INCREMENT'));
  }

  decrement() {
    this.counter.update((oldValue) => oldValue - 1);
    this.actions.update((oldArray) => oldArray.concat('DECREMENT'));
  }
}
