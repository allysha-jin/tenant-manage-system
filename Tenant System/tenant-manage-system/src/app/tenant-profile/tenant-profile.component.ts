import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './tenant-profile.component.html',
  styleUrls: ['./tenant-profile.component.css']
})

export class TenantProfileComponent{
  title = 'tenantsystem';
  step = 0;
  panelOpenState = false;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  
  

}
