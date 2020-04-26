import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {
  loading: boolean;
  cols: any[];
  value: any[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.cols = [
      {field: 'id', header: 'ID'},
      {field: 'department.name', header: 'Department Name'},
      {field: 'department.head', header: 'Department Head'},
      {field: 'employee.name', header: 'Employee Name'},
      {field: 'employee.age', header: 'Employee Age'},
      {field: 'employee.dob', header: 'Employee DOB'},
    ];
    this.dataService.getData().subscribe(res => {
      this.value = res;
      this.loading = false;
    });

    this.loading = true;
  }

  loadDataLazy($event: any) {
    this.loading = true;
    setTimeout(() => {
      this.dataService.getData().subscribe(res => {
        this.value = res;
        this.loading = false;
      });
    }, 1000);
  }
}
