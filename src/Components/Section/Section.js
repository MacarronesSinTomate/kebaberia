export default function Section({
  percentage = 50,
  gap = 5,
  height = 100,
  className,
  propChildrenLeft,
  propChildrenRight,
  ...props
}) {
  
  return (
  <div className="text-black" 
  style={{
    width: "100%",
    height: `${height}px`,
    position: "relative"
  }}>
    <div className="sm:absolute w-full h-full relative flex justify-start mb-4">
      <div className={`flex justify-end p-3 h-full rounded-r-lg max-sm:!w-[90%] ` + className}
        style={{
          width: `${percentage}%`
        }}
      >
        { propChildrenLeft }
      </div>
    </div>
    
    <div className="sm:absolute w-full h-full relative flex justify-end">
      <div className={`flex justify-start p-3 h-full rounded-l-lg max-sm:!w-[90%] ` + className}
        style={{
          width: `${100 - gap - percentage}%`
        }}
      >
        { propChildrenRight }    
      </div>
    </div>
  </div>
  );
}