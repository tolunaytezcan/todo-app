import styled from 'styled-components';

export const InputWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const TodoInput = styled.input`
	width: 100%;
	border: 1px solid #ccc;
	border-right: none;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	outline-color: #5d3ebc;
	outline-width: 1px;
`;

export const AddButton = styled.button`
	padding: 10px 20px;
	border: 1px solid #ccc;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	color: #5d3ebc;
	background: #ffd300;
	outline-color: #bbb;
	outline-width: 1px;
	:hover {
		background: #5d3ebc;
		color: #ffd300;
	}
`;
