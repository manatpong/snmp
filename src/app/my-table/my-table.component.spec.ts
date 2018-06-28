
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationExample } from './my-table.component';

describe('TablePaginationExample', () => {
  let component: TablePaginationExample;
  let fixture: ComponentFixture<TablePaginationExample>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePaginationExample ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePaginationExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
