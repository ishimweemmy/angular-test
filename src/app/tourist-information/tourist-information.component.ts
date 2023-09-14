import { Component } from '@angular/core';

@Component({
  selector: 'app-tourist-information',
  templateUrl: './tourist-information.component.html',
  styleUrls: ['./tourist-information.component.css']
})
export class TouristInformationComponent {
  locationsData = [
    { name: 'Location 1', description: 'Description for Location 1', rating: 4.5 },
    { name: 'Location 2', description: 'Description for Location 2', rating: 3.8 },
    { name: 'Location 3', description: 'Description for Location 3', rating: 1.5 },
    { name: 'Location 4', description: 'Description for Location 4', rating: 3.3 },
    { name: 'Location 5', description: 'Description for Location 5', rating: 4.2 },
    { name: 'Location 6', description: 'Description for Location 6', rating: 5 },
  ];

  query = '';
}
