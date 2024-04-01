"use client"
import { useState } from "react";

export default function SectionCarousel({
  classname = "",
  carouselItems = [],
  numberOfItemsToShow = 3
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClickNext = () => {
    console.log("click")
    setCurrentIndex( value => ((value + 1) % carouselItems.length) )
  }
  const handleClickPrev = () => setCurrentIndex( value => ((value - 1 + items.length) % items.length) )

  const currentItems = []
  for (let i = 0; i < numberOfItemsToShow; ++i) { 
    currentItems.push(carouselItems[ (i + currentIndex) % carouselItems.length ])
  }

  return (
    <div className={"w-full h-full flex items-center justify-center pl-5 pr-5 " + classname}>
      <div className="flex-[4] flex w-full h-full">
        { 
          currentItems.map((item, index) => {
            // TODO : We should give a proper key value in the future
            return (
            <div key={index} className="flex-1 w-full h-full">
              { item }
            </div>
            )
          })
        }
      </div>

      <div className="flex-[1] w-full h-full flex items-center justify-around ">
        <button onClick={handleClickPrev} className="w-10 h-10 bg-slate-800 rounded-full">L</button>
        <button onClick={handleClickNext} className="w-10 h-10 bg-slate-800 rounded-full">R</button>
      </div>
    </div>
  );
}