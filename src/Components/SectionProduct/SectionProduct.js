export default function SectionProduct({
  className = "",
  title = "Kebab",
  subtitle = "Test",
  buttonText = "Pedir Ahora",
  price = "69.99",
  cartButton = "A",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus tellus id sapien venenatis luctus. Donec pellentesque condimentum ipsum."
}) {

  return (
    <div className={ "relative pl-16 " + className }>
      {/* TODO Poner el logo cuando averiguemos que le pasa a las imagenes */}
      <p className="h-[120px] text-[120px] sm:text-[100px] md:text-[150px] text-start">
        { title }
      </p>
      <p className="text-[120px] sm:text-[100px] md:text-[150px] text-start">
        { subtitle }
      </p>
      <button className="bg-slate-800 w-1/2 h-[30px]">
        { buttonText }
      </button>
      <div className="mt-4 flex items-center">
        <span className="text-3xl"> 
          { "$ " + price }
        </span>
        <button className="ml-5 rounded-full bg-[#b02f15] h-10 w-10"> 
          { cartButton }
        </button>
      </div>
      <p className="text-sm text-justify w-2/3 mt-5">
        { description }
      </p>
    </div>
  );
}