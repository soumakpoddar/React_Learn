import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Sam"
                    timeAgo="Today at 4:00PM"
                    content="Hello"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="David"
                    timeAgo="Today at 5:15PM"
                    content="Hi There!!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Soumak"
                    timeAgo="Today at 6:00PM"
                    content="Hi All"
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"));