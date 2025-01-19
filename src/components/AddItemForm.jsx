import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";
import { useRef, useState } from "react";

function AddItemForm() {
	const { addItem } = useItemsStore((state) => ({
		addItem: state.addItem,
	}));
	const [toDoItem, setToDoItem] = useState("");
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!toDoItem.trim()) {
			alert("Please enter a to-do item.");
			inputRef.current.focus();
			return;
		}

		addItem(toDoItem);
		setToDoItem("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				ref={inputRef}
				onChange={(e) => {
					setToDoItem(e.target.value);
				}}
				autoFocus
				value={toDoItem}
			/>
			<Button>Add to list</Button>
		</form>
	);
}

export default AddItemForm;
