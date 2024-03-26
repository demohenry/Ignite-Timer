import { HistoryContainer, HistoryList, Status } from "./styles"


export function History() {
  return (
    <HistoryContainer>
     <h1>Meu Histórico</h1>
     <HistoryList>
       <table>
         <thead>
           <tr>
             <th>Tarefa</th>
             <th>Duração</th>
             <th>Início</th>
             <th>Status</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>Fazer componente</td>
             <td>20 minutos</td>
             <td>Há cerca de 4 minutos</td>
             <td>
               <Status></Status>
             </td>
           </tr>
           <tr>
             <td>Fazer componente</td>
             <td>20 minutos</td>
             <td>Há cerca de 4 minutos</td>
             <td>
                <Status></Status>
             </td>
           </tr>
           <tr>
             <td>Fazer componente</td>
             <td>20 minutos</td>
             <td>Há cerca de 4 minutos</td>
             <td>
              <Status></Status>
             </td>
           </tr>
           <tr>
             <td>Fazer componente</td>
             <td>20 minutos</td>
             <td>Há cerca de 4 minutos</td>
             <td>
                <Status></Status>
             </td>
           </tr>
         </tbody>
         <tbody>

         </tbody>
       </table>
     </HistoryList>
    </HistoryContainer>
  )
}