import { Component } from '@angular/core';
import moment from 'moment-timezone';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {

  public days: string = "00"
  public hours: string = "00"
  public mins: string = "00"
  public secs: string = "00"

  private _date_event: string = "02-09-2024 23:59:59"
  private _continue_loop: boolean = true
  constructor() {
    this.loopCalc()
  }

  public calcSec() {
    const DATE_EVENT_TIME = moment.tz(this._date_event,'MM-DD-YYYY HH:mm:ss', 'America/Sao_Paulo')
    const TIME_NOW = moment.tz('America/Sao_Paulo')
    let time_diff = moment(DATE_EVENT_TIME).diff(TIME_NOW);
    if (time_diff <= 0) {
      time_diff = 0;
      this._continue_loop = false
    }
    this.days = moment(time_diff).format('DD')
    this.hours = moment(time_diff).format('HH')
    this.mins = moment(time_diff).format('mm')
    this.secs = moment(time_diff).format('ss')
    this.loopCalc();
  }

  private loopCalc() {
    if (this._continue_loop) {
      setTimeout(() => {
        this.calcSec()
      }, 1000)
    }
  }
}
