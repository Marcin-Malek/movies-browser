import { Logotype, NavbarContainer, StyledNavbar, StyledNavLink, StyledPageTitle, StyledCameraIcon, StyledSearchBox, SearchBoxWrapper, NavbarWrapper } from "./styled"


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
            <SearchBoxWrapper>
                <StyledSearchBox placeholder="Search for movies..." />
            </SearchBoxWrapper>
        </NavbarContainer>
    )
};