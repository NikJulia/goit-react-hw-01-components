import styled from "@emotion/styled/";

export const ProfileCard = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    box-shadow: -1px 15px 30px -12px black;
    border-radius: 5px;
    background-color: #fffff5;
`
export const ProfileDesc = styled.div`
    p {
        margin: 0;
        padding: 5px 0;
    }
`

export const ProfileImg = styled.img`
    width: 150px;
    padding: 10px;
`

export const ProfileName = styled.p`
    font-size: 18px;
    font-weight: 700;
`
export const ProfileTag = styled.p`
    font-style: italic;
`
export const ProfileLocation = styled.p`
    font-weight: 700;
`
export const ProfileStats = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
    margin: 0;
    padding: 15px 0;
    list-style: none;
`
export const ProfileStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    background-color: #dbdbdb;
    border-radius: 5px;
`