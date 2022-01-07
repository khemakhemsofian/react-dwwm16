const App = (props) => {
    const state = {
       color: "red",
        boxShadow: '0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.14)',
        boxBorder: '1px solid #cc33',
        backgroundColor: '#ccc',
       counter: 0,
        username: ""
    }
    function setState(newState) {

        Object.assign(state, newState);
        const doc = document.getElementById("counterSet");
        doc.innerText = (state.counter).toString();
        console.log(state.username);
    }
    const styles  = () => ({
        /*  container: {
              margin:0
          },*/
        title: {
            background: "red",
            fontSize: "24px",
            fontWeight: 800
        },
        button: {
            border: state.boxBorder,
            borderRadius: 8,
            backgroundColor: state.backgroundColor, color: 'white',
            boxShadow: state.boxShadow,
            fontSize: 18
        }
    })
    const _styles = styles(state);
 const page = <div>
     <div style={_styles.title}>TEST</div>
     <>
         {props.names.map(item =>(
             <span key={item.id}>
                  {item.message}
              </span>
         ))}

     </>
     {/*New Part*/}
     <div>
         <p>Counter value : <span id={"counterSet"}>{state.counter}</span></p>
         Si nous souhaitons voir la valeur entrée dans le champs texte au moment de la saisie. Nous
         pouvons utiliser la fonction onChange
         <button style={_styles.button}
                 onClick={ () => setState({counter: state.counter + 1}) }
         >
             Try me
         </button>
         <p>Entered value : {state.username}</p>
         <input
             onBlur={(e) => setState({username: e.target.value})}
             onChange={(e) => setState({username: e.target.value})}
             type="text"
         />
     </div>
 </div>
  return  page
};





/*const PropTypes = {
    string(props, propName, componentName) {
        if (typeof props[propName] !== 'string') {
            return new Error(`This component ${componentName} needs the
            props ${propName} to be a string. But
            you've passed ${typeof props[propName]}`);
        }
    },
    number(props, propName, componentName) {
        if (typeof props[propName] !== 'number') {
            return new Error(`This component ${componentName} needs the
            props ${propName} to be a string. But
            you've passed ${typeof props[propName]}`);
        }
    }
}*/

App.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    names: PropTypes.array.isRequired

}