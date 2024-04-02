export default function Section({
  percentage = 50,
  gap = 500,
  height = 100,
  classNameGeneral = "",
  classNameLeft = "",
  classNameRight = "",
  propChildrenLeft,
  propChildrenRight,
  maskLeft,
  maskRight,
  ...props
}) {
  
  const backgroundMaskLeft = (maskLeft)
    ? <div 
        className="opacity-20 h-full w-full absolute" 
        style={{ 
          backgroundImage: `url(${maskLeft})`, 
          backgroundPosition:"50% 50%", 
          backgroundSize: "contain", 
          backgroundRepeat: "no-repeat" 
        }}
      />
    : ""

    const backgroundMaskRight = (maskRight)
    ? <div 
        className="opacity-20 h-full w-full absolute" 
        style={{ 
          backgroundImage: `url(${maskRight})`, 
          backgroundPosition:"50% 50%", 
          backgroundSize: "contain", 
          backgroundRepeat: "no-repeat" 
        }}
      />
    : ""

  return (
  <div className={"w-full text-black flex flex-col sm:flex-row max-sm:!h-auto " + classNameGeneral} 
    style={{
      height: `${height}px`,
      position: "relative"
    }}
  >
    <div className={"flex justify-center items-center relative p-3 h-full w-full rounded-r-lg max-sm:!flex-1 " + classNameLeft}
      style={{ 
        flex: `${percentage} ${percentage} 0%`, 
        minHeight: `${height}px`
      }}
    >
      { backgroundMaskLeft }
      { propChildrenLeft }
    </div>
    
    <div className={"flex justify-center items-center relative p-3 h-full w-full rounded-l-lg max-sm:!flex-1 " + classNameRight}
      style={{ 
        flex: `${100 - percentage} ${100 - percentage} 0%`, 
        minHeight: `${height}px` 
      }}
    >
      { backgroundMaskRight }
      { propChildrenRight }    
    </div>
  </div>
  );
}