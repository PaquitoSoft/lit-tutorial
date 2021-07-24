import { render, LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('lit-clock')
class LitClock extends LitElement {
	@state()
	private date = new Date();
	
	private timerId = -1 as unknown as ReturnType<typeof setTimeout>;
	
	connectedCallback() {
		super.connectedCallback();
		console.log('connectedCallback');
		
		this.timerId = setInterval(
			() => this.tick(),
			1000
		);
	}
	
	disconnectedCallback() {
		super.disconnectedCallback();
		console.log('disconnectedCallback');
		clearInterval(this.timerId);
	}
	
	tick() {
		this.date = new Date();
	}
	
	render() {
		// console.log('render');
		return html`
			<div>
				<h1>Hello, there!</h1>
				<h2>It is ${this.date.toLocaleTimeString()}</h2>
			</div>
		`;
	}
}

// Vanilla version
// class LitClock extends LitElement {
// 	static get properties() {
// 		return {
// 			date: {state: true}
// 		}
// 	}
	
// 	constructor() {
// 		super();
// 		this.date = new Date();
// 	}
	
// 	connectedCallback() {
// 	super.connectedCallback();
// 	this.timerId = setInterval(
// 		() => this.tick(),
// 		1000
// 		);
// 	}
	
// 	tick() {
// 		this.date = new Date();
// 	}
	
// 	render() {
// 		return html`
// 		<div>
// 		<h1>Hello, World!</h1>
// 		<h2>It is ${this.date.toLocaleTimeString()}.</h2>
// 		</div>
// 		`;
// 	}
	
// 	disconnectedCallback() {
// 		super.disconnectedCallback();
// 		clearInterval(this.timerId);
// 	}
// }
// customElements.define('lit-clock', LitClock);
