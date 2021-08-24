import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    height: 170px;
    position: absolute;
    bottom: 0;
    background-color: #FFA500;
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    
`;

export const Column = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    font-family: 'Shrikhand', cursive;
`;

export const Row = styled.a`
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:first-child {
        margin-top: 15px;
    }
`;

export const SocialLinkWrapper = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin-top: 15px;
`;

export const SocialLink = styled.a`
    cursor: pointer;
`;