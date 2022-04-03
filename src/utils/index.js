import React from "react";

export const generateActions = (action) => {
	action = action.toUpperCase();
	return {
		REQUEST: `${action}_REQUEST`,
		SUCCESS: `${action}_SUCCESS`,
		FAILURE: `${action}_FAILURE`,
	};
};

export const isElement = (element) => {
	return React.isValidElement(element);
};

export const formatToCurrency = (num, p) => {
	let num_ = num
		? Number(num)
				.toFixed(p)
				.replace(/\d(?=(\d{3})+\.)/g, "$&,")
		: num;
	return num_;
};

export const getDateTimeFormatUK = (value) => {
	let date_ob = new Date(value);
	let a = date_ob.getHours().toString().length === 1 ? "AM" : "PM";
	return `${date_ob.toLocaleString("en-UK")} ${a}`;
};