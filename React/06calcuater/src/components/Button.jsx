import style from "./Button.module.css"

function Button(){
     const buttonNames = ['c','7','8','9','*','4','5','6','-','1','2','3','+','/','=','.','0'];
    return(
         <div className={style.buttonContainer}>
            {buttonNames.map((buttonName)=> (
                    <button className={style.button}>{buttonName}</button>

            ))}
     
    </div>
    );
}
export default Button