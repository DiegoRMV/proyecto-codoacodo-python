"use strict";

const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const expresiones = {
	password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const field = {
	Email: false,
	Password: false,
};

const formValidate = (e) => {
	switch (e.target.name) {
		case "email":
			inputValidate(expresiones.email, e.target, "Email");
			break;
		case "password":
			inputValidate(expresiones.password, e.target, "Password");
			break;
	}
};

const inputValidate = (expresion, input, group) => {
	if (expresion.test(input.value)) {
		document
			.getElementById(`group${group}`)
			.classList.remove("form-group-error");
		document
			.querySelector(`#group${group} .form-group-errorText`)
			.classList.remove("form-group-errorText-active");
		document.getElementById(`group${group}`).classList.add("form-group-done");
		field[group] = true;
	} else {
		document
			.getElementById(`group${group}`)
			.classList.remove("form-group-done");
		document.getElementById(`group${group}`).classList.add("form-group-error");
		document
			.querySelector(`#group${group} .form-group-errorText`)
			.classList.add("form-group-errorText-active");
		field[group] = false;
	}
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const terms = document.getElementById("terms");
	if (field.Email && field.Password) {
		form.reset();
		document
			.getElementById("formMessaje")
			.classList.remove("form-messaje-error-active");
		document
			.getElementById("formDone")
			.classList.add("form-messaje-done-active");
		setTimeout(() => {
			document
				.getElementById("formDone")
				.classList.remove("form-messaje-done-active");
		}, 5000);
	} else {
		document
			.getElementById("formMessaje")
			.classList.add("form-messaje-error-active");
	}
});
