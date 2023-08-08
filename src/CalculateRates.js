// export default function CalculateRates({ onGetTaxdata, data }) {
//   const dataRate = {};
//   // Calculate the required values
//   const regularPay = data.rate * data.regularHours;
//   const overtimePay = data.rate * 1.5 * data.overtimeHours;
//   const holidayPay = data.rate * 2 * data.holidayHours;
//   const grossPay = data.regularPay + data.overtimePay + data.holidayPay;

//   // Calculate the taxes based on New York City rates
//   const fitRate = 0.1113;
//   const ficaRate = 0.062;
//   const mediRate = 0.0145;
//   const sitRate = 0.0465;
//   const sdiRate = 0.0004;
//   const fliRate = 0.0046;
//   const cityRate = 0.0348;

//   const fitTotal = grossPay * fitRate;
//   const ficaTotal = grossPay * ficaRate;
//   const mediTotal = grossPay * mediRate;
//   const sitTotal = grossPay * sitRate;
//   const sdiTotal = grossPay * sdiRate;
//   const fliTotal = grossPay * fliRate;
//   const cityTotal = grossPay * cityRate;

//   dataRate.totalTaxes =
//     fitTotal +
//     ficaTotal +
//     mediTotal +
//     sitTotal +
//     sdiTotal +
//     fliTotal +
//     cityTotal;

//   dataRate.netPay = dataRate.grossPay - dataRate.totalTaxes;

//   // }
// }
