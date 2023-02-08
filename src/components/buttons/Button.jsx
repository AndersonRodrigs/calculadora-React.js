import './Button.css'

export function Button(props) {
  let classes = 'button '
  classes += props.operation ? 'operation' : ' '
  classes += props.double ? 'double ' : ' '
  classes += props.triple ? 'triple ' : ' '
  classes += props.action ? 'action ' : ' '
  return (
    <button
      className={classes}
      onClick={e => props.click && props.click(props.label)}
    >
      {props.label}
    </button>
  )
}
