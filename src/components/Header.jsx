import { useItemsStore } from "../stores/itemsStore";

function Header() {
	const items = useItemsStore((state) => state.items);
	const numberOfCompletedItems = items.filter((item) => item?.completed).length;
	const totalNumberOfItems = items?.length;

	return (
		<header>
			<img
				src="https://bytegrad.com/course-assets/react-nextjs/dots.png"
				alt="logo"
			/>
			<p>
				{numberOfCompletedItems}/{totalNumberOfItems}
			</p>
		</header>
	);
}

export default Header;
