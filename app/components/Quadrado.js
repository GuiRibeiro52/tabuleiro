export default function Quadrado(props) {
    let circleColor = "transparent";
    if (props.piece === "black") circleColor = "blue";
    if (props.piece === "white") circleColor = "green";
  
    return (
      <div
        style={{
          backgroundColor: props.black ? "black" : "white",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid",
        }}
      >
        <div
          style={{
            backgroundColor: circleColor,
            width: "32px",
            height: "32px",
            borderRadius: "50%",
          }}
        >
        </div>
      </div>
    );
  }
  