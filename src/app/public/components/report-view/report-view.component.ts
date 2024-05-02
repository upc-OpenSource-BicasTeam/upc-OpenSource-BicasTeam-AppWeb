/*import { Component, OnInit } from '@angular/core';
import { ReportsApiService} from "../../report-view/report-view.service";

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})


export class ReportViewComponent implements OnInit {
  reports: any[] = [];

  constructor(private reportsApi: ReportsApiService) { }

  ngOnInit(): void {
    this.getDataReport();
  }

  async getDataReport() {
    try {
      const response = await this.reportsApi.getAllReports();
      const reports = response.data;
      for (let report of reports) {
        const userResponse = await this.reportsApi.findUserByID(report['id-user']);
        const user = userResponse.data[0];
        report.name = `${user.name} ${user.lastName}`;
      }
      this.reports = reports;
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  }
}
}*/
