import styled from 'styled-components';

export const TodoItem = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) => theme.colors.primary};
	padding: 5px;
	margin-bottom: 5px;
	border: 1px solid #ddd;
	border-radius: 5px;
	cursor: pointer;
`;

export const LeftWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ListInput = styled.input`
	box-sizing: border-box;
	border: none;
	outline: none;
	width: 450px;
	background-color: ${({ theme }) => theme.colors.secondary};
	border-bottom: 2px solid;
	border-color: ${props => (props.checked ? '#00FF00' : '#FFD300')};
	color: ${({ theme }) => theme.colors.white};
	font-size: 16px;
	margin: 15px 15px 15px 0;
`;

export const TextContainer = styled.div`
	width: 450px;
`;
