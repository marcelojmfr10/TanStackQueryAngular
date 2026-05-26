import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';

@Component({
  selector: 'app-issue-page',
  imports: [RouterLink, IssueCommentComponent],
  templateUrl: './issue-page.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuePageComponent {
  issueService = inject(IssueService);

  route = inject(ActivatedRoute);
  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      // tap(this.issueService.setIssueNumber) no funciona, ya que el this no apunta al servicio, a menos que se haga una función de =>
      tap((issueNumber) => this.issueService.setIssueNumber(issueNumber)),
    ),
  );

  issueQuery = this.issueService.issueQuery;
  issueCommentsQuery = this.issueService.issueCommentsQuery;
}
