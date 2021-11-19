import styled from 'styled-components';

export const StyledText = styled.p`
	color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.red)};
`;
