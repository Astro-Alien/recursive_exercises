export default class Welcome extends crs.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    get shadowDom() {
        return true;
    }

    connectedCallback() {
        
    }

    createRecords(n) {
        const records = [];

        //create n number of records

        return records
    }
}