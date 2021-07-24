import { html, LitElement } from "lit";
import { customElement } from 'lit/decorators.js';

@customElement('complex-article')
class ComplexArticle extends LitElement {
	render() {
		return html`
			<article>
				<slot name="title">
					<p>This is only rendered if no title is provided</p>
				</slot>
				<slot name="content">
					<p>This is only rendered if no content is provided</p>
				</slot>
			</article>
		`;
	}
}

export default ComplexArticle;
