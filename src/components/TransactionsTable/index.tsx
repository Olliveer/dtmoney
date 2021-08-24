import { useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>titulo</th>
            <th>valor</th>
            <th>categoria</th>
            <th>data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>dev site</td>
            <td className="deposit">R$ 12,00</td>
            <td>dev</td>
            <td>10/08/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ -12,00</td>
            <td>casa</td>
            <td>10/08/2021</td>
          </tr>
          <tr>
            <td>dev site</td>
            <td className="deposit">R$ 12,00</td>
            <td>dev</td>
            <td>10/08/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ -12,00</td>
            <td>casa</td>
            <td>10/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
