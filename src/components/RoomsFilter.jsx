import React, { useContext } from "react";
import { RoomContext } from "../context/Context";
import Title from "../components/Title";

// get all unique values
const getUniqueValues = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
const RoomsFilter = props => {
  const { rooms } = props;
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    MaxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  //   get unique types
  let types = getUniqueValues(rooms, "type");

  // add all
  types = ["all", ...types];

  //map to jsx
  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  let people = getUniqueValues(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>

        {/* end of select type */}

        {/* guest count */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>

        {/* end of guest type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
