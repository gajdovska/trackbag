import { useState, useMemo } from "react";
import { sortingOptions } from "../lib/constants";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemsStore } from "../stores/itemsStore";

function ItemList() {
	const items = useItemsStore((state) => state.items);
	const removeItem = useItemsStore((state) => state.removeItem);
	const toggleItemCompletion = useItemsStore(
		(state) => state.toggleItemCompletition
	);

	const [sortBy, setSortBy] = useState(sortingOptions[0]);

	const sortedItems = useMemo(
		() =>
			[...items].sort((a, b) => {
				if (sortBy === "completed") {
					return b.completed - a.completed;
				}
				if (sortBy === "uncompleted") {
					return a.completed - b.completed;
				}
				return;
			}),
		[items, sortBy]
	);

	console.log(sortedItems, "sorted items");

	return (
		<ul className="item-list">
			{items.length > 0 ? (
				<section className="sorting">
					<Select
						onChange={(option) => setSortBy(option.value)}
						options={sortingOptions}
					/>
				</section>
			) : null}

			{items.length === 0 && <EmptyView />}
			{sortedItems.map(({ id, text, completed }) => (
				<li className="item" key={id}>
					<label htmlFor={id}>
						<input
							type="checkbox"
							checked={completed}
							id={id}
							onChange={() => toggleItemCompletion(id)}
						/>
						{text}
					</label>
					<button onClick={() => removeItem(id)}>❌</button>
				</li>
			))}
		</ul>
	);
}

export default ItemList;
