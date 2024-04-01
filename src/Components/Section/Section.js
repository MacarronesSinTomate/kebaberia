export default function Section({
  percentage = 50,
  gap = 5,
  height = 100,
  classNameGeneral,
  classNameLeft,
  classNameRight,
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
  <div className={"text-black sm:!mb-0 " + classNameGeneral} 
  style={{
    width: "100%",
    height: `${height}px`,
    position: "relative",
    marginBottom: `${height}px`
  }}>
    <div className="sm:absolute w-full h-full relative flex justify-start">
      <div className={"flex justify-center items-center relative p-3 h-full rounded-r-lg max-sm:!w-[90%] " + classNameLeft}
        style={{ width: `${percentage}%` }}
      >
        { backgroundMaskLeft }
        { propChildrenLeft }
      </div>
    </div>
    
    <div className="sm:absolute w-full h-full relative flex justify-end">
      <div className={"flex justify-center items-center relative p-3 h-full rounded-l-lg max-sm:!w-[90%] " + classNameRight}
        style={{ width: `${100 - gap - percentage}%` }}
      >
        { backgroundMaskRight }
        { propChildrenRight }    
      </div>
    </div>
  </div>
  );
}