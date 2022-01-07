const App = ({firstname, lastname, age}) =>(
    <div>
        Hello {firstname} {lastname}, you are {age} old(s)
    </div>
);

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
    age: PropTypes.number.isRequired

}