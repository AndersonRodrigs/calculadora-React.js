import "./Display.css"

export function Display(props) {
  return (
    <div className="display " >
      <h1>{props.value}</h1>
    </div>
  )
}