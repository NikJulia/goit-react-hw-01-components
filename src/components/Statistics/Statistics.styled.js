import styled from "@emotion/styled";

export const StatisticsGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 0 auto;
    padding: 20px;
    list-style: none;
    text-align: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(5, 80px);
        grid-template-rows: 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 0px;
    }
`
const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsEl = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: ${getRandomHexColor};
    box-shadow: 1px 2px 6px 0px rgba(0,0,0,0.5);
`

export const DocType = styled.span`
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
`