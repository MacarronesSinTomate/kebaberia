
import SectionCarousel from "@/Components/SectionCarousel/SectionCarousel";
import SectionProduct from "@/Components/SectionProduct/SectionProduct";
import Section from "@/components/Section/Section";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Section 
        height={550} 
        percentage={50} 
        gap={0} 
        classNameGeneral={""} 
        classNameLeft={"bg-black text-white"}
        classNameRight={"bg-[#b02f15] rounded-tl-none rounded-bl-3xl"}
        propChildrenLeft={<SectionProduct />} 
        propChildrenRight=
        {
          <div className="h-full w-full absolute bg-no-repeat" style={{ backgroundPosition: "50% 100%", backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />
        } 
        maskRight={"https://cdn-icons-png.flaticon.com/512/135/135181.png"}
      />

      <Section 
        height={250} 
        percentage={51} 
        gap={0} 
        classNameGeneral={"mt-[80px]"} 
        classNameLeft={"bg-[#222] text-white rounded-r-3xl"}
        classNameRight={""}
        propChildrenLeft={
          <SectionCarousel 
            carouselItems={
              [
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />,
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />,
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />,
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />,
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />
              ]
            }
          />
        }
      />

      <Section 
        height={550} 
        percentage={48} 
        gap={0} 
        classNameGeneral={"mt-[80px]"} 
        classNameLeft={"bg-[#b02f15] rounded-tr-3xl rounded-br-3xl"}
        classNameRight={"bg-black text-white"}
        propChildrenLeft=
        {
          <div className="h-full w-full absolute bg-no-repeat" style={{ backgroundPosition: "50% 100%", backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />
        } 
        propChildrenRight={<SectionProduct />} 
        maskRight={"https://cdn-icons-png.flaticon.com/512/135/135181.png"}
      />

      <Section 
        height={250} 
        percentage={45} 
        gap={0} 
        classNameGeneral={"mt-[80px]"} 
        classNameLeft={""}
        classNameRight={"bg-[#222] text-white rounded-l-3xl"}
        propChildrenRight={
          <SectionCarousel 
            carouselItems={
              [
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />,
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />,
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />,
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />,
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />
              ]
            }
          />
        }
      />

    </main>
  );
}
