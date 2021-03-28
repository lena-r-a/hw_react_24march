import React from 'react'


export const UserItem = (props) =>{
    return (
        <div>
            <p>{props.userName}<span>{props.user.name}</span></p>
            <p>{props.userGender}<span>{props.user.gender}</span></p>
            <p>{props.userAge}<span>{props.user.age}</span></p>
            <p>{props.yearsWorked}<span>{props.user.workAge}</span></p>    
            <p>{props.userPay}<span>{props.user.workAge*10}</span></p> 
            <br/>     
        </div>
    );
}