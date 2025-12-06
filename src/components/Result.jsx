import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {[
              "Year",
              "Investment Value",
              "Interest (Year)",
              "Total Interest",
              "Invested Capital",
            ].map((title) => (
              <TableCell key={title}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {resultData.map((yearData) => {
            const totalIntreset =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalIntreset;
            return (
              <TableRow key={yearData.year}>
                <TableCell>{yearData.year}</TableCell>
                <TableCell>
                  {formatter.format(yearData.valueEndOfYear)}
                </TableCell>
                <TableCell>{formatter.format(yearData.interest)}</TableCell>
                <TableCell>{formatter.format(totalIntreset)}</TableCell>
                <TableCell>{formatter.format(totalAmountInvested)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
