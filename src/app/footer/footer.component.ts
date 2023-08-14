import { Component } from '@angular/core';
import profileDetails from 'src/assets/profileDetails';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    profileDetails = profileDetails;

}
