import { useParams } from "react-router-dom"

function Post({ }) {
    const { postId } = useParams()

    return (
        <>
            <div> post{postId} page </div>
        </>
    )
}

export default Post
