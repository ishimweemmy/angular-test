import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist-information.component.html',
  styleUrls: ['./tourist-information.component.css']
})
export class TouristInformationComponent implements OnInit {
  items: any[] = []; // Your list of items
  locationsData: any[] = []; // Store all items from the API
  batchSize = 28; // Number of items to load at a time
  loading = false; // Indicates if data is currently being loaded
  query = ''; // Search query

  constructor(private apiService: DataService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    // Load initial data when the component initializes
    this.loadMoreItems();
  }

  // Function to load more items
  loadMoreItems(): void {
    if (!this.loading) {
      this.loading = true;
      this.apiService.getData().subscribe(
        (data: any) => {
          // Process the data from the API response and add it to the items array
          // Simulate adding the new data
          data = Object.entries(data)

          for (let i = 0; i < this.batchSize; i++) {
            if (data.length > 0) {
              this.locationsData.push(data.shift());
            }
          }

          this.loading = false;
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.loading = false;
        }
      );
    }
  }

  // Listen for scroll events
  @HostListener('window:scroll', [])
  onScroll(): void {
    console.log('scrolling...', this.isScrolledToBottom(), this.loading)
    if (this.isScrolledToBottom()) {
      this.loadMoreItems();
    }
  }

  // Check if the user has scrolled to the bottom
  isScrolledToBottom(): boolean {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const bottomThreshold = 100; // You can adjust this threshold as needed

    return scrollY + windowHeight >= documentHeight - bottomThreshold;
  }

  useTranslate(lang: string) {
    return this.translate.use(lang)
  }
}
