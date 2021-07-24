import { html, LitElement } from "lit";
import { customElement } from 'lit/decorators.js';

@customElement('simple-article')
class SimpleArticle extends LitElement {
	render() {
		return html`
			<article>
				<slot>
					<p>This is only rendered if no slots are provided</p>
				</slot>
			</article>
		`;
	}
}

export default SimpleArticle;
