import { Component, inject } from '@angular/core';
import { ProfileDataService } from './profile.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { map } from 'rxjs';
import { ProfileService } from 'app/services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
 logo$: any;
  companyName: string = 'شركة التقنيات المتقدمة';
  constructor( private profileService: ProfileService) {
    this.logo$ = this.profileService.getProfile$().pipe(
      map(p => environment.apiBaseUrl + p.company_logo)
    );
  }
  profile:any;
  profileDataService = inject(ProfileDataService);

  ngOnInit(): void {
     this.profileDataService.getProfile().subscribe({
          next: (data:any) => {
            this.profile = data.data.profile;
            this.companyName = this.profile.company_name;
            debugger;
            console.log('Profile data:', this.profile);
          }
       });
  }

}
