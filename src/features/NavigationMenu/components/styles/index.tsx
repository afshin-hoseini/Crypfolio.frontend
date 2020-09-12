import styled from 'styled-components';

export const SideMenuWrapper = styled.div`
    display:flex;
    flex-direction: column;
    padding: 10px 0 30px 10px;
    width: 180px;
    height: 80%;
    min-height:400px;
    border-radius: 0 30px 30px 0;
    background-color: ${p => p.theme.colors?.l1Container};

    .sidemenu-header {
        width: 100%;
        height: 80px;
    }
`