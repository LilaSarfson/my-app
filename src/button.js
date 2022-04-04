/**
 * 
 * Un componente React creado en una función (functional component). 
 * Cuando hagamos click en el botón, queremos cambiar el color de fondo de toda la APP
 */
function Button(props) {

    // button si dispone del evento onClick 

    return (<button onClick={props.changeColor}
        style={{ 'fontSize': '20px' }} className='Btn'> {props.texto}
    </button>);
}
export default Button;