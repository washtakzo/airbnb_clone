import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const dataBaseUrl =
  "https://airbnb-clone-d2585-default-rtdb.europe-west1.firebasedatabase.app/";
const searchResultEndPoint = "search_results.json";

function Search({ searchResults }) {
  const router = useRouter();
  const [location, setLocation] = React.useState("");
  const [startDate, setstartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [noOfGuests, setnoOfGuests] = React.useState("");
  const [rangeDate, setRangeDate] = React.useState("");
  const [formatedStartDate, setFormatedStartDate] = React.useState("");
  const [formatedEndtDate, setFormatedEndDate] = React.useState("");

  React.useEffect(() => {
    //Prise en compte des données lorsqu'elles sont
    //récupérées de router.query car les données ne sont pas dispo
    //de suite et cette méthode évite les erreur undefined sur ces données
    if (!router.isReady) return;
    setLocation(router.query.location);
    setstartDate(router.query.startDate);
    setEndDate(router.query.endDate);
    setnoOfGuests(router.query.noOfGuests);
    setFormatedStartDate(
      format(new Date(router.query.startDate), "dd MMMM yy")
    );
    setFormatedEndDate(format(new Date(router.query.endDate), "dd MMMM yy"));
    setRangeDate(`${formatedStartDate} - ${formatedEndtDate}`);
    //La dépendance startDate (ou endDate) sert à pouvoir setFormatedStartDate
    //avec les dates en question car une set les data ne sont dispo qu'au prochain re-render
  }, [router.isReady, startDate, endDate]);
  return (
    <div>
      <Header
        placeholder={`${location} | ${rangeDate} | ${noOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs font-semibold">
            300+ Stays - {rangeDate} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex mb-5 space-x-3 whitespace-nowrap text-gray-800">
            <p className="search__filter__button">Cancellation Flexibility</p>
            <p className="search__filter__button">Type of Place</p>
            <p className="search__filter__button">Price</p>
            <p className="search__filter__button">Rooms and Beds</p>
            <p className="search__filter__button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              (
                {
                  img,
                  location,
                  title,
                  description,
                  star,
                  price,
                  total,
                  long,
                  lat,
                },
                index
              ) => (
                <InfoCard
                  key={index}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(dataBaseUrl + searchResultEndPoint).then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
