function Article(props) {
    const title = props.title
    const description = props.description

    function showArticleDetail(e) {
        alert('artikel di klik')
    }

    function saveArticle(event) {
        event.preventDefault()
        event.stopPropagation()
        alert("artikel di simpan")
    }

    return (
        <article onClick={showArticleDetail}>
            <h3>{title}</h3>
            <p>{description}</p>
            <form>
                <button type="submit" onClick={saveArticle}>Simpan Artikel</button>
            </form>
        </article>
    )
}

export default Article