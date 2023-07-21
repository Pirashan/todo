import { Draggable, Droppable } from "react-beautiful-dnd"

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number
}

function Column({id, todos, index}: Props) {
  return (
    <Draggable draggableId={id} index={index}>
        {(provided) => (
            <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                {/* render droppable todos in the column */}
                <Droppable droppableId={index.toString()} type="card">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={`p-2 rounded-2xl shadow-sm ${
                                snapshot.isDraggingOver ? "bg-blue-200" : "bg-white/50"
                            }`}
                        >
                            <h2>{id}</h2>
                        </div>
                    )}
                </Droppable>
            </div>
        )}
    </Draggable>
  )
}

export default Column