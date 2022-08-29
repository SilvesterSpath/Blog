const CommentList = ({ comments }) => {
  const renderedComments = comments.map((item) => {
    return <li key={item.id}>{item.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
