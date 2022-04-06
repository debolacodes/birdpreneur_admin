import React, { useState } from "react";
import { PaginationNavState, PaginationPageState } from "./enum";
// import SingleNav from "./SingleNav";

function Pagination ({
	pages,
	pageSize,
	rowsLength,
	_activeIndex = 1,
	_setActiveIndex,
	showPageSize,
	expand,
	handleExpand,
})  {
	const [activeIndex, setActiveIndex] = useState(_activeIndex);

	const setPage = () => {
		let limit = 0;
		if (pages > 5) {
			if (activeIndex <= pages - 4) {
				limit = activeIndex;
			} else {
				limit = pages - 4;
			}
		} else {
			limit = 1;
		}
		const pageComponents = [];
		for (let i = limit; i <= pages; i++) {
			if (
				pages > 5 &&
				i === activeIndex + 2 &&
				activeIndex + 2 < pages - 1 &&
				!expand
			) {
				i = pages - 2;
				pageComponents.push(
					<span
						onClick={() => handleExpand(true)}
						key={"span"}
						className={PaginationPageState.DEFAULT}
					>
						...
					</span>
				);
			} else {
				pageComponents.push(
					<div
						key={i}
						onClick={() => navigate(i)}
						className={
							activeIndex === i ? PaginationPageState.ACTIVE : PaginationPageState.INACTIVE
						}
					>
						{i}
					</div>
				);
			}
		}
		return pageComponents;
	};

	const navigate = (index) => {
		handleExpand(false);
		setActiveIndex(index);
		_setActiveIndex(index);
	};

	return (
		<div
			className={
				"bg-white px-2 py-3 d-flex align-items-center justify-content-center"
			}
		>
			{/* <SingleNav
				next={() => activeIndex !== pages && navigate(activeIndex + 1)}
				prev={() => activeIndex !== 1 && navigate(activeIndex - 1)}
			/> */}
			<div
				className={
					"d-flex align-items-center justify-content-center"
				}
			>
				<div>
					<nav
						className={
							"position-relative d-inline-flex"
						}
					>
						<div
							onClick={() => activeIndex !== 1 && navigate(activeIndex - 1)}
							className={
								activeIndex === 1 ? PaginationNavState.INACTIVE : PaginationNavState.ACTIVE
							}
						>
							<span>Prev</span> 
						</div>
						{setPage()}
						<div
							onClick={() => activeIndex !== pages && navigate(activeIndex + 1)}
							className={
								activeIndex === pages ? PaginationNavState.INACTIVE : PaginationNavState.ACTIVE
							}
						>
								<span>Next</span>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
