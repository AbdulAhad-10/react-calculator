export default function CalcButton (props) {
    return(
        <>
        <button className={props.className} onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
        </>
    );
}