import styled from 'styled-components';

export const ListWrapper = styled.ul`
	margin-top: 50px;
	list-style-type: none;
	padding: 0;
`;
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
`;
