import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart.jsx";

Chart.register(CategoryScale);

export default function Navbar() {
  const [content, setContent] = useState([]);
  const [meta, setMeta] = useState(0);
  const [apistatus, setApistatus] = useState(false);
  const [search, setSearch] = useState("");

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const getResponse = async () => {
    const response = await axios.get("https://gdscdev.vercel.app/api");
    console.log(response.data.content);
    setContent(response.data.content.data);
    setMeta(response.data.content.meta);
    setApistatus(true);
    console.log(content);
  };

  const searchHandler = () => {
    let pos = "";
    console.log(content);
    content.forEach((element) => {
      let string = element.title;
      console.log(string);
      if (string.includes(search)) {
        pos = element.title;
      }
    });
    if (pos !== "") {
      let access = document.getElementById(pos);
      access.scrollIntoView({ behavior: "smooth" }, true);
    }
  };
  useEffect(() => {
    getResponse();
    setChartData({
      labels: content.map((data) => data.title),
      datasets: [
        {
          label: "ID ",
          data: content.map((data) => data.id),
          backgroundColor: [
            "red",
            "blue",
            "green",
            "yellow",
            "brown",
            "pink",
            "grey",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [content]);
  return <div></div>;
}

const Heading = styled.div`
  border: 2px solid white;
  width: 50%;
  height: 40px;
  color: white;
  background-color: #171737;
  text-align: center;
  padding-top: 5px;
  margin-left: 25%;
  border-radius: 10px;
  box-shadow: 1px 3px 13px -4px rgba(255, 255, 255, 1);
`;

const ContentList = styled.div`
  //   border: 2px solid white;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (min-width: 320px) {
    flex-direction: column;
  }
  @media screen and (min-width: 425px) {
    flex-direction: row;
  }
`;

const EachItem = styled.div`
  color: white;
  border: 2px solid white;
  // padding: 5px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #171737;
  box-shadow: 1px 3px 13px -4px rgba(255, 255, 255, 1);
  // height: 830px;
  // width: 30%;
  @media screen and (min-width: 320px) {
    width: 90%;
  }
  @media screen and (min-width: 425px) {
    width: 30%;
  }
`;

const BannerImage = styled.div``;

const Id = styled.div`
  margin: 10px 10px;
`;

const Title = styled.div`
  margin: 10px 10px;
`;

const Description = styled.div`
  margin: 10px 10px;
`;

const DateAndTime = styled.div`
  margin: 10px 10px;
`;

const VenueCity = styled.div`
  margin: 10px 10px;
`;

const VenueCountry = styled.div`
  margin: 10px 10px;
`;

const VenueName = styled.div`
  margin: 10px 10px;
`;

const OrganiserIcon = styled.div`
  // text-align: center;
  display: flex;
  justify-content: center;
  height: 30%;
  width: 100%;
`;

const OrganiserName = styled.div`
  margin: 10px;
  margin-top: 30px;
  text-align: center;
`;

const OrganiserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
