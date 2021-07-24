import { html, LitElement, render } from "lit";
import {customElement, property, query} from 'lit/decorators.js';

@customElement('focusable-input')
class FocusableInput extends LitElement {
	@query('.form-input')
	inputEl!: HTMLInputElement;

	onButtonClick() {
		this.inputEl.focus();
	}

	render() {
		return html`
			<form>
				<input type="text" size="20" class="form-input">
				<br />
				<button
					type="button"
					@click=${this.onButtonClick}
				>
					Click to focus on the form input
				</button>
			</form>
		`;
	}
}

export default FocusableInput;

// Vanilla
// class FocusableInput extends LitElement {
	
// 	get inputEl() {
// 		return this.renderRoot.querySelector('.form-input');
// 	}

// 	onButtonClick() {
// 		this.inputEl.focus();
// 	}

// 	render() {
// 		return html`
// 			<form>
// 				<input type="text" size="20" class="form-input">
// 				<br />
// 				<button
// 					type="button"
// 					@click=${this.onButtonClick}
// 				>
// 					Click to focus on the form input
// 				</button>
// 			</form>
// 		`;
// 	}
// }
// customElements.define('focusable-input', FocusableInput);
