import { html, LitElement, css } from "lit";
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

const counterAppStyles = css`
	.counter-app {
		padding: 20px;
	}

	.main-value {
		font-size: 24px;
		font-weight: bolder;
	}

	.buttons-container {
		border: 1px solid black;
		border-radius: 4px;
		padding: 10px;
	}

	.add-button {
		border: 1px solid green;
		padding: 5px 2px;
	}

	.substract-button {
		border: 1px solid red;
		padding: 5px 2px;
	}
`;

@customElement('counter-app')
class CounterApp extends LitElement {
	@property({ type: Number })
	counter: number = 0;

	static styles = [counterAppStyles];

	addToCounter(event: CustomEvent<{ step: number }>) {
		this.counter += event.detail.step;
	}

	render() {
		return html`
			<div class="counter-app" @counter-updated=${this.addToCounter}>
				<p class="main-value">Current counter: ${this.counter}</p>
				<div class="buttons-container">
					<counter-button class="substract-button" step=${-1}></counter-button>
					<counter-button class="add-button" step=${1}></counter-button>
				</div>
			</div>
		`;
	}
}

export default CounterApp;
