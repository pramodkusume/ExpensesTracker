import './Card.css';
function Card(props) {
    const classes = 'card ' + props.className;
    //children is a special prop, automatically passed to every component, 
    //that can be used to render the content included between the opening and closing tags when invoking a custom component.
    //<Card>.......</Card>
    return <div className={classes} >{props.children}</div>;
}

export default Card;