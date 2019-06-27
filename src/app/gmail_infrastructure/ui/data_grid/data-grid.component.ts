import { Component } from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';

import { MatTableDataSource } from '@angular/material/table';

import { GridDetailInterface } from '../../core/models/grid_data.interface';

const GRID_DATA = [
    {
        'contactInfo': 'abc@abc.com',
        'description': {
            'subject': 'Home Loan',
            'content': 'it is temp description jflsjflsjflsjfsjfsjfsjflsjflsjflsjflsjflsflsjflsjflsjflsjflsjflsjflsjflsjflsjflsjflsjflsjflsjflsjflksjflsjf  Sunny Goel let;s do this  ok cool',
        },
        'recieveTime': '8:00PM',
        'actionEnable': false
    },
    {
        'contactInfo': 'babc@abc.com',
        'description': {
            'subject': 'Flipart Fashion',
            'content': 'it is temp description    ',
        },
        'recieveTime': '8:00PM',
        'actionEnable': false
    },
    {
        'contactInfo': 'cabc@abc.com',
        'description': {
            'subject': 'Job Requirement',
            'content': 'it is temp description    ',
        },
        'recieveTime': '8:00PM',
        'actionEnable': false

    },


];

@Component({
    'selector': 'data-grid',
    'templateUrl': './data-grid.component.html',
    'styleUrls': ['./data-grid.component.scss']
})

export class DataGridComponent {

    displayedColumns: string[] = ['select', 'contactInfo', 'description', 'recieveTime', 'actionEnable'];
    dataSource = new MatTableDataSource<GridDetailInterface>(GRID_DATA);
    selection = new SelectionModel<GridDetailInterface>(true, []);

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: GridDetailInterface): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

    displayAction(row) {
        row.actionEnable = true;
    }

    hideAction(row) {
        row.actionEnable = false;
    }

    performAction() {

    }
}
