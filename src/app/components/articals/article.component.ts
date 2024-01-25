import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as articleReducer from '../../reducers/article.reducer';
import * as fromActions from '../../action/article.actions';
import { ArticleState } from '../../reducers/app.states';
import { Article, FAVORITE_ARTICLES } from '../../models/article';
import { CommonModule, NgFor } from '@angular/common';

@Component({
	selector: 'app-article',
	templateUrl: 'article.component.html',
  standalone: true,
  imports:[CommonModule]
})
export class ArticleComponent {
	articles$: Observable<Article[]>;

	constructor(private store: Store<ArticleState>) {
		this.articles$ = store.select(articleReducer.getArticles);
	}
	showJavaArticles() {
		this.store.dispatch(fromActions.JavaArticlesAction());
	}
	showAngularArticles() {
		this.store.dispatch(fromActions.AngularArticlesAction());
	}
	showFavoriteArticles() {
		this.store.dispatch(fromActions.FavoriteArticlesAction({ payload: FAVORITE_ARTICLES }));
	}
}
