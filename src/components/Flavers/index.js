import React from "react";
import styled from 'styled-components';

const Flavers = props => (
    <UL>
        <LI style={{ marginLeft: '0' }}>
            <SPAN style={{ backgroundColor: '#82cc1e' }}/>
            Recommended Flavours
        </LI>
        <LI>
            <SPAN style={{ backgroundColor: '#ffb106' }}/>
            Other Flavours
        </LI>
        <LI style={{ marginRight: '0' }}>
            <SPAN style={{ backgroundColor: '#f55d3e' }}/>
            Caution Flavours
        </LI>
    </UL>
)

const UL = styled.ul`
    min-height: 2rem;
    padding: 0;
    margin: 1.5rem 0 1.5rem 1.5rem;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const LI = styled.li`
    margin: 0 0.5rem;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SPAN = styled.span`
    margin-right: 0.5rem;
    width: 1.125rem;
    height: 1.125rem;
    display: block;
    border-radius: 4px;
`;

export default Flavers;