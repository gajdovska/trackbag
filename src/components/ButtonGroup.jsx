import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

function ButtonGroup() {
	const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
	const markAllAsIncomplete = useItemsStore(
		(state) => state.markAllAsIncomplete
	);
	const resetToInitialState = useItemsStore(
		(state) => state.resetToInitialState
	);
	const removeAllItems = useItemsStore((state) => state.removeAllItems);

	const secondaryButtonActions = [
		{
			text: "Mark all as complete",
			onClick: markAllAsComplete,
		},
		{
			text: "Mark all as incomplete",
			onClick: markAllAsIncomplete,
		},
		{
			text: "Reset to initial state",
			onClick: resetToInitialState,
		},
		{
			text: "Remove all items",
			onClick: removeAllItems,
		},
	];

	return (
		<section className="button-group">
			{secondaryButtonActions.map(({ text, onClick }) => {
				return (
					<Button onClick={onClick} key={text} btnStyleType="secondary">
						{text}
					</Button>
				);
			})}
		</section>
	);
}

export default ButtonGroup;
