import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: any;
  // position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Angular Global Summit', weight: 'Online', symbol: 'June 1-2, 2021'},
  { name: 'ng-conf', weight: 'Online', symbol: 'April 12-15 (workshops), April 22-23 (conference), 2021'},
  { name: 'ng-china', weight: 'Online', symbol: 'November 21-22, 2020'},
  { name: 'EnterpriseNG', weight: 'Online', symbol: 'November 19-20, 2020'},
  { name: 'ngrome', weight: 'Online', symbol: 'October 20, 2020'},
  { name: 'DevReach', weight: 'Online', symbol: 'October 19-23, 2020'},
  { name: 'ngVikings', weight: 'Oslo, Norway', symbol: 'May 25-26 (conference), May 27 (workshops), 2020'},
  { name: 'ng-conf', weight: 'Salt Lake City, Utah', symbol: 'April 1-3, 2020'},
  { name: 'ngIndia', weight: 'Delhi, India', symbol: 'February 29, 2020'},
  { name: 'ReactiveConf', weight: 'Prague, Czech Republic', symbol: 'October 30 - November 1, 2019'},
  { name: 'NG Rome MMXIX', weight: 'Rome, Italy', symbol: 'October 6 (workshops), October 7 (conference), 2019'},
  { name: 'AngularConnect', weight: 'London, UK', symbol: 'September 19-20, 2019'},
  { name: 'NG-DE', weight: 'Berlin, Germany', symbol: 'August 29 (workshops), August 30-31 (conference), 2019'},
  { name: 'ng-japan', weight: 'Tokyo, Japan', symbol: 'July 13, 2019'},
  { name: 'ngVikings', weight: 'Copenhagen, Denmark', symbol: 'May 26 (workshops), May 27-28 (conference), 2019'},
  { name: 'ng-conf', weight: 'Salt Lake City, Utah', symbol: 'May 1-3, 2019'},
  { name: 'ng-India', weight: 'Gurgaon, India', symbol: 'February 23, 2019'},
  { name: 'ngAtlanta', weight: 'Atlanta, Georgia', symbol: 'January 9-12, 2019'},
  { name: 'AngularConnect', weight: 'London, United Kingdom', symbol: 'November 5-7, 2018'},
  { name: 'ReactiveConf', weight: 'Prague, Czech Republic', symbol: 'October 29-31, 2018'},
  { name: 'AngularMix', weight: 'Orlando, Florida', symbol: 'October 10-12, 2018'},
  { name: 'Angular Conf Australia', weight: 'Melbourne, Australia', symbol: 'June 22, 2018'},
  { name: 'ng-japan', weight: 'Tokyo, Japan', symbol: 'June 16, 2018'},
  { name: 'WeAreDevelopers', weight: 'Vienna, Austria', symbol: 'May 16-18, 2018'},
  { name: 'ng-conf', weight: 'Salt Lake City, Utah', symbol: 'April 18-20, 2018'},
  { name: 'ngVikings', weight: 'Helsinki, Finland', symbol: 'March 1-2, 2018'},
  { name: 'ngAtlanta', weight: 'Atlanta, Georgia', symbol: 'January 30, 2018'},
  
];

/**
 * @title Styling columns using their auto-generated column names
 */

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = [ 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
}




