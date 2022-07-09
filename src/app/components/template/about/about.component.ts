import { Component, OnInit } from '@angular/core';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faArrowRight} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  iconGitHub=faGithub
  iconEmail=faEnvelope
  iconLinkedin=faLinkedin
  iconArrow=faArrowRight

  constructor() { }

  ngOnInit(): void {
  }

}
