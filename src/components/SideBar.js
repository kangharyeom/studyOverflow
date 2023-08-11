import React from "react";
import styled from 'styled-components';

const StyledSidebar = styled.div`
`;

const SidebarContianer = styled.div`
`;

const SidebarNavi = styled.div`
`;

const SidebarTitle = styled.div`
`;

const Title1 = styled.div`
`;

const Title2 = styled.div`
`;

const Title3 = styled.div`
`;

const SideBar = () => {
    return (
        <StyledSidebar>
            <SidebarContianer>
                <SidebarNavi>
                    <SidebarTitle>
                        <Title1></Title1>
                            <div>Home</div>
                        <Title2></Title2>
                            <div>PUBLIC</div>
                            <div>Questions</div>
                            <div>Tags</div>
                            <div>Users</div>
                            <div>Companies</div>
                            <div>COLLECTIVES</div>
                        <Title3></Title3>
                            <div>TEAMS</div>
                    </SidebarTitle>
                </SidebarNavi>  
            </SidebarContianer>
        </StyledSidebar>
    );
}
export default SideBar;