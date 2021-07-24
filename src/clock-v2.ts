import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { ClockController } from './clock-controller';

@customElement('lit-clock')
class LitClock extends LitElement {
	private readonly clock = new ClockController(this);

	render() {
		// console.log('render');
		return html`
			<div>
				<h1>Hello, there!</h1>
				<h2>It is ${this.clock.date.toLocaleTimeString()}</h2>
			</div>
		`;
	}
}

// Vanilla version
// class MyElement extends LitElement {
// 	clock = new ClockController(this); // Instantiate
  
// 	render() {
// 	  // Use controller
// 	  return html`
// 		<div>
// 		  <h1>Hello, world!</h1>
// 		  <h2>It is ${this.clock.date.toLocaleTimeString()}.</h2>
// 		</div>
// 	  `;
// 	}
// }
// customElements.define('my-element', MyElement);
