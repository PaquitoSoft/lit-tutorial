import { html, LitElement } from "lit";
import { customElement, property, state } from 'lit/decorators.js';

@customElement('counter-button')
class CounterButton extends LitElement {
	@property({ type: Number })
	step: number = 0;

	onClick() {
		const event = new CustomEvent('counter-updated', {
			bubbles: true,
			detail: {
				step: this.step
			}
		});

		this.dispatchEvent(event);
	}

	render() {
		const label = this.step < 0 ? `- ${-1 * this.step}` : `+ ${this.step}`;

		return html`
			<button
				type="button"
				@click=${this.onClick}
			>
				${label}
			</button>
		`;
	}
}

@customElement('counter-app')
class CounterApp extends LitElement {
	@property({ type: Number })
	counter: number = 0;

	addToCounter(event: CustomEvent<{ step: number }>) {
		this.counter += event.detail.step;
	}

	render() {
		return html`
			<div @counter-updated=${this.addToCounter}>
				<p>Current counter: ${this.counter}</p>
				<div>
					<counter-button step=${-1}></counter-button>
					<counter-button step=${1}></counter-button>
				</div>
			</div>
		`;
	}
}

export default CounterApp;
