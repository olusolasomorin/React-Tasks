function ProfileHeader({ name, title, avatar}){
    return (
        <div>
            <img src={avatar} alt={`${name} image`} />
            <h2>{name}</h2>
            <p>{title}</p>
        </div>
    );
}

export default ProfileHeader;