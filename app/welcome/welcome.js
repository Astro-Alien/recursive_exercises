export default class Welcome extends crs.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    get shadowDom() {
        return true;
    }

    async connectedCallback() {
       await super.connectedCallback();
       this.shadowRoot.innerHTML = await fetch(this.html).then(result => result.text());
       
    }

}