import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HandSimulatorComponent } from './hand-simulator';

describe('HandSimulatorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HandSimulatorComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HandSimulatorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('buttons render correct', () => {
    const fixture = TestBed.createComponent(HandSimulatorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const buttons = compiled.querySelectorAll('button');

    expect(buttons[0].textContent).toContain('Deal Next');
    expect(buttons[1].textContent).toContain('Deal All Community Cards');
  });

  it('should click', fakeAsync(() => {
    // const fixture = TestBed.createComponent(HandSimulatorComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    // const buttons = compiled.querySelectorAll('button');
    // const dealComCards = jasmine.createSpyObj(HandSimulatorComponent, [
    //   'dealAllCommunityCards',
    // ]);
    // let getDealSpy = dealComCards.dealAllCommunityCards();
    // expect(getDealSpy.toBeTruthy());
    // spyOn(HandSimulatorComponent, 'dealAllCommunityCards');
    // buttons[1].click();
    // tick();
    // expect(HandSimulatorComponent.dealAllCommunityCards.toHaveBeenCalled());
    // expect(HandSimulatorComponent.dealAllCommunityCards())
  }));

  it('should deal cards', () => {
    const fixture = TestBed.createComponent(HandSimulatorComponent);
    fixture.detectChanges();
    const exampleCards = [
      '2 Spades',
      '5 Clubs',
      'Ace Diamonds',
      'King Clubs',
      '6 Spades',
    ];
    const compiled = fixture.debugElement.nativeElement;
    const buttons = compiled.querySelectorAll('button');
    const dealComCards = jasmine.createSpyObj(HandSimulatorComponent, [
      'dealAllCommunityCards',
    ]);
    // let getDealSpy = dealComCards
    //   .dealAllCommunityCards()
    //   .and.returnValue(exampleCards);
    // expect(getDealSpy.calls.any()).toBe(true, 'getQuote called');

    expect(HandSimulatorComponent.dealAllCommunityCards()).not.toBe(true);

  });
});
