import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { NgStyle } from "../../../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'issues-labels-selector',
  imports: [],
  templateUrl: './labels-selector.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsSelectorComponent {

  issuesService = inject(IssuesService);
  labels = input.required<GitHubLabel[]>();

  isSelected(label: string) {
    return this.issuesService.selectedLabels().has(label);
  }

  onToggleLabel(label: string) {
    this.issuesService.toggleLabel(label);
  }

}
