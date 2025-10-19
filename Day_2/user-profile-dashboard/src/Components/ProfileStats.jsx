function ProfileStats({ projects, followers, following }) {
    return (
        <div>
            <div>
                <h3>{projects}</h3>
                <a href="#">Projects</a>
            </div>
            <div>
                <h3>{followers}</h3>
                <a href="#">Followers</a>
            </div>
            <div>
                <h3>{following}</h3>
                <a href="#">Following</a>
            </div>
        </div>
    );
}