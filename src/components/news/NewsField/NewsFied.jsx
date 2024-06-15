import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingSelector,
  newsSelector,
} from "../../../redux/news/sellectors";
import { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  newsFatchByLanguage,
  newsFetchByWord,
} from "../../../redux/news/newsOperations";
import NewsItem from "../NewsList/Newsitem";
import { ListOfNews } from "./NewsField.styled";
import { SpinnerDiamond } from "spinners-react";
import "../../weather/WeatherField/loader.css";

const NewsFied = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("en");
  const dispatch = useDispatch();

  const newsSelectorData = useSelector(newsSelector);
  const isLoadingSelectorData = useSelector(isLoadingSelector);

  useEffect(() => {
    if (query) {
      dispatch(
        newsFetchByWord({
          credentials: query,
          pageNumber: page,
          language: lang,
        })
      );
    } else {
      dispatch(newsFatchByLanguage({ credential: lang, pageNumber: page }));
    }
  }, [dispatch, page, query, lang]);

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleChangeLang = (val) => {
    setLang(val);
    setPage(1);
    dispatch(newsFatchByLanguage({ credential: val, pageNumber: 1 }));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>News</h2>
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
          initialValues={{
            news: "",
          }}
          onSubmit={(value) => {
            setQuery(value.news);
            setPage(1);
            dispatch(
              newsFetchByWord({
                credentials: value.news,
                pageNumber: 1,
                language: lang,
              })
            );
          }}
        >
          <Form>
            <label htmlFor="news">Find News</label>
            <Field id="news" name="news" placeholder="Kyiv" />
            <button type="submit">FIND🔎</button>
          </Form>
        </Formik>

        {isLoadingSelectorData ? (
          <SpinnerDiamond
            size={50}
            thickness={100}
            speed={100}
            color="rgba(255, 123, 0, 1)"
            secondaryColor="rgba(0, 0, 0, 0.44)"
            className="loader"
          />
        ) : (
          <ListOfNews>
            {newsSelectorData.map((news) => (
              <NewsItem news={news} key={news.id} />
            ))}
          </ListOfNews>
        )}
        <button onClick={handleClick}>Load More</button>
      </div>
    </div>
  );
};

export default NewsFied;
