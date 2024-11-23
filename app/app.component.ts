import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PhoneCalcComponent } from './phonecalc/phonecalc.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PhoneCalcComponent, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'laba9_10';
}
