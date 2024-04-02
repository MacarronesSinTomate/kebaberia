
import SectionCarousel from "@/Components/SectionCarousel/SectionCarousel";
import SectionContact from "@/Components/SectionContact/SectionContact";
import SectionDiscount from "@/Components/SectionDiscount/SectionDiscount";
import SectionProduct from "@/Components/SectionProduct/SectionProduct";
import Section from "@/Components/Section/Section";
import Image from 'next/image'
import MainCentered from "@/Components/MainCentered/MainCentered";

export default function Home() {
  return (
    <MainCentered width={80} className="">
      <Section 
        height={550} 
        percentage={50} 
        classNameLeft={"text-white pt-20"}
        classNameRight={"bg-[#b02f15] rounded-tl-none rounded-bl-3xl"}
        propChildrenLeft={<SectionProduct />} 
        propChildrenRight={
          <div className="h-full w-full absolute bg-no-repeat" style={{ backgroundPosition: "50% 100%", backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />
        } 
        maskRight={"https://cdn-icons-png.flaticon.com/512/135/135181.png"}
      />

      <Section 
        height={250} 
        percentage={70} 
        classNameGeneral={"mt-[80px]"} 
        classNameLeft={"bg-[#222] text-white rounded-r-3xl"}
        classNameRight={""}
        propChildrenLeft={
          <SectionCarousel 
            carouselItems={
              [
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />,
                <div key="kebab2" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://www.royalkebab-pizzeria.es/wp-content/uploads/2021/09/kebab-4.png)"}} />,
                <div key="kebab3" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://www.royalkebab-pizzeria.es/wp-content/uploads/2021/09/kebab-vegetal.png)"}} />,
                <div key="kebab4" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://www.kebabambar.com/wp-content/uploads/2017/09/Menu-Kebab-Falafel.png)"}} />,
                <div key="kebab5" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://lappetitosa.es/wp-content/uploads/2021/05/plato_kebab_arroz.png)"}} />
              ]
            }
          />
        }
        propChildrenRight={
          <SectionDiscount 
            sideImage="https://lappetitosa.es/wp-content/uploads/2021/05/plato_kebab_arroz.png"
          />
        }
      />

      <Section 
        height={550} 
        percentage={50} 
        classNameGeneral={"mt-[80px]"} 
        classNameLeft={"bg-[#b02f15] rounded-tr-3xl rounded-br-3xl"}
        classNameRight={"text-white"}
        propChildrenLeft={ 
          <div className="h-full w-full absolute bg-no-repeat" style={{ backgroundPosition: "50% 100%", backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />
        } 
        propChildrenRight={<SectionProduct />} 
        maskLeft={"https://cdn-icons-png.flaticon.com/512/135/135181.png"}
      />

      <Section 
        height={250} 
        percentage={30} 
        gap={0} 
        classNameGeneral={"mt-[80px]"} 
        classNameLeft={""}
        classNameRight={"bg-[#222] text-white rounded-l-3xl"}
        propChildrenLeft={ <SectionContact /> }
        propChildrenRight={
          <SectionCarousel 
            carouselItems={
              [
                <div key="kebab1" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://pizzerialapizzeria.com/wp-content/uploads/2022/11/PRODUCTOS_PROD.-KEBAB-450x450.png)"}} />,
                <div key="kebab2" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://www.royalkebab-pizzeria.es/wp-content/uploads/2021/09/kebab-4.png)"}} />,
                <div key="kebab3" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://www.royalkebab-pizzeria.es/wp-content/uploads/2021/09/kebab-vegetal.png)"}} />,
                <div key="kebab4" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://www.kebabambar.com/wp-content/uploads/2017/09/Menu-Kebab-Falafel.png)"}} />,
                <div key="kebab5" className="w-full h-full bg-center bg-contain bg-no-repeat" style={{backgroundImage: "url(https://lappetitosa.es/wp-content/uploads/2021/05/plato_kebab_arroz.png)"}} />
              ]
            }
          />
        }
      />

    </MainCentered>
  );
}
