import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  reports=[
    { date: '2024-10-01', type: 'Fraude', details: 'Compra fraudulenta en línea', riskLevel: 'Alto' },
    { date: '2024-10-05', type: 'Extorsión', details: 'Correo de extorsión', riskLevel: 'Medio' },
    { date: '2024-10-12', type: 'Robo de Identidad', details: 'Acceso no autorizado', riskLevel: 'Alto' }
  ];
  filteredReports = [...this.reports];
  applyFilters() {
  
  }
}
