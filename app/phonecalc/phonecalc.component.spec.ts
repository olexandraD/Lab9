import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PhoneCalcComponent } from './phonecalc.component';

describe('PhoneCalcComponent', () => {
  let component: PhoneCalcComponent;
  let fixture: ComponentFixture<PhoneCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneCalcComponent],  
      imports: [FormsModule],  
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneCalcComponent);  
    component = fixture.componentInstance;  
    fixture.detectChanges();  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct phone cost after button click', () => {
    component.phone.functionCount = 10;
    fixture.detectChanges(); 

    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();  

    const costText = fixture.nativeElement.querySelector('#cost');
    expect(costText.textContent).toContain('Вартість телефону');
    expect(costText.textContent).toContain('UAH');
  });

  it('should display correct mobile cost after button click', () => {
    component.mobile.functionCount = 10;
    component.mobile.model = 'ModelX';
    fixture.detectChanges();  

    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();  

    const mobileCostText = fixture.nativeElement.querySelector('#mobileCost');
    expect(mobileCostText.textContent).toContain('Мобільний');
    expect(mobileCostText.textContent).toContain('ModelX');
    expect(mobileCostText.textContent).toContain('UAH');
  });

  it('should format cost values correctly', () => {
    component.phone.functionCount = 10;
    component.mobile.functionCount = 10;
    fixture.detectChanges();  

    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    const costText = fixture.nativeElement.querySelector('#cost');
    const mobileCostText = fixture.nativeElement.querySelector('#mobileCost');
    expect(costText.textContent).toContain('Вартість телефону');
    expect(mobileCostText.textContent).toContain('Вартість мобільного телефону');
    
    const phoneCost = component.phone.getCost();
    const mobileCost = component.mobile.getCost();
    expect(costText.textContent).toContain(phoneCost.toFixed(2));
    expect(mobileCostText.textContent).toContain(mobileCost.toFixed(2));
  });
});
