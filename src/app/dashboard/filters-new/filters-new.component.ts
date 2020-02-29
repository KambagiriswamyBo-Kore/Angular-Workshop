import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-filters-new',
  templateUrl: './filters-new.component.html',
  styleUrls: ['./filters-new.component.scss']
})
export class FiltersNewComponent implements OnInit {

  tabs = [
    {
      label: 'Created By',
      selected: true,
    },
    {
      label: 'Shared By',
      selected: false,
    }
  ];

  contentTypes: any[] = [
    {
      type: 'media',
      label: 'Media',
      checked: false
    }, {
      type: 'docs',
      label: 'Documents',
      checked: false
    }, {
      type: 'links',
      label: 'Links',
      checked: false
    }
  ];

  filteredList: Observable<any[]>;
  usersList = [{
    id: 1,
    name: 'Swamy',
  },
  {
    id: 2,
    name: 'Sainath'
  }];
  userCtrl = new FormControl();
  isDirty;
  constructor() {
    this.filteredList = this.userCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.usersList.slice())
      );
  }

  ngOnInit(): void {
  }

  onSelectedTabChange($event) { }

  onFormChange() {
    // const flag1 = !!this.datePicker.startDate;
    // const flag2 = !!this.selectionType;
    const flag3 = this.contentTypes.filter(f => f.checked).length > 0;

    this.isDirty = flag3;
  }

  private _filterStates(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.usersList.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
