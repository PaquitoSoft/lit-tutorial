import { html, LitElement, render } from "lit";
import {customElement, property} from 'lit/decorators.js';

// import './clock';
import './clock-v2';

import './simple-article';
import './complex-article';

const name = 'PaquitoSoft';
const $greeting = html`
	<h1>Hello, ${name}</h1>
	<div>Welcome to Lit World!</div>
`;

const isDisabled = false;
const customClass = 'app-login';
const value = 'none@nowhere.com';
const onSubmit = (event) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	console.log('Submitted values:', Object.fromEntries(formData));
};
const $form = html`
	<form
		@submit=${onSubmit}
	>
		<input 
			type="text"
			name="email"
			size=50
			?disabled=${isDisabled}
			class="form-input ${customClass}"
			.value=${value}
			required
		>
		<button type="submit">Log in</button>
	</form>
`;

@customElement('welcome-banner')
class WelcomBanner extends LitElement {
	@property({ type: String })
	name = '';

	render() {
		return html`
			<h1>Hello, ${this.name}!!!</h1>
		`;
	}
}

// class WelcomBannerVanilla extends LitElement {
// 	static get properties() {
// 		return {
// 			name: { type: String }
// 		}
// 	}

// 	constructor() {
// 		super();
// 		this.name = '';
// 	}

// 	render() {
// 		return html`
// 			<h1>Hi vanilla, ${this.name}!!!</h1>
// 		`;
// 	}
// }
// customElements.define('welcome-banner-vanilla', WelcomBannerVanilla);

const $welcomer = html`
	<welcome-banner name="PaquitoSoft"></welcome-banner>
`;

const $clocker = html`
	<lit-clock></lit-clock>
`;

const $simpleArticles = html`
	<simple-article></simple-article>
	<simple-article>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</simple-article>
`;

const $complexArticle = html`
	<complex-article>
		<p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<h2 slot="title">The end of the world</h2>
	</complex-article>

	<complex-article>
		<h2>How to rule the world</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</complex-article>
`;

render(
	// $greeting,
	// $form,
	// $welcomer,
	// $clocker,
	// $simpleArticles,
	$complexArticle,
	document.getElementById('root')
);
