export default function MainCentered({
  width = 80,
  classname,
  children
}) {

  return (
    <main 
      className={"relative left-1/2 -translate-x-1/2 " + classname}
      style={{ width: `${width}%` }}
    >
      { children }
    </main>
  );
}