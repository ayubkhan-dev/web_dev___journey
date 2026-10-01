import style from "./Button.module.css"

function Button({onButtonClick}){
     const buttonNames = ['c','7','8','9','*','4','5','6','-','1','2','3','+','/','=','.','0'];
    return(
         <div className={style.buttonContainer} >
            {buttonNames.map((buttonName)=> (
                    <button className={style.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>

            ))}
            
     
    </div>
    );
}
export default Button