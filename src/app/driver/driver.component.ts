import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 
import { Driver } from '../module/klasa'; 
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule,NgClass],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit { 
  constructor() {}
  @Input() 
  ime:String="";  

  @Input()
  vozac:Driver={} as Driver; 

  @Input() 
  reden:Number={} as Number;

  @Output() 
  shofer:Driver={} as Driver;  

  @Output()
  cuci=new EventEmitter<any>(); 

  ngOnInit() { 
     
  }
  klasi() {  
    return {'poz2':this.vozac.category=="ADVANCED", 'poz1':this.vozac.category=="INTERMEDIATE", 'course-card':true};
  }
  klik() 
  {
    var link=this.vozac.iconUrl;
    window.open(link,"_blank");
    this.cuci.emit(this.vozac); 
  }
  stil() {
    return {'background-color':'lightcoral', 'border':'none','box-shadow':'2px 5px 5px gray','width':'10%','font-size':'24px'};
  }
  stil2() {
    return {'margin-top':'10px','font-size':'20px'};
  }
  stil3() {
    return {'border':'none','box-shadow':'2px 4px 4px gray','font-size':'20px'};
  }
}
