import {ChangeEvent} from "react";

type InputPropsType = {
	value: string// НУЖНО ПРОТИПИЗИРОВАТЬ
	onChange: (v:string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		// НУЖНО ДОПИСАТЬ
		props.onChange(event.currentTarget.value);
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.value} onChange={onChangeHandler} />
	);
};
