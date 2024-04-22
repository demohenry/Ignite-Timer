import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { CycleContext } from '../../../../contexts/CycleContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        // list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        placeholder="00"
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
