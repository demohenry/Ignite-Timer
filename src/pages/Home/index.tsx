import { FormEvent, useState } from "react";
import { useForm } from 'react-hook-form'
import { Play } from "phosphor-react";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { 
  HomeContainer, 
  FormContainer, 
  CountdownContainer, 
  Separator, 
  StartCountdownButton, 
  MinutesAmountInput, 
  TaskInput 
} from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number()
  .min(5, 'O Ciclo deve ser no mínimo 5 minutos')
  .max(60, 'O Ciclo deve ser de no máximo 60 minutos')
})


export function Home() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema)
  })

  const task = watch('task')

  function handleCreateNewCycle(data: any){
    console.log(data)
  }

  console.log(formState.errors)

  const isSubmitDisabled = !task

  return (
    <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)}>
          <FormContainer>
              <label htmlFor="task">Vou trabalhar em</label>
              <TaskInput 
                id="task"
                list="task-suggestions"
                placeholder="Dê um nome para o seu projeto"
                {...register('task')}
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
                  step={5}
                  min={5}
                  max={60}
                  placeholder="00"
                  {...register('minutesAmount', { valueAsNumber: true })}
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

            <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
              <Play size={24}/>
              Começar
            </StartCountdownButton>
        </form>
    </HomeContainer>
  )
}