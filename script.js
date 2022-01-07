const data = {
     lastname: "momo",
    firstname: "momo",
    age:23,
  names:  [{id:1,message: "Hello"},
           {id:2,message: "GoodBye"},
           {id:3,message: "Ciao"},
],
};

function renderApp(){
    ReactDOM.render(
        // <App {...data} />,
        <App
            lastname={"joh"}
            names={[
                {id:1,message: "Hello"},
                {id:2,message: "GoodBye"},
                {id:3,message: "Ciao"},
            ]}
            firstname={"huo"}
            age={20}
        />,
        document.querySelector("#root")
    );
}
renderApp();














//ancienne version de ce qu'il y a a la partir ligne 1

/*const rootElement = getElement("root");
const children = "helloWorld";
const className = "container";
const props = {
    className: "pop",
    children
};
const getMessage = () => "Hello World";
let component = <div {...props} />;
//let element = `<div class='container'></div>`;

element.innerHTML = getMessage();
ReactDOM.render(component, rootElement);*/

//ancienne  version ligne 2 dans cours react js (sans les div)
/*React.createElement("section", {
    children: [React.createElement("section", {
        children: ["Hello world "],
        className: "container",
        key: Math.random()
    }), "hello dady ", "hello sony"],
    className: "container"
});*/