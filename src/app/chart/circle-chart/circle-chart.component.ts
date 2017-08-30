import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'circle-chart-component',
  templateUrl: 'circle-chart.component.html',
  styleUrls: ['circle-chart.component.scss']
})
//tslint:disable
export class CircleChartComponent implements AfterViewInit, OnInit, Input {
  @Input() public backgroundColor: string;
  @Input() public mainColor: string;
  //dimensions
  public ctx: CanvasRenderingContext2D;
  public W: any;
  public H: any;
  //Variables
  public degrees;
  public new_degrees = 0;
  public difference = 0;
  public color; // буду задавать цвет
  public bgcolor; // цвет подложки
  public text;
  public animation_loop;
  public redraw_loop;

  @ViewChild('myCanvas') public myCanvas;
  constructor() {
    this.degrees  = 0;
  }
  public ngOnInit() {
    this.color = this.mainColor; // буду задавать цвет
    this.bgcolor = this.backgroundColor;
    this.draw();
  }
  public   ngAfterViewInit(): void {
    let canvas = this.myCanvas.nativeElement;
    console.log(canvas);
    this.ctx = canvas.getContext('2d');
    this.W = canvas.width;
    this.H = canvas.height;

  }
  public init() {
    //Clear the canvas everytime a chart is drawn
    this.ctx.clearRect(0, 0, this.W, this.H);

    //Background 360 degree arc
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.bgcolor;
    this.ctx.lineWidth = 30; /*отвечает за ширину прозрачной полоски*/
    this.ctx.arc(this.W/2, this.H/2, 100, 0, Math.PI*2, false); //you can see the arc now
    this.ctx.stroke();

    //gauge will be a simple arc
    //Angle in radians = angle in degrees * PI / 180
    let radians = this.degrees * Math.PI / 180;
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 30; /*ширина полоски выделеной*/
    //The arc starts from the rightmost end. If we deduct 90 degrees from the angles
    //the arc will start from the topmost end
    this.ctx.arc(this.W/2, this.H/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false);
    //you can see the arc now
    this.ctx.stroke();
    this.text = Math.floor(this.degrees/360*100) + "%";
    //Lets add the text
   /* this.ctx.fillStyle = this.color;


    this.ctx.font = "50pt";*/
    //Lets center the text
    //deducting half of text width from position x
 /*   let text_width = this.ctx.measureText(this.text).width;
    //adding manual value to position y since the height of the text cannot
    //be measured easily. There are hacks but we will keep it manual for now.
    this.ctx.fillStyle = '#BDBDBD';
    this.ctx.fillText(this.text, this.W/2 - text_width/2, this.H/2 + 15);*/
  }
  public draw(){
    //Cancel any movement animation if a new chart is requested
  if(typeof this.animation_loop != undefined) clearInterval(this.animation_loop);

  //random degree from 0 to 360
  this.new_degrees = 181;
  this.difference = this.new_degrees - this.degrees;
  //This will animate the gauge to new positions
  //The animation will take 1 second
  //time for each frame is 1sec / difference in degrees
  this.animation_loop = setInterval(() => {
    this.animate_to()
  }, 1000/this.difference);
}
  public animate_to(){
    console.log('aaa',  this.degrees);
    //clear animation loop if degrees reaches to new_degrees
  if(this.degrees == this.new_degrees)
    clearInterval(this.animation_loop);

  if(this.degrees < this.new_degrees){
    this.degrees++;
    this.init();
    return
  }


}
  single: any[] = [
    {
      'name': 'Germany',
      'value': 10
    },
    {
      'name': 'dddd',
      'value': 3
    }
  ];
  multi: any[];

  view: any[] = [200, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['red', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;


  onSelect(event) {
    console.log(event);
  }
}
