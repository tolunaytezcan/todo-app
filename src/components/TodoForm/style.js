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
	outline-color: ${({ theme }) => theme.colors.secondary};
	outline-width: 1px;

	::placeholder {
		color: ${({ theme }) => theme.colors.gray};
	}
`;

export const AddButton = styled.button`
	padding: 10px 20px;
	border: 1px solid #ccc;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	color: ${({ theme }) => theme.colors.secondary};
	background: ${({ theme }) => theme.colors.primary};
	outline-color: ${({ theme }) => theme.colors.gray};
	outline-width: 1px;
	:hover {
		background: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.primary};
	}
`;
