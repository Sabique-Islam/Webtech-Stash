import ChildComponents from './ChildComponent'

const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponents name="Giorno&apos;s Theme" age={20} sem={3} />
    </div>
  )
}

export default ParentComponent
