import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map, startWith } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnDestroy {
  data$: Observable<string[]>;
  filterControl = new FormControl('');
  private unsubscribe$ = new Subject<void>();

  constructor(private dataService: DataService) {
    this.data$ = this.dataService.getData();
    this.filterControl.valueChanges.pipe(
      startWith(''),
      takeUntil(this.unsubscribe$)
    ).subscribe(value => {
      this.data$ = this.dataService.getData().pipe(
        map(data => data.filter(item => item.includes(value || '')))
      );
    });
  }

  ngOnDestroy(): void {map((data: string[]): string[] => data.filter(item => item.includes('value' || '')))
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
