import { Logotype, NavbarContainer, StyledNavbar, StyledNavLink, StyledPageTitle, StyledCameraIcon, StyledSearchBox, SearchBoxWrapper } from "./styled"


export const Navigation = () => {

    return (
        <NavbarContainer>
            <StyledNavbar>
                <Logotype>
                    <StyledCameraIcon />
                    <StyledPageTitle>Movies Browser</StyledPageTitle>
                </Logotype>
                <li>
                    <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/people">PEOPLE</StyledNavLink>
                </li>
            </StyledNavbar>
            <SearchBoxWrapper>
                <StyledSearchBox placeholder="Search for movies..." />
            </SearchBoxWrapper>
        </NavbarContainer>
    )
};