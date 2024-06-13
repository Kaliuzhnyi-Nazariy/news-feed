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
  const [lang, setLang] = useState("en");

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleChangeLang = (val) => {
    setLang(val);
    setPage(1);
    dispatch(newsFatchByLanguage({ credential: val, pageNumber: page }));
  };

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
        <select
          value={lang}
          onChange={(evt) => handleChangeLang(evt.target.value)}
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
          <option value="ru">RU</option>
          <option value="ar">AR</option>
        </select>
      </details> */}
      <span>
        <h4>Language</h4>
        <select
          value={lang}
          onChange={(evt) => handleChangeLang(evt.target.value)}
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
          <option value="ru">RU</option>
          <option value="ar">AR</option>
        </select>
      </span>
      <Formik
        style={{ gridArea: "i" }}
        initialValues={{
          news: "",
        }}
        onSubmit={(value) => {
          setQuery(value.news),
            setPage(1),
            dispatch(
              newsFetchByWord({
                credentials: value.news,
                pageNumber: page,
                language: lang,
              })
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
