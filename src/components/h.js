//   bucket fill selection logic
//   if (coordinates !== null) {
//     const m = matrix.current;
//     const x = coordinates.x;
//     const y = coordinates.y;

//     const areaCoordinates = (m, x, y, pixelColor) => {
//       //Get the input which needs to be replaced.
//       const currentColor = m[x][y];

//       //If the pixelColor is same as the existing
//       //Then return the original m.
//       if (currentColor === pixelColor) {
//         return m;
//       }

//       //Other wise call the fill function which will fill in the existing m.
//       fill(m, x, y, pixelColor, currentColor);

//       //Return the m once it is filled
//       return m;
//     };

//     const fill = (m, x, y, pixelColor, currentColor) => {
//       //If row is less than 0
//       if (x < 0) {
//         return;
//       }

//       //If column is less than 0
//       if (y < 0) {
//         return;
//       }

//       //If row is greater than m length
//       if (x > size - 1) {
//         return;
//       }

//       //If column is greater than m length
//       if (y > size - 1) {
//         return;
//       }

//       //If the currentColor pixel is not which needs to be replaced
//       if (m[x][y] !== currentColor) {
//         return;
//       }

//       //Update the new color
//       m[x][y] = pixelColor;

//       //Fill in all four directions
//       //Fill Prev row
//       fill(m, x - 1, y, pixelColor, currentColor);

//       //Fill Next row
//       fill(m, x + 1, y, pixelColor, currentColor);

//       //Fill Prev col
//       fill(m, x, y - 1, pixelColor, currentColor);

//       //Fill next col
//       fill(m, x, y + 1, pixelColor, currentColor);
//     };

//     console.log("matrix", m);
//     console.log("areaCoordinates", areaCoordinates);

//     Input: console.log(
//       areaCoordinates(
//         [
//           [1, 1, 1],
//           [1, 1, 0],
//           [1, 0, 1],
//         ],
//         0,
//         1,
//         2
//       )
//     );

//     Output: [
//       [2, 2, 2],
//       [2, 2, 0],
//       [2, 0, 1],
//     ];
//   }
