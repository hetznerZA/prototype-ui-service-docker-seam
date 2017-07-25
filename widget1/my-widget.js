
class MyWidget extends Polymer.Element {

    static get is() {
        return 'my-widget';
    }

    static get properties() {
        return {
            service: {
                type: String,
                reflectToAttribute: true
            }
        };
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback(); 
        let btn = this.shadowRoot.querySelector('button');
        btn.addEventListener('click', (e) => {
            //fetch from remote
			this._fetch({
                method: 'GET',
                url: `${this.service}/?name=${this.shadowRoot.querySelector('input').value}`
            }).then(function(response) {
                alert(JSON.parse(response).greeting);
            }).catch();
        });
    }

	/**
     * @param {Object} options
     * @param {String} options.method
     * @param {String} options.url
     * @param {Object} options.headers
     * @return {Promise<Object, Error>}
     */
    _fetch(options) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(options.method || "GET", options.url);
            if (options.headers) {
                Object.keys(options.headers).forEach(key => {
                    xhr.setRequestHeader(key, options.headers[key]);
                });
            }
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send(options.body);
        });
    }

}

customElements.define(MyWidget.is, MyWidget);
