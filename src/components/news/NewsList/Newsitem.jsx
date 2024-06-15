import {
  DatePublishing,
  Description,
  ImgStyle,
  InfoBlock,
  ListItemA,
  NewsHeader,
  NewsTitle,
  StyleLi,
} from "./NewsItem.styled";

const Newsitem = ({ news: { url, image, title, published, description } }) => {
  // console.log(news);

  let dateOfPublishing = published.slice(0, -5);
  // console.log(dateOfPublishing);

  return (
    <StyleLi>
      <ListItemA href={url}>
        {image !== "None" ? (
          <ImgStyle src={image} />
        ) : (
          <ImgStyle src="https://cdn.pixabay.com/photo/2019/10/21/12/01/newspapers-4565916_1280.jpg" />
        )}

        <InfoBlock>
          <NewsHeader>
            <NewsTitle>{title}</NewsTitle>
            <DatePublishing>{dateOfPublishing}</DatePublishing>
          </NewsHeader>
          <Description>{description}</Description>
        </InfoBlock>
      </ListItemA>
    </StyleLi>
  );
};

export default Newsitem;
