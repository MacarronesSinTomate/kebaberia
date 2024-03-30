
import Section from "@/components/Section/Section";

export default function Home() {
  return (
    <main className="mt-[200px]">
      <Section height={200} percentage={70} gap={1} className={"bg-white"} 
        propChildrenLeft={
          <p>KAKA</p>
        } 
        propChildrenRight={
          <p>prueba</p>
        } 
      />
    </main>
  );
}
