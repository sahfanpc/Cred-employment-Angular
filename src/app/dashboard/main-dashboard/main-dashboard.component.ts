import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SarvicesService } from 'src/app/sarvices.service';
import { Chart,registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent {
datauser:any;
dataemployee:any;
angular:any;
html:any;
net:any;
seo:any;
ui:any;
react:any;
  constructor(private router:Router,private db:SarvicesService){}

  ngOnInit():void{
  this.datauser = this.db.correntlyUsers;
  // console.log(this.data);
this.dataemployee =this.db.currentEmployecheck();
// console.log(this.dataemployee,"set");

this.RenderChart();

// 
// const ctx = document.getElementById('myChart');
  }
  RenderChart(){
    // splitting data
 this.angular = this.dataemployee.filter((e:any)=>e.role == "angular");
 this.html = this.dataemployee.filter((e:any)=>e.role == "html");
 this.react = this.dataemployee.filter((e:any)=>e.role == "react");
 this.net = this.dataemployee.filter((e:any)=>e.role == ".net");
 this.seo = this.dataemployee.filter((e:any)=>e.role == "seo");
 this.ui = this.dataemployee.filter((e:any)=>e.role == "ui/ux");

 console.log(this.angular,"angu");
 
    // 
    const myChart = new Chart("piechart", {
      type: 'bar',
      data: {
          labels: ['Angular', 'HTML', '.Net', 'Seo', 'UI/UX', 'React'],
          datasets: [{
              label: '# of Votes',
              data: [this.angular.length, this.html.length, this.net.length, this.seo.length, this.ui.length, this.react.length],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
  
}
