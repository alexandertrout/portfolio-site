import React, { Component } from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import styled from "styled-components";

const Contact = styled.section`
  margin: 0.5vw 1vw 0.5vw;
  padding: 0vw 2vw;
  font-size: 1vw;
  background-color: whitesmoke;
  color: black;
  text-align: center;
  align-items: center;
`;

class CenterContact extends Component {
  state = {};
  render() {
    return (
      <section id="centerBorder">
        <section class="center">
          <p class="centerTitle"> CONTACT</p>
          <Contact>
            <p>
              Phone: 07516158756
              <br />
              <br />
              Email: alexandertrout96@gmail.com
              <br />
              <br />
              Please find links to my socials on the left!
            </p>
            <p>
              <Map center={["53.521361", "-1.13241"]} zoom={6}>
                {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url="https://api.mapbox.com/styles/v1/alexandertrout/ck67r24b90aoe1iomt2f9v8n5/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleGFuZGVydHJvdXQiLCJhIjoiY2s2NndtcHFjMDJkZzNqbXFmN2Q1bzgyayJ9.zFETMUE1SAKmZy0Zje6a7g" />
                <Marker position={["53.521361", "-1.13241"]}>
                  <Popup>Current Location: Doncaster</Popup>
                </Marker>
              </Map>
            </p>
          </Contact>
        </section>
      </section>
    );
  }
}

export default CenterContact;
