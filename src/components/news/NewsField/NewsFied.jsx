import { useDispatch, useSelector } from "react-redux";
import {
  errorSelector,
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
import {
  ButtonLoadMore,
  ChangeLang,
  ContantPlace,
  LangTitle,
  ListOfNews,
  NoNews,
  PagePlace,
  SelectLang,
} from "./NewsField.styled";
import { SpinnerDiamond } from "spinners-react";
import "../../weather/WeatherField/loader.css";
import "./form.css";
import toast, { Toaster } from "react-hot-toast";

const NewsFied = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("en");
  const dispatch = useDispatch();

  const newsSelectorData = useSelector(newsSelector);
  const isLoadingSelectorData = useSelector(isLoadingSelector);
  const errorSelectorData = useSelector(errorSelector);

  if (errorSelectorData) {
    toast.error({ errorSelector });
  }

  useEffect(() => {
    if (query) {
      dispatch(
        newsFetchByWord({
          credentials: query,
          pageNumber: page,
          language: lang,
        })
      );
      if (newsSelectorData.length === 0) {
        toast.error("Not found!");
      }
    } else {
      dispatch(newsFatchByLanguage({ credential: lang, pageNumber: page }));
    }
  }, [dispatch, page, query, lang, newsSelectorData.length]);

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleChangeLang = (val) => {
    setLang(val);
    setPage(1);
    dispatch(newsFatchByLanguage({ credential: val, pageNumber: 1 }));
  };

  return (
    <PagePlace>
      <ContantPlace>
        <h2 className="section-title">News</h2>
        <ChangeLang>
          <LangTitle>Language</LangTitle>
          <SelectLang
            value={lang}
            onChange={(evt) => handleChangeLang(evt.target.value)}
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
            <option value="ru">RU</option>
            <option value="ar">AR</option>
          </SelectLang>
        </ChangeLang>

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
          <Form className="form">
            <label htmlFor="news" className="label">
              Find News
            </label>
            <Field id="news" name="news" placeholder="Kyiv" className="input" />
            <button type="submit" className="button">
              FIND🔎
            </button>
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
        {newsSelectorData.length < 10 ? (
          <NoNews>OOPS, NO MORE NEWS!</NoNews>
        ) : (
          <ButtonLoadMore onClick={handleClick}>Load More</ButtonLoadMore>
        )}
      </ContantPlace>
      <Toaster />
    </PagePlace>
  );
};

export default NewsFied;
