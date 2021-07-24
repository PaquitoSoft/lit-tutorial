import { html, render } from "lit";

const name = 'PaquitoSoft';
const element = html`
	<h1>Hello, ${name}</h1>
	<div>Welcome to Lit World!</div>
`;

render(
	element,
	document.getElementById('root')
);
