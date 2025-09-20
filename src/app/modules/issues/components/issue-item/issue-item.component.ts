import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'issue-item',
  imports: [RouterLink],
  templateUrl: './issue-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueItemComponent {

  issue = input.required<GitHubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }

 }
