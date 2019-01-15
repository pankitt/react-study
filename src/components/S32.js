import React, {Component} from 'react';

// 1
function NumberDescriber(props) {
    let description;
    if (props.number % 2 === 0) {
        description = <strong>even</strong>;
    } else {
        description = <i>odd</i>;
    }
    return <div>{props.number} - это {description} число</div>;
}


// 2
const ButtonOld = props => {
    const { type, onClick, children } = props;
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} onClick={onClick}>{children}</button>;
};

const Button = props => {
    const { type, ...other } = props;
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other} />;
};

// 3
function User(props) {
    return <li>{props.user.name}</li>;
}

function UserList() {
    const users = [{id: 1, name: 'Вася'}, {id: 2, name: 'Петя'}];
    return (
        <ul>
            {users.map((user) => <User key={user.id} user={user} />)}
        </ul>
    );
}

// 3-inner
function UserListInner() {
    const users = [{id: 1, name: 'Вася'}, {id: 2, name: 'Петя'}];
    return (
        <ul>
            {users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}

//4
function UserList2(props) {
    return (
        <ul>
            {props.users.map((user) => props.children(user))}
        </ul>
    )
}

function UserPage() {
    const users = [{id: 1, name: 'Вася'}, {id: 2, name: 'Петя'}];
    return (
        <UserList2 users={users}>
            {(user) => <li key={user.id}>Пользователь: {user.name}</li>}
        </UserList2>
    );
}

//4-inner
function UserPageInner() {
    const users = [{id: 1, name: 'Вася'}, {id: 2, name: 'Петя'}];
    return (
        <ul>
            {users.map((user) => <li key={user.id}>Пользователь: {user.name}</li>)}
        </ul>
    );
}

//4 с проверкой
const usersList = [{id: 1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}];
const usersListEmpty = [];
function UserListsInner(props) {
    return (
        <ul>
            {props.users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
}
function UserListsMain(props) {
    console.log(props.users);

    return (
        <div>
            {props.users.length > 0 &&
                <UserListsInner users={props.users} />
            }
        </div>
    )
}


// 5
function BooleanDescriber(props) {
    // let description;
    // props.isTrue ? (description = 'true') : (description = 'false');
    // return <div>Boolean - это <i>{description}</i></div>;

    return <div>Boolean - это <i>{String(props.isTrue)}</i></div>;
}

function BooleanShowed(props) {
    const content = <div>isModalShowed Show</div>;
    return (
        <div>
            {props.isModalShowed && content}
        </div>
    );
}

class S31 extends Component{
    render() {
        return (
            <div className="inner">
                <NumberDescriber number={1 + 2 + 3 + 4} />
                <ButtonOld type="secondary" onClick={() => console.log("Нажато!")}>
                    Button
                </ButtonOld>
                <Button type="primary" onClick={() => console.log("Нажато!")}>
                    Button
                </Button>
                <UserList/>
                <UserListInner/>
                <UserPage/>
                <UserPageInner/>

                <UserListsMain users={usersList}/>
                <UserListsMain users={usersListEmpty}/>

                <BooleanDescriber isTrue={false} />
                <BooleanShowed isModalShowed />
            </div>
        )
    }
}

export default S31;