import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountdownContainer, Separator, StartCountdownButton, MinutesAmountInput, TaskInput } from "./styles";


export function Home() {
  return (
    <HomeContainer>
        <form>
          <FormContainer>
              <label htmlFor="task">Vou trabalhar em</label>
              <TaskInput 
                id="task" 
                placeholder="Dê um nome para o seu projeto"
                list="task-suggestions"
                />

                <datalist id="task-suggestions">
                  <option value="Finalizar exercício"></option>
                  <option value="Finalizar exercício"></option>
                  <option value="Finalizar exercício"></option>
                  <option value="Finalizar exercício"></option>
                </datalist>

              <label htmlFor="minutesAmount">durante</label>
                <MinutesAmountInput 
                  type="number" 
                  id="minutesAmount"
                  min={5}
                  max={60}
                  step={5}
                  placeholder="00"
                  readOnly
                />

              <span>minutos.</span>
          </FormContainer>

          <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </CountdownContainer>

            <StartCountdownButton type="submit">
              <Play size={24}/>
              Começar
            </StartCountdownButton>
        </form>
    </HomeContainer>
  )
}