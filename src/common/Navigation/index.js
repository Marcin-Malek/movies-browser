import { NavbarContainer, StyledNavbar, StyledNavLink } from "./styled"


export const Navigation = () => {

    return (
        <NavbarContainer>
            <StyledNavbar>
                <li>
                    <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/people">PEOPLE</StyledNavLink>
                </li>
            </StyledNavbar>
        </NavbarContainer>
    )
};