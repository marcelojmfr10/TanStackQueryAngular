import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { NgStyle } from "../../../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'issues-labels-selector',
  imports: [],
  templateUrl: './labels-selector.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsSelectorComponent {

  labels = input.required<GitHubLabel[]>();

}
