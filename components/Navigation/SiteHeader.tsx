import styled from 'styled-components'

//styles 

// styled div for nav bar 
const NavDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin: 0;
`;

// styled logo Section
const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

// styled links section 
const LinksSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

// UL list for nav 
const NavUL = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style: none;
`;

// nav header component
function NavHeader({className}) {
    return (
    <NavDiv>
        <LogoSection>TLB V1</LogoSection>
        <LinksSection>
            <NavUL>
                <li>Home</li>
                <li>Latests New</li>
                <li>All Stories</li>
            </NavUL>
        </LinksSection>
    </NavDiv>
   
  );
}

export default NavHeader;