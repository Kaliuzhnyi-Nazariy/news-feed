import { Formik } from "formik";
import { fetchUserWeather } from "../../../redux/weather/weatherOperations";
import { useDispatch } from "react-redux";
import { FieldStyled, FormStyled, SearchButton } from "./FindCity.style";

const FindCity = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        city: "",
      }}
      onSubmit={
        // (city) => console.log(city.city)
        (value) => dispatch(fetchUserWeather(value.city))
      }
    >
      <FormStyled>
        {/* <label htmlFor="city">City</label> */}
        <FieldStyled id="city" name="city" placeholder="Kyiv" />

        <SearchButton type="submit">Search 🔎</SearchButton>
      </FormStyled>
    </Formik>
  );
};

export default FindCity;
