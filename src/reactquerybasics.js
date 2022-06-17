import { useQuery } from 'react-query'

function Example() {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://jsonplaceholder.typicode.com/comments').then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            {data.map(post => {
                return <p>{post.id}-{post.name}</p>
            })}
        </div>
    )
}


export default Example










