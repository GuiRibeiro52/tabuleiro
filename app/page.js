import Quadrado from "./components/Quadrado";

export default function Tabuleiro() {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex">
        <Quadrado black piece="black" />
        <Quadrado />
        <Quadrado black piece="black" />
        <Quadrado />
        <Quadrado black piece="black" />
        <Quadrado />
        <Quadrado black piece="black" />
        <Quadrado />
      </div>
      <div className="flex">
        <Quadrado />
        <Quadrado black piece="black" />
        <Quadrado />
        <Quadrado black piece="black" />
        <Quadrado />
        <Quadrado black piece="black" />
        <Quadrado />
        <Quadrado black piece="black" />
      </div>
      <div className="flex">
        <Quadrado black piece="black" />
        <Quadrado />
        <Quadrado black piece="black" />
        <Quadrado />
        <Quadrado black piece="black" />
        <Quadrado />
        <Quadrado black piece="black" />
        <Quadrado />
      </div>
      <div className="flex">
        <Quadrado />
        <Quadrado black />
        <Quadrado />
        <Quadrado black />
        <Quadrado />
        <Quadrado black />
        <Quadrado />
        <Quadrado black />
      </div>
      <div className="flex">
        <Quadrado black />
        <Quadrado />
        <Quadrado black />
        <Quadrado />
        <Quadrado black />
        <Quadrado />
        <Quadrado black />
        <Quadrado />
      </div>
      <div className="flex">
        <Quadrado />
        <Quadrado black piece="white" />
        <Quadrado />
        <Quadrado black piece="white" />
        <Quadrado />
        <Quadrado black piece="white" />
        <Quadrado />
        <Quadrado black piece="white" />
      </div>
      <div className="flex">
        <Quadrado black piece="white" />
        <Quadrado />
        <Quadrado black piece="white" />
        <Quadrado />
        <Quadrado black piece="white" />
        <Quadrado />
        <Quadrado black piece="white" />
        <Quadrado />
      </div>
      <div className="flex">
        <Quadrado />
        <Quadrado black piece="white" />
        <Quadrado />
        <Quadrado black piece="white" />
        <Quadrado />
        <Quadrado black piece="white" />
        <Quadrado />
        <Quadrado black piece="white" />
      </div>
    </div>
  );
}
