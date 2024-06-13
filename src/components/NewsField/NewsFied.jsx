import { useDispatch, useSelector } from "react-redux";
import { newsSelector } from "../../redux/news/sellectors";
import { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  newsFatchByLanguage,
  newsFetchByWord,
} from "../../redux/news/newsOperations";

const NewsFied = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  // const [lang, setLang] = useState("en");

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // const handleChangeLang = (val) => {
  //   // setLang(val);
  //   console.log(val);
  // };

  const newsSelectorData = useSelector(newsSelector);
  console.log(page);
  useEffect(() => {
    dispatch(newsFetchByWord({ credentials: query, pageNumber: page }));
  }, [dispatch, page, query]);

  return (
    <>
      <h2>News</h2>
      {/* <details>
        <summary>Language</summary>
        <select value={lang} onChange={handleChangeLang(lang)}>
          <option lang="en">EN</option>
          <option lang="ru">RU</option>
          <option lang="ar">AR</option>
          <option lang="fr">FR</option>
        </select> */}
      {/* <ul>
          <li>EN</li>
          <li>RU</li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
      {/* </details> */}
      <Formik
        style={{ gridArea: "i" }}
        initialValues={{
          news: "",
        }}
        onSubmit={(value) => {
          setQuery(value.news),
            setPage(1),
            dispatch(
              newsFetchByWord({ credentials: value.news, pageNumber: page })
            );
        }}
      >
        <Form>
          <label htmlFor="news">Find News</label>
          <Field id="news" name="news" placeholder="Kyiv" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <ul>
        {newsSelectorData.map((news) => (
          <li key={news.id}>
            <a href={news.url}>
              <img src={news.image} style={{ height: "150px" }} />

              <h3>{news.title}</h3>
              {news.description}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Load More</button>
    </>
  );
};

export default NewsFied;
