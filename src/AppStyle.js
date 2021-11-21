import styled from 'styled-components';

export const Container = styled.div`
	max-width: 600px;
	background: ${({ theme }) => theme.colors.secondary};
	margin: 0 auto;
	margin-top: 50px;
	padding: 10px;
	border-radius: 10px;
	box-shadow: 0px 5px 15px #bbb;
	min-height: 300px;
`;

export const HeaderText = styled.p`
	display: flex;
	justify-content: center;
	color: ${({ theme }) => theme.colors.primary};
	font-size: 32px;
`;

export const Button = styled.button`
	padding: 10px 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.secondary};
	background: ${({ theme }) => theme.colors.primary};
	outline-color: ${({ theme }) => theme.colors.gray};
	outline-width: 1px;
	margin-right: 10px;
	:hover {
		background: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.primary};
	}
`;
