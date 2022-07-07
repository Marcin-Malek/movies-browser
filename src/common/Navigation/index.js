import { useQueryParameter } from "../useQueryParameter";
import { useReplaceQueryParameter } from "../useReplaceQueryParameter";
import { Logotype, NavbarContainer, StyledNavbar, StyledNavLink, StyledPageTitle, StyledCameraIcon, StyledSearchBox, NavbarWrapper, BlackBar } from "./styled"


export const Navigation = () => {
    const searchQuery = useQueryParameter("search");
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: "search",
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <BlackBar>
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
                <StyledSearchBox placeholder="Search for movies..." value={searchQuery || ""} onChange={(e) => onInputChange(e)} />
            </NavbarContainer>
        </BlackBar>
    )
};