function GroceryItem(props) {
  function onClick() {
    alert(props.name)
  }
  return (
    <button onClick={onClick}>{props.name}</button>
  )
}

export default GroceryItem;