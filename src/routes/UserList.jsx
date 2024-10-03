export default function UserList(props) {
    return (
        <div>
            <h2>All the Cool People</h2>
            <ul className="userList">
                {props.userList.map((user) => {
                    return (
                    <li key={user._id}>
                        {user.userName}
                    </li>)
                })}
            </ul>
        </div>
    )
}