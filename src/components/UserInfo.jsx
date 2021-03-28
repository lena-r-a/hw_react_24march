import React from 'react'
import {UserItem} from './UserItem'


export const UserInfo = (props)=>{
    return(
        props.users.map(user=> 
        <UserItem userName={"Имя: "} userGender={"Пол: "} userAge = {"Возраст: "} yearsWorked= {"Работает лет: "} userPay={"Зарплата: "} key={user.age} user={user}/>)
    );

}