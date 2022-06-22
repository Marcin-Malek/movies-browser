import { NavbarContainer, NavElement, StyledNavbar, StyledNavLink } from "./styled"


export const Navigation = () => {

    return (
        <NavbarContainer>
            <StyledNavbar>
                <NavElement>
                    <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                </NavElement>
                <NavElement>
                    <StyledNavLink to="/people">PEOPLE</StyledNavLink>
                </NavElement>
            </StyledNavbar>
        </NavbarContainer>
    )
};