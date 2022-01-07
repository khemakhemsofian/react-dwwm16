/*const rootElement = getElement("root");
const element = document.createElement('section');
element.textContent = "Hello world";
element.className = "container";
//element.style[key] = value;
rootElement.appendChild(element);
const list = ["root", "orders", "product"].map(getElement);*/
const htmlAttributes = {
    innerHTML: "innerHTML",
    textContent: "textContent",
    section: "section",
}
function getContent(balise) {
    return {
        div: "Hello",
        span: "holla",
        article: "holle"
    }[balise]
}

//meme chose que getontent mais plus optimisée et a amméliorer
/*function elementCreator(balise, option) {
    return {
        div: `<div class=${option.className}>${option.content}</div>`,
        span: `<span>${option.content}</span>`,
        article: `<article>${option.content}</article>`
    }[balise];
}*/




/*list.forEach(item => {
    console.log(item.localName);
    const div = createElement(item.localName);
    div.innerHtml = getContent('div');
    item.appendChild(div);
});*/

/*
Exo 1 - adaptez ces deux fonctions pour :

1 -- créer un element html
2 -- ajouter un enfant dans une balise html
3 créer une troisième fonction qui ajoute le contenu à une
 balise html
4 créer une 4ème fonction qui ajoute le css ou le style à une
 balise html
 */
//bonus
function getElement(id) {
    return document.querySelector(`#${id}`);
}
//1
function createElement(name) {
 return document.createElement(name);
}
function createReactElement(name, options) {
    return React.createElement(name, options);
}
//2
function appendTo(parent,child) {
   parent.appendChild(child);


}
//3
function addContent(element, key,value) {
    element[key] = value;
    return element;

}

//4
//version sans react
//function addClassOrStyle(element, key,value) {
   /* const isStyle = key !== "className";
     let res;
    if(isStyle) res = _addStyle(element, key, value);
   else res= _addClass(element, value);
   return res;
    //meme chose en plus simple
      return  key !== "className" ?
        _addStyle(element,key, value) :
        _addClass(element,value);
}*/
function addClassOrStyleREACT(element, key,value) {
    /* const isStyle = key !== "className";
      let res;
     if(isStyle) res = _addStyle(element, key, value);
    else res= _addClass(element, value);
    return res;*/
    //meme chose en plus simple
    return  key !== "className" ?
        _addStyle(element,key, value) :
        _addClassREACT(element,value);
}
//version sans react
/*function _addClass(element,value) {
     element["className"] = value;
    return element;
}*/

function _addClassREACT(element,value) {
    element.props["className"] = value;
    return element;
}
function _addStyle(element,key, value) {
     element["style"][key] = value;
    return element;
}

/*const rootElement = getElement("root");
let element = createElement(htmlAttributes.section);
element = addContent(element, htmlAttributes.innerHTML, "hello world");
element = addClassOrStyle(element, "classname", "container");
appendTo(rootElement, element);*/

const methodMan = {
    getElement: () => {
        this.element = getElement("root");
        return this;
    },
    createElement:() => {
        this.element = getElement("root");
        return this;
    },
    addContent:() => {
        this.element = getElement("root");
        return this;
    },
    addClassOrStyle:() => {
        this.element = getElement("root");
        return this;
    },
    appendChild:() => {
        this.element = getElement("root");
        return this;
    }
}


//methodMan.getElement("root").createElement("").addContent().addClassOrStyle().appendChild();
