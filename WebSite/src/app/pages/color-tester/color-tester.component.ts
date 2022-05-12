import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-tester',
  templateUrl: './color-tester.component.html',
  styleUrls: ['./color-tester.component.scss']
})
export class ColorTesterComponent implements OnInit {
  public value: string = '$o$FAFTest';

  public bgPercent: number = 42;

  public colors: string[][][] = [];

  public bg_color: string = '#ffffff';

  constructor() { }

  ngOnInit(): void {
    this.generateAllColors();
  }

  public generateAllColors(): void {
    for (let i = 0; i < 16; i++) {
      this.colors[i] = [];
      for (let j = 0; j < 16; j++) {
        this.colors[i][j] = [];
        for (let k = 0; k < 16; k++) {
          this.colors[i][j][k] = '#' + i.toString(16) + j.toString(16) + k.toString(16);
        }
      }
    }
  }

  public addColor(color: string): void {
    color = color.substring(1);
    this.value += '$' + color;
  }

  public calcColor(r: number, g: number, b: number) {
    if (r*0.299 + g*0.587 + b*0.114 > 9)
      return {'color': '#040404'}
    return {'color': '#ffffff'};
  }

  public formatLabel(value: number) {
    return Math.round(value * 100 / 255) + '%';
  }

  public getBgColor(): string {
    this.bg_color = '#' + this.bgPercent.toString(16) + this.bgPercent.toString(16) + this.bgPercent.toString(16);
    return this.bg_color;
  }
}
