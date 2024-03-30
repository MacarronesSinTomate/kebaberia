export default function Button({
    className = "text-white border-2 bg-slate-900 rounded-sm border-gray-800 pl-10 pr-10 pt-2 pb-2 m-2",
    title = "BOTON",
    onClick = () => { console.log( "CLICK" ); }
}) {

    return <button 
        className={className} 
        onClick={onClick}
    >
        {title}
    </button>

}