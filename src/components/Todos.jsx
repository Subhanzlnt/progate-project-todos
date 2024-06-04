import TodoItem from './TodoItem.jsx' 

const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </div>
  )
}


export default Todos