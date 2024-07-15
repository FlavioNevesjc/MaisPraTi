import UserProfile form "./UserProfile"

const UserCard = ({ user, setUser}) => {
    return (
        <div>
            <UserProfile user={user} setUser={setUser}></UserProfile>
        </div>
    )
}

export default UserCard