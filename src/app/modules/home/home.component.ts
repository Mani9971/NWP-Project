import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/@core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  results: any;
  userInput: any;

  constructor(private api: ApiService, private router: Router) {}

  search(event: any) {
    this.api
      .getAll()
      .pipe(
        tap((restaurants) => {
          this.results = restaurants.filter((x) =>
            x.name.toUpperCase().includes(event.query.toUpperCase())
          );
        })
      )
      .subscribe();
  }

  searchPressed() {
    this.router.navigate(['restaurants']);
  }

  onSelect() {
    this.router.navigate(['restaurants'], {
      queryParams: { id: this.userInput.id },
    });
  }

  ngOnInit(): void {}
}
