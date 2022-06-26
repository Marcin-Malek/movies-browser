import { Logotype, NavbarContainer, StyledNavbar, StyledNavLink, StyledPageTitle, StyledCameraIcon, StyledSearchBox, NavbarWrapper } from "./styled"


export const Navigation = () => {

    return (
        <NavbarContainer>
            <NavbarWrapper>
                <Logotype>
                    <StyledCameraIcon />
                    <StyledPageTitle>Movies Browser</StyledPageTitle>
                </Logotype>
                <StyledNavbar>

                    <li>
                        <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/people">PEOPLE</StyledNavLink>
                    </li>
                </StyledNavbar>
            </NavbarWrapper>
            <StyledSearchBox placeholder="Search for movies..." />
        </NavbarContainer>
    )
};