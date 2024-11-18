import './Button.css'

function Button(props){
    return (
        <>
        <div>
            <button className='btn '>{props.button}</button>
        </div>
        </>
    )
}
export default Button;  
