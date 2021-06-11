customElements.define("makes-world", class extends HTMLElement{
    connectedCallback() {
        this.innerText = "world";
    }
});