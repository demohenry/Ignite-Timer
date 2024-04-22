import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CycleContext } from '../../contexts/CycleContext'

export function History() {
  const { cycles } = useContext(CycleContext)

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

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
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Fazer componente</td>
              <td>20 minutos</td>
              <td>Há cerca de 4 minutos</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Fazer componente</td>
              <td>20 minutos</td>
              <td>Há cerca de 4 minutos</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Fazer componente</td>
              <td>20 minutos</td>
              <td>Há cerca de 4 minutos</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
          <tbody></tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
