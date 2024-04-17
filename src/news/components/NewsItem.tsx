import { Article } from '../interfaces/news.interface';

interface Props {
    article: Article;
}

export const NewsItem = ({article} : Props) => {

    const {title, description, url, urlToImage} = article;

  return (
    <div key={article.title} className="news__card">
        <img  src={urlToImage} alt={title} />

        <div className="news__card-content p-3">
            <h3>{title}</h3>
            <p>
                {`${description.substring(0,100)}...`}
            </p>
            <a href={url} target="_blank" rel="noreferrer">Read more</a>
                
        </div>
    </div>
  )
}
