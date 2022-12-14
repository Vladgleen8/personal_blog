import { useState } from "react";
import pic from "./assets/mac.jpg";

const Home = () => {
    const [posts, setPosts] = useState([
        {
            date: "august 13, 2021",
            title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
            description:
                "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
            pic: "adf",
            id: "1",
        },
        {
            date: "august 13, 2021",
            title: "JavaScript types",
            description:
                "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
            pic: "adf",
            id: "2",
        },
        {
            date: "august 13, 2021",
            title: "JavaScript types",
            description:
                "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
            pic: "adf",
            id: "3",
        },
    ]);

    return (
        <div className="home">
            <div className="posts-info">
                <div className="post-list">Post List</div>
                <div className="posts-sort">Sort by...</div>
            </div>
            {posts.map((post) => (
                <div className="post-preview" key={posts.id}>
                    <div className="text-section">
                        <div className="post-date">{post.date}</div>
                        <div className="post-title">{post.title}</div>
                        <div className="post-description">
                            {post.description}
                        </div>
                    </div>
                    <img src={pic} className="post-pic"></img>
                </div>
            ))}
        </div>
    );
};

export default Home;
