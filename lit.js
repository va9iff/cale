import {LitElement, html} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js"

export class Lit extends LitElement {
	createRenderRoot() {
		return this
	}
	static set tag(tagName) {
		customElements.define(tagName, this)
	}
}

export {html}