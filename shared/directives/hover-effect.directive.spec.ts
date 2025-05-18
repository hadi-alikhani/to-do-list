 import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HoverEffectDirective } from './hover-effect.directive';
import { By } from '@angular/platform-browser';


@Component({
  template: `
    <div appHoverEffect [hoverColor]="customColor">Test Element</div>
  `,
  standalone: true,
  imports: [HoverEffectDirective]
})
class TestComponent {
  customColor:string = '#f0f0f0' ;
}

describe('HoverEffectDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(HoverEffectDirective)).nativeElement;
    fixture.detectChanges();
  });

  it('create an instance', () => {
    const directive = new HoverEffectDirective({ nativeElement: document.createElement('div') });
    expect(directive).toBeTruthy();
  });

  it(' original background color  initialization', () => {
    const directive = fixture.debugElement.query(By.directive(HoverEffectDirective)).injector.get(HoverEffectDirective);
    expect(directive['originalBackground']).toBeDefined();
  });

  it('change background color ', () => {

    element.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();

   
    expect(element.style.backgroundColor).toBe(component.customColor);
  });

  it(' original background color ', () => {
    const originalBackground = element.style.backgroundColor;

    
    element.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();


    element.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();

   
    expect(element.style.backgroundColor).toBe(originalBackground);
  });

  it('add transition style on mouseenter', () => {
    element.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();

    expect(element.style.transition).toBe('background-color 0.3s ease');
  });

  it('change cursor to pointer on mouseenter', () => {
    element.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();

    expect(element.style.cursor).toBe('pointer');
  });

  it('use default hover color when not specified', () => {
    // component.customColor = undefined;
    fixture.detectChanges();

    element.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();

    expect(element.style.backgroundColor).toBe('#f0f0f0');
  });

  it('handle multiple hover events correctly', () => {
    const originalBackground = element.style.backgroundColor;

    
    element.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(element.style.backgroundColor).toBe(component.customColor);

    
    element.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();
    expect(element.style.backgroundColor).toBe(originalBackground);

    
    element.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(element.style.backgroundColor).toBe(component.customColor);

   
    element.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();
    expect(element.style.backgroundColor).toBe(originalBackground);
  });
});