import * as dotenv from "dotenv";
import axios from "axios";
import MailSender from "./mailSender.js";

// CONFIG DOTENV
dotenv.config();

// API URL
const apiUrl = process.env.API_URL;

// DAYS TO SHOW
const days = 1;

// API BODY
const apiBody = {
  days: days,
};

// INDICATORS
const highIndex = 75;
const lowIndex = 20;

// TOLERANCE
const tolerance = 10;

// MAIL SENDER ClASS
const mailSender = new MailSender();

const checkIndex = (index) => {
  const isIndexHigh = index >= highIndex - tolerance;
  const isIndexLow = index <= lowIndex + tolerance;

  // IF MARKET IS STABLE
  if (!isIndexLow && !isIndexHigh) return;

  // IF MARKET IS GREEDY
  if (isIndexHigh) {
    mailSender.sendEmailForHighIndex(index);
  }

  // IF MARKET IS FEARFUL
  if (isIndexLow) {
    mailSender.sendEmailForLowIndex(index);
  }
};

axios.post(apiUrl, apiBody).then((res) => {
  const index = res.data.data.datasets[0].data[0];
  checkIndex(index);
});
