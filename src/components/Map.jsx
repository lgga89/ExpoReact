import React from "react";

export function Map() {
  return (
    <section className="map">
      <iframe
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15098.238213949307!2d-96.9279122!3d18.906611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe724c24cff6b0fe9!2sEx%20Hacienda%20de%20Toxpan!5e0!3m2!1ses!2smx!4v1637631423034!5m2!1ses!2smx"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
      />
    </section>
  );
}
