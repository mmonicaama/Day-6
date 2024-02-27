const comments = [
    {
        id: 1,
        text: "This is the first comment",
        parentId: null,
        replies: [
            {
                id: 2,
                text: "This is a reply to the first comment",
                parentId: 1,
                replies: [
                    {
                        id: 3,
                        text: "This is a nested reply",
                        parentId: 2,
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        text: "This is an independent comment",
        parentId: null,
        replies: []
    },
];

function generateCommentHTML(comment, level) {
    const div = document.createElement('div');
    div.className = 'comment';
    div.textContent = comment.text;

    div.style.marginLeft = `${level * 10}px`;

    if (comment.replies.length > 0) {
        level++;
        comment.replies.forEach(reply => {
            div.appendChild(generateCommentHTML(reply, level));
        });
    }

    return div;
}

function displayComments(commentsArray, container, level) {
    commentsArray.forEach(comment => {
        container.appendChild(generateCommentHTML(comment, level));
    });
}

const commentsContainer = document.getElementById('comments-container');

displayComments(comments.filter(comment => comment.parentId === null), commentsContainer, 0);
