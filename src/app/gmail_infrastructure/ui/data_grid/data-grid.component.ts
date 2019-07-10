import { Component } from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';

import { MatTableDataSource } from '@angular/material/table';

import { GridDetailInterface } from '../../core/models/grid_data.interface';

const GRID_DATA = [
    {
        'starred': false,
        'important': false,
        'snoozed': false,
        'contactInfo': 'amit.sharma@gmail.com',
        'description': {
            'subject': 'Sale on Electronics Items',
            'content': 'Hi , We are calling from Amit Enterprise we have alot of offer\'s for you',
        },
        'recieveTime': '8:00PM'
    },
    {
        'starred': false,
        'important': false,
        'snoozed': false,
        'contactInfo': 'ujawal.saxena@hotmail.com',
        'description': {
            'subject': 'JOB Oppurtunity',
            'content': 'Hi , We are calling from a reputed firm  we have a JOB opening for you for the role of so nd so have you interested if then please revert back on the same',
        },
        'recieveTime': '8:00PM'
    },
    {
        'starred': false,
        'important': false,
        'snoozed': false,
        'contactInfo': 'Suresh.Bajpai@gmail.com',
        'description': {
            'subject': 'Sharing Details of Appartment Located in Delhi East',
            'content': 'Hi , I am calling from Brokekr Company we have a good deal for you, we have an appartment located at East Delhi , following are the details of the apppartment , it is 2bhk having  seperate bathroom in each room and balcony attached with both the rooms',
        },
        'recieveTime': '8:00PM'
    },
    {
        'starred': false,
        'important': false,
        'snoozed': false,
        "contactInfo": "amit.sharma@gmail.com",
        "description": {
            "subject": "Sale on Electronics Items",
            "content": "Hi , We are calling from Amit Enterprise we have alot of offer's for you"
        },
        'recieveTime': '8:00PM'
    },
    {
        'starred': false,
        'important': false,
        'snoozed': false,
        "contactInfo": "rohit.jain@gmail.com",
        "description": {
            "subject": "Sharing Details of Appartment Located in Delhi East",
            "content": "Hi , I am calling from Brokekr Company we have a good deal for you, we have an appartment located at East Delhi , following are the details of the apppartment , it is 2bhk having  seperate bathroom in each room and balcony attached with both the rooms"
        },
        'recieveTime': '8:00PM'
    },
    {
        'starred': false,
        'important': false,
        'snoozed': false,
        "contactInfo": "Suresh.Bajpai@gmail.com",
        "description": {
            "subject": "Sharing Details of Appartment Located in Delhi East",
            "content": "Hi , I am calling from Brokekr Company we have a good deal for you, we have an appartment located at East Delhi , following are the details of the apppartment , it is 2bhk having  seperate bathroom in each room and balcony attached with both the rooms"
        },
        'recieveTime': '8:00PM'
    },
    {
        'starred': false,
        'important': false,
        'snoozed': false,
        "contactInfo": "bijli.bill@hotmail.com",
        "description": {
            "subject": "Bijli Bill",
            "content": "Hi , YOu have a Bijli of sum of Rs 20000 so you last date of paying this bill is 1-8-2019."
        },
        'recieveTime': '8:00PM'
    },
    {
        'starred': false,
        'important': false,
        'snoozed': false,
        "contactInfo": "suresh@mdn_school.com",
        "description": {
            "subject": "Parent Metting Invitation",
            "content": "This is to notify you that this comming saturday we are going to keep a parent children meeting in which wwe discuss on your chidren progress stauts"
        },
        'recieveTime': '8:00PM'
    },
    {
        'starred': false,
        'important': false,
        'snoozed': false,
        "contactInfo": "bank_xvsvsv@abcbank.com",
        "description": {
            "subject": "!!!! Gentle Reminder for House Loan EMI",
            "content": "This is system auto generated mail to remind you that you housr loan EMI for this month is pending please pay this ASAP."
        },
        'recieveTime': '8:00PM'
    }
];

@Component({
    'selector': 'data-grid',
    'templateUrl': './data-grid.component.html',
    'styleUrls': ['./data-grid.component.scss']
})

export class DataGridComponent {

    displayedColumns: string[] = ['select', 'starred', 'important', 'contactInfo', 'description', 'recieveTime'];
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


    performAction() {

    }
}
