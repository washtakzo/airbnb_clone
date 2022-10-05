import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formatedStartData = format(new Date(startDate), "dd MMMM yy");
  const formatedEndData = format(new Date(endDate), "dd MMMM yy");
  const rangeDate = `${formatedStartData} - ${formatedEndData}`;
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
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
