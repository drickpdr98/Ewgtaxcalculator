export default function CalculateRates() {
  function calculatePayroll() {
    // Read values from the input fields
    const voucher = document.getElementById("voucher").value;
    const rate = parseFloat(document.getElementById("rate").value);
    const regularHours = parseFloat(
      document.getElementById("regularHours").value
    );
    const overtimeHours = parseFloat(
      document.getElementById("overtimeHours").value
    );
    const holidayHours = parseFloat(
      document.getElementById("holidayHours").value
    );

    // Calculate the required values
    const regularPay = rate * regularHours;
    const overtimePay = rate * 1.5 * overtimeHours;
    const holidayPay = rate * 2 * holidayHours;
    const grossPay = regularPay + overtimePay + holidayPay;

    // Calculate the taxes based on New York City rates
    const fitRate = 0.1113;
    const ficaRate = 0.062;
    const mediRate = 0.0145;
    const sitRate = 0.0465;
    const sdiRate = 0.0004;
    const fliRate = 0.0046;
    const cityRate = 0.0348;

    const fitTotal = grossPay * fitRate;
    const ficaTotal = grossPay * ficaRate;
    const mediTotal = grossPay * mediRate;
    const sitTotal = grossPay * sitRate;
    const sdiTotal = grossPay * sdiRate;
    const fliTotal = grossPay * fliRate;
    const cityTotal = grossPay * cityRate;

    const totalTaxes =
      fitTotal +
      ficaTotal +
      mediTotal +
      sitTotal +
      sdiTotal +
      fliTotal +
      cityTotal;

    const netPay = grossPay - totalTaxes;

    // Display the results
  //   const resultDiv = document.getElementById("result");
  //   resultDiv.innerHTML = `
  //   <h2>Payroll Details</h2>
  //   <p>Voucher #: ${voucher}</p>
  //   <p>Rate: $${rate.toFixed(2)}</p>
  //   <p>Regular Hours: ${regularHours.toFixed(2)}</p>
  //   <p>Overtime Hours: ${overtimeHours.toFixed(2)}</p>
  //   <p>Holiday Hours: ${holidayHours.toFixed(2)}</p>
  //   <p>Gross Pay: $${grossPay.toFixed(2)}</p>
  //   <p>Taxes Withheld:</p>
  //   <ul>
  //     <li>FIT: $${fitTotal.toFixed(2)}</li>
  //     <li>FICA: $${ficaTotal.toFixed(2)}</li>
  //     <li>MEDI: $${mediTotal.toFixed(2)}</li>
  //     <li>SIT: $${sitTotal.toFixed(2)}</li>
  //     <li>SDI: $${sdiTotal.toFixed(2)}</li>
  //     <li>FLI: $${fliTotal.toFixed(2)}</li>
  //     <li>CITY: $${cityTotal.toFixed(2)}</li>
  //   </ul>
  //   <p>Net Pay: $${netPay.toFixed(2)}</p>
  // `;
  // }
}
