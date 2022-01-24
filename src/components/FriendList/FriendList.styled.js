import styled from "@emotion/styled";

export const List = styled.ul`
    max-width: 350px;
    margin: 0 auto;
    padding: 15px;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 15px;
`
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 25px;
    background-color: #f4f4f4;
    box-shadow: 1px 2px 6px 0px rgba(0,0,0,0.5);
`

const switchBgColor = ({ userStatus }) => {
    switch (userStatus) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'grey';
    }
}

export const Status = styled.span`
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${switchBgColor}};
`

export const UserAvatar = styled.img`
    padding: 15px;
`

export const UserName = styled.p`
    font-size: 18px;
    text-transform: uppercase;
`