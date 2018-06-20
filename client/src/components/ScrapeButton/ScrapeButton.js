import React from "react";
import "./ScrapeButton.css";

const ScrapeButton = props => <div className="scrapebutton"><button id="scrape" class="btn btn-info">{props.children}</button></div>;

export default ScrapeButton;
