import { useState } from "react";
import Select from "../components/Select";

export const sectionOptions = [
  { name: "World", value: "world" },
  { name: "United States", value: "us" },
  { name: "Upshot", value: "upshot" },
  { name: "Travel", value: "travel" },
  { name: "T-Magazine", value: "t-magazine" },
  { name: "Theater", value: "theater" },
  { name: "Technology", value: "technology" },
  { name: "Sunday Review", value: "sundayreview" },
  { name: "Sports", value: "sports" },
  { name: "Science", value: "science" },
  { name: "Real Estate", value: "realestate" },
  { name: "Politics", value: "politics" },
  { name: "Opinion", value: "opinion" },
  { name: "Obituaries", value: "obituaries" },
  { name: "NY Region", value: "nyregion" },
  { name: "Movies", value: "movies" },
  { name: "Magazine", value: "magazine" },
  { name: "Insider", value: "insider" },
  { name: "Home (Default)", value: "home" },
  { name: "Health", value: "health" },
  { name: "Food", value: "food" },
  { name: "Fashion", value: "fashion" },
  { name: "Business", value: "business" },
  { name: "Books/Review", value: "books/review" },
  { name: "Automobiles", value: "automobiles" },
  { name: "Arts", value: "arts" },
];

function Home() {
  const [section, setSection] = useState("home");

  function handleSectionChange(e) {
    setSection(e);
  }

  return (
    <div className="timeline max-w-xl mx-auto">
      <p className="text-center font-bold my-5">
        Global News By
        <br /> The NewYork Times
      </p>

      <div className="flex gap-4">
        <Select
          onChange={handleSectionChange}
          options={sectionOptions}
          title={"Section"}
          value={section}
        />

        {/* <Select
          onChange={handleCountryChange}
          options={countryOptions}
          title={"Country"}
          value={country}
        /> */}
      </div>
    </div>
  );
}

export default Home;
