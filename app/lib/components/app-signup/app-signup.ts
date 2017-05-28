
export module AppSignUp {


    let template: HTMLTemplateElement = (<HTMLTemplateElement>document.currentScript.ownerDocument.querySelector('template#signup'));
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
                //notifyCount(newVal)
                break;
        }
    }


   
    document.registerElement('app-signup', {prototype: prototype})

}