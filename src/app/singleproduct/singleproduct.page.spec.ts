import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleproductPage } from './singleproduct.page';

describe('SingleproductPage', () => {
  let component: SingleproductPage;
  let fixture: ComponentFixture<SingleproductPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
