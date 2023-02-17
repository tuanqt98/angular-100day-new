import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progress = 50;
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';
  constructor() {
    console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
    //ngOnInit chay sau khi gia tri Input duoc bind
    //chay 1 lan
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
    //chay truoc onInit, onChange
    //chay khi moi lan input thay doi
  }
}
