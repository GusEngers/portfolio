import { Component, Input } from '@angular/core';
import { IUrl, ITech } from '../../interfaces/project.interface';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() links: IUrl[] = [];
  @Input() techs: ITech[] = [];
}
