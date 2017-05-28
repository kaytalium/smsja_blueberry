
export module AppLogin {


    let template: HTMLTemplateElement = (<HTMLTemplateElement>document.currentScript.ownerDocument.querySelector('template#login'));
    let prototype = Object.create(HTMLElement.prototype);

    //variables for the html element we want to affect
    let $notify: HTMLElement;
    let $dropbox: HTMLElement; 
    let $itemCount: HTMLElement;

    //Fires when an instance of the element is created.
    prototype.createdCallback = function () {
        this.createShadowRoot().appendChild(document.importNode(template.content, true));

        //Get elements from shadow root 
       // $notify = this.shadowRoot.querySelector('.notify');
        //$dropbox = this.shadowRoot.querySelector('.dropbox');
        //$itemCount = this.shadowRoot.querySelector('.itemCount');


        //$notify.addEventListener('click', onclick.bind(this))


    }

    //Fires when an instance was inserted into the document
    prototype.attachedCallback = function(){}

    //Fires when an attribute was added, removed, or updated
    prototype.attributeChangedCallback = function(attrName, oldVal, newVal){
        switch (attrName) {
            case 'new-item-count':
                notifyCount(newVal)
                break;
        }
    }


    /**
     * 
     * @param {*} e 
     * display dropdown of element
     */
    function onclick(e){
        //console.log(e)
        const isOpen = this.shadowRoot.querySelector('.dropbox.is-open')

        if (isOpen) {
            $dropbox.classList.remove('is-open')
        } else {
            $dropbox.classList.add('is-open')
        }
    }

    function notifyCount(n){
        //check to ensure its a number before assign
        if (n) {
            $itemCount.innerHTML = n;
        }
    }






    document.registerElement('app-login', {prototype: prototype})

}