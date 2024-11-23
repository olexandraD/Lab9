import { Component } from '@angular/core';
import { Phone } from './phone';
import { Mobile } from './mobile';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-phonecalc',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './phonecalc.component.html',
  styleUrls: ['./phonecalc.component.css'],
})
export class PhoneCalcComponent {
  phone: Phone = new Phone();
  mobile: Mobile = new Mobile();
  resultVisible: boolean = false;

  calculateCosts(): void {
    this.resultVisible = true; 
  }
}
