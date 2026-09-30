import styles from "./Display.module.css"

function Display({displayvalue}){
    return(
     <div className={styles.display}>
        <input type="text" name="" id="" value={displayvalue} readOnly/></div>
     );
}
export default Display