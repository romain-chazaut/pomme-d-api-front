import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isEditing: boolean = false;
  isDeleting: boolean = false;
  profileData: any = {
    // Initial profile data
  };

  constructor(private router: Router) {}

  startEditing() {
    this.isEditing = true;
    // You can perform any necessary setup here
  }

  saveChanges() {
    // Perform the logic to save the changes made to the profile
    // You can access the updated profile data using this.profileData
    // Once the changes are saved, you can update the UI accordingly
    this.isEditing = false;
  }

  cancelEditing() {
    // Perform any necessary cleanup or revert changes made during editing
    this.isEditing = false;
  }

  deleteProfile() {
    this.isDeleting = true;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

}
