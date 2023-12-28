export default function TabButton1({children, onSelect}){

    return(
        <button onClick={onSelect}>{children}</button>
    );
}