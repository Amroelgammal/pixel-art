import Pixel from "./Pixel";

function Row({ size, pixelColor, rowId, setCoordinates, matrix }) {
  let columns = [];

  for (let i = 0; i < size; i++) {
    columns.push(
      <Pixel
        setCoordinates={setCoordinates}
        matrix={matrix}
        rowId={rowId}
        columnId={i}
        key={i}
        size={size}
        pixelColor={pixelColor}
      />
    );
  }

  return <div>{columns}</div>;
}

export default Row;
