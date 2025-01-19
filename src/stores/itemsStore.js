import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
	persist(
		(set) => ({
			items: initialItems,
			addItem: (newItemText) =>
				set((state) => {
					const newItem = {
						id: new Date().getTime(),
						text: newItemText,
						completed: false,
					};
					return { items: [...state.items, newItem] };
				}),
			removeItem: (id) =>
				set((state) => ({
					items: state.items.filter((item) => item.id !== id),
				})),
			toggleItemCompletition: (id) =>
				set((state) => ({
					items: state.items.map((item) => {
						console.log(item, "item");
						if (item.id === id) {
							return { ...item, completed: !item.completed };
						}
						return item;
					}),
				})),
			removeAllItems: () => set({ items: [] }),
			resetToInitialState: () => set({ items: initialItems }),
			markAllAsComplete: () =>
				set((state) => {
					const newItems = state.items.map((item) => ({
						...item,
						completed: true,
					}));
					return { items: newItems };
				}),
			markAllAsIncomplete: () =>
				set((state) => {
					const newItems = state.items.map((item) => ({
						...item,
						completed: false,
					}));
					return { items: newItems };
				}),
		}),
		{ name: "items" }
	)
);
