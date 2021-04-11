import { createGlobalStyle } from 'styled-components'

const global = createGlobalStyle`
  html, body {
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  li{
    display: inline-block;
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    background-color: #ddd;
  }
  .ChartSettings {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  .switch {
    position: relative;
    display: block;
    width: 60px;
    height: 34px;
    margin: 0.5vh 2%;
  }
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider {
    background-color: #2196F3;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
  .landingPage {
    position: 'relative';
    height: 100vh;
    width: 100%;
    background: #7ae9ec;
  }
  #logo {
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .each-fade {
    display: flex;
    max-height: 60vh;
    text-align: center;
    position: relative;
    overflow: visible;
    z-index: 1;
  }
  .each-fade  .image {
    width: 70%;
    height: 96%;
    display: flex;
    justify-content: center;
    z-index: 1;
  }
  .TextContent {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0 3%;
    border : solid 2px black;
  }
  .TextContent h2{
    color: #99dddd;
    font-size: 1.4rem;
    font-family: 'Ubuntu', sans-serif;
    margin: 10% 0;
  }
  .TextContent p{
    color: #11ffff;
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    margin: auto;
    text-align: justify;
  }
  .image h2 {
    font-size: 1rem;
    margin-bottom: 5%;
    color: #333;
    text-shadow: 0 0 0.1rem #11ffff;
  }
  @media only screen and (max-width: 600px){
    .TextContent h2{
      font-size: 0.6rem;
    }
    .each-fade .image{
      width: 50%;
    }
    .TextContent {
      width: 50%;
    }
  }

  @media only screen and (max-width: 900px){
    .TweetSearcher{
      float: none;
      display: block;
      width: 100%;
      margin-bottom: 5vh;
    }
    .ModalImage{
      width: 90%;
    }
  }

  @media only screen and (max-width: 490px) {
    .each-fade .image{
      width: 100%;
    }
    .TextContent {
      width: 0%;
    }
  }

  @media only screen and (max-width: 1000px) {
    .TextContent h2 {
      font-size: 0.9rem;
    }
  }

  table{
    border-collapse: collapse;
    font-family: 'Ubuntu', sans-serif;
    width: 100%;
    text-align: center;
    margin-top: 5vh;
    table-layout: fixed;
    word-wrap: break-word;
  }

  th {
    border: solid 2px #444;
    padding: 2% 0.5%;
    background-color: #113377;
    color: #ddd;
    text-align: center;
    font-size: 1.1rem;
  }

  td {
    border: solid 2px #444;
    background-color: #33aaff;
    padding: 2% 0.2%;
    font-size: 1rem;
    font-weight: 700;
    min-width: 10vw;
    text-align: center;
    transition: all 1s;
  }

  #DropDownMenu {
    position: absolute;
    background-color: #111166;
    right: 5%;
    text-align: center;
    box-shadow: 1vh 1vw 3vh;
    border-bottom: 0.5vh;
    z-index: 5;
  }

  .DropDownItem {
    transition: all 0.5s;
    color: #fff;
    padding: 4vh 28vw;
    letter-spacing: 0.1vw;
    z-index: 10;
    border-radius: 0.5vh;
  }

  .HiddenNavbarIcon {
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    position: relative;
    float: right;
  }

  .ForecastSection{
    padding: 0 10px;
    color: #fff;
    border-right: solid 2px #fafafa;
  }

  .WeatherIconStyle {
    font-size: 5vh;
    color: #fff;
  }

  .LocalTime {
    margin: 0.5vh 0;
    padding: 0.2vh;
    width: 120%;
  }

  .UpperIcon {
    margin-left: 1.5vw;
    margin-right: 1vw;
    color: #ffff11;
    font-size: 1.5rem;
  }

  .UpperOption {
    font-size: 1rem;
    color: #eee;
    font-weight: 500;
    font-family: Roboto Condensed, sans-serif;
    cursor: pointer;
    display: inline;
  }

  @media only screen and (max-width: 800px){
    .UpperOption {
      display: none;
    }
    #time {
      display: none;
    }
    .UpperHeader{
      height: auto;
    }
  }

  .NavbarItem {
    color: #fff;
    font-family: Ubuntu, sans-serif;
    margin: 0 4vw;
    cursor: pointer;
    padding-bottom: 1vh;
  }

  .NavbarItem:hover {
    border-bottom: 2px solid #eeeeee;
  }

  .RightUpperSection {
    position: relative;
    padding: 0.1vh;
  }

  .Twitts {
    margin: 1vh 0;
    color: #fff;
    font-family: Ubuntu, sans-serif;
  }

  .UpperHeader {
    background: linear-gradient(#332288, #110044);
    padding: 0.9vh;
    padding-top: 0.8vh;
    padding-bottom: 1vh;
    position: relative;
  }

  @media only screen and (min-width: 900px) {
    .DropDownItem:hover {
      background-color: #2a68e4b1;
      color: '#333'
    }
    .SuggestedPlaces:hover {
      box-shadow: 0 0 1vh bisque;
    }
    .ImageOfSuggestedPlace:hover {
      border-radius: 0 !important;
      padding: 0.3%;
      background-color: #111;
    }
    .CityService:hover{
      background-color: rgba(0, 0, 250, 0.1);
    }
  }

  @media only screen and (min-width: 1100px) {
    td:hover {
      background-color: #9999ff;
    }
    .tabLinks:hover:not(.activeTabLink) {
      background-color: #aaaaff;
    }
  }

  @media only screen and (max-width: 900px){
    th{
      padding: 2%;
      font-size: 0.9rem;
    }
    td{
      padding: 2%;
      font-size: 0.7rem;
    }
  }

  .spinner {
    animation: spin 5s infinite linear;
  }

  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
  }

  .tab {
    width: 100%;
    background-color: #bbb;
    text-align: left;
  }

  .tabLinks {
    border: none;
    padding: 1% 2%;
    font-family: Nunito, sans-serif;
    font-weight: 700;
    background-color: transparent;
    font-size: 1.38rem;
  }

  .NavbarLink {
    text-decoration: none;
  }

  .HeaderTweets {
    position: absolute;
    bottom: 2vh;
    left: 3%;
    backdrop-filter: blur(4px);
    overflow: hidden;
    border-radius: 2vh;
  }

  .HeaderWeather {
    position: absolute;
    bottom: 1vh;
    right: 3%;
    padding: 1%;
    overflow: hidden;
    border-radius: 1vh;
    backdrop-filter: blur(1px);
  }

  @media only screen and (max-width: 500px){
    .tabLinks{
      font-size: 1.3rem;
    }
  }

  .activeTabLink {
    background-color: #2222ee;
    outline: none;
  }

  .aboutContent {
    width: 100%;
    padding: 3vh 4%;
    background-color: #fbfbfb;
  }
  .paragraph:last-child{
    margin-bottom: 5vh;
  }
  .AboutKeyWest {
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Key_West%2C_Florida.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 2%;
    height: auto;
    position: relative;
  }
  .MapImage {
    width: 100%;
  }
  .shadow {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(247, 165, 165, 0.6);
  }

  .ImageInModal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.9);
  }

  .ModalImage {
    max-height: 70vh;
    max-width: 90%;
    object-fit: contain;
  }

  .Tweet {
    position: relative;
    width: 96%;
    background-color: #fff;
    margin: 2% 1%;
    border-radius: 1vh;
    padding: 2%;
    border: solid 1px #bbb;
    transition: background-color 0.5s;
  }

  .TweetUppersection {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .UserNames {
    display: inline;
    position: absolute;
    top: 50%;
    left: 70px;
    transform: translate(5%, -55%);
  }

  .UsernameField {
    font-family: Ubuntu;
    color: #111;
  }

  .VerifiedUser {
    color: #fff;
    background-color: #33aaff;
    border-radius: 50%;
  }

  .AvatarSection{
    width: 100%;
    border-radius: 0.5vh;
    padding: 1%;
    border: solid 2px #666;
  }

  .Avatar {
    border-radius: 50%;
    margin: 1%;
    width: 50px;
  }

  .TwitterIcon {
    float: right;
    color: #4eb5ff;
    margin: auto;
    font-size: 50px;
    transform: translate(0%, 10%);
  }

  .TweetText {
    color: #111;
    margin: 2% 0;
    font-family: Oxygen;
    font-weight: 500;
    font-size: 1.2rem;
    padding-right: 5%;
    word-wrap: wrap;
  }

  .CreatedAt {
    color: #888;
    margin: 2% 0;
    font-family: Nunito, sans-serif;
    font-weight: 500;
    font-size: 1rem;
    padding-bottom: 2%;
    border-bottom: solid #bbb 1px;
  }

  .RetweetCount {
    color: #888;
    display: inline;
    font-family: Nunito, sans-serif;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.5s;
  }

  .CommentIcon {
    color: #888;
    font-size: 1.2rem;
    margin-right: 1%;
    transition: all 0.5s;
  }

  .HeartIcon {
    color: #888;
    font-size: 1.2rem;
    transition: all 0.5s;
  }

  .TweetUrl {
    padding: 1%;
    border-radius: 2vh;
    margin-right: 2%;
  }

  .TweetUrl:hover {
    background-color: rgba(255, 2, 2, 0.1);
  }

  .HeartIcon:hover {
    color: #c22;
  }

  .Tweet:hover {
    background-color: #eef;
  }

  .comment {
    display: inline;
    padding: 1%;
    border-radius: 2vh;
    transition: all 0.5s;
  }

  .comment:hover {
    background-color: rgba(20, 20, 255, 0.1);
  }

  .CommentIcon:hover {
    color: #2222ee;
  }

  .InfoPolicy {
    color: #888;
    font-size: 1.2rem;
    transition: all 0.5s;
    float: right;
    clear: both;
  }

  .InfoLink {
    padding: 1%;
    border-radius: 2vh;
    transition: all 0.5s;
    float: right;
    clear: both;
  }

  .InfoLink:hover {
    background-color: rgba(2, 2, 244, 0.1);
  }

  .InfoLink:hover .InfoPolicy {
    color: #12bbbb;
  }

  .TweetMedia img {
    max-width: 100%;
    border-radius: 1vh;
  }

  .RetweetCount:hover {
    color: #22aaff;
    text-decoration: underline;
  }

  #username {
    max-width: 95%;
  }

  .Hashtag {
    color: #2196F3;
    font-family: Oxygen, sans-serif;
    font-weight: 600;
  }

  .TweetSearcher {
    float: right;
    clear: both;
  }

  #SearchTweetsInput {
    padding: 2% 4%;
    margin: 2% 0;
    width: 100%;
    border: solid 2px #2222ee;
    border-radius: 1vh;
    font-family: Ubuntu, sans-serif;
    color: #222;
    font-weight: 900;
  }

  #SearchTweetsInput:focus {
    outline: none;
    border: solid 2px #14b0ee;
  }

  #SearchTweetsInput::placeholder{
    font-family: Ubuntu, sans-serif;
    color: #444;
    font-weight: 600;
  }

  .PlaceContainer {
    width: 100%;
    position: relative;
    background-color: #111;
    margin: 4vh 0;
    overflow: hidden;
  }

  .PlaceImage {
    width: 100%;
    object-fit: cover;
  }

  .Places-Container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 5vh 5%;
  }

  .FlexItem {
    width: 98%;
  }

  .PlaceInfo {
    position: absolute;
    color: #fff;
    left: 0;
    bottom: -80%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: .5s ease;
  }

  @media only screen and (min-width: 1000px){
    .PlaceContainer:hover .PlaceInfo {
      bottom: 0;
    }
    .PlaceContainer:hover .OpenCloseBar {
      transform: rotate(180deg);
    }
    .PlaceContainer:hover .NameOfThePlace {
      margin: 15vh 0 0 6%;
    }
    .FlexItem{
      width: 49%;
    }
    .Places-Container{
      margin: 5vh 10%;
    }
  }

  .TogglePlaceInfo { 
    bottom: 0;
  }

  .NameOfThePlace {
    font-size: 1.4rem;
    font-family: Ubuntu, sans-serif;
    margin: 3.4vh 6%;
    transition: all 0.5s ease-in-out;
  }

  .OpenCloseBar {
    position: absolute;
    top: 0;
    right: 3%;
    font-size: 1.8rem;
    margin-top: 3vh;
    transform: rotate(45deg);
    transition: all 0.5s ease;
  }

  .PlaceInfoText {
    color: #ddd;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: Nunito, sans-serif;
    margin: 6vh 6%;
  }

  .MoreInfoLink {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 4vh 6%;
    color: #333;
    padding: 2%;
    background-color: #11ffff;
    font-family: Ubuntu, sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 350px){
    .NameOfThePlace{
      font-size: 1rem;
    }
    .PlaceInfoText{
      font-size: 0.8rem;
    }
    .MoreInfoLink {
      font-size: 1rem;
    }
  }


  @media only screen and (max-height: 350px) {
    .NameOfThePlace{
      font-size: 1rem;
    }
    .PlaceInfoText{
      font-size: 0.9rem;
    }
    .MoreInfoLink {
      font-size: 1rem;
    }
    .OpenCloseBar {
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-height: 1000px) {
    .NameOfThePlace{
      font-size: 1.8rem;
    }
    .PlaceInfoText{
      font-size: 1.4rem;
    }
    .MoreInfoLink {
      font-size: 1.7rem;
    }
    .OpenCloseBar {
      font-size: 2.5rem;
      right: 5%;
      margin-top: 3.4vh;
    }
  }

  .KeyWestDevelopersList {
    padding: 2%;
  }

  .KeyWestDevelopersList li {
    padding: 1vh 1%;
    font-size: 1.2rem;
    color: #111;
    text-align: left;
    font-family: Oxygen, sans-serif;
  }

  @media only screen and (max-width: 750px) {
    .KeyWestDevelopersList li {
      font-size: 0.9rem;
    }
  }

  .ImageContainer{
    width: 90%;
    height: 40vh;
    position: relative;
  }

  .HistoricalMedia {
    display: flex;
    justify-content: center;
    margin: 10vh 0;
    overflow: hidden;
  }

  .HistoricalImage{
    max-width: 100%;
    height: 40vh;
    object-fit: contain;
    border: solid #111 0.7vh;
    background-color: #111;
  }

  .HistoricalImageDescription{
    position: absolute;
    left: 0;
    bottom: -10vh;
    width: 100%;
    height: 10vh;
    background-color: #113;
    transition: all 0.5s;
  }

  .HistoricalImageDescription h2 {
    font-size: 1rem;
    text-align: left;
    margin-left: 10%;
    margin-top: 4vh;
    color: #ddd;
    font-family: Ubuntu, sans-serif;
  }

  @media only screen and (max-height: 400px) {
    .HistoricalImageDescription h2{
      margin-top: 2vh;
    }
    .ImageContainer{
      height: 60vh;
    }
    .HistoricalImage{
      height: 60vh;
    }
  }

  @media only screen and (min-width: 1100px) {
    .ImageContainer:hover .HistoricalImageDescription{
      bottom: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .HistoricalMedia {
      display: block;
    }
    .HistoricalImageDescription{
      bottom: 0;
    }
    .ImageContainer{
      width: 100%;
      margin-top: 5vh;
      background-color: #113;
    }
    .HistoricalImage{
      height: 75%;
    }
    .HistoricalImageDescription{
      background-color: #117;
    }
    .HistoricalImageDescription h2{
      font-size: 2vh;
      text-align: center;
      margin: 2vh 2%;
    }
    .HistoricalMedia{
      margin: 0;
    }
  }

  .TwitterSectionHeadline {
    font-size: 1.7rem;
    font-family:  Ubuntu, sans-serif;
    color: #ddd;
    margin-left: 2%;
  }

  #HeaderTwitterIcon {
    color: #14b0ee;
    font-size: 2rem;
    margin: 10px;
  }

  .ArrowContainer {
    position: relative;
    transition: all 0.5s;
  }

  .ArrowFragment {
    position: absolute;
    height: 0.5rem;
    width: 1.15rem;
    background-color: #038f8f;
  }

  .Arrow {
    position: absolute;
    bottom: 1rem;
    transition: all 0.5s;
  }

  .RightNavigationArrow {
    right: 2%;
    direction: ltr;
  }

  .LeftNavigationArrow {
    left: 2%;
    direction: rtl;
  }

  .NavigationBar {
    width: 90%;
    padding: 4vh 0;
    margin: 5vh 5%;
    position: relative;
    text-align: justify;
  }

  @media only screen and (max-height: 500px) {
    .NavigationBar{
      margin: 12vh 5%;
    }
  }
  @media only screen and (min-height: 1000px) {
    .NavigationBar{
      margin: 2vh 5%;
    }
  }

  .NavigationOption {
    position: absolute;
    bottom: 0.2rem;
    font-size: 1.4rem;
    color: #337;
  }

  .RightOption {
    right: 4%;
    transition: all 0.5s;
  }

  .LeftOption {
    left: 4%;
    transition: all 0.5s;
  }

  .CurrentPage {
    text-align: center;
    font-size: 1.3rem;
    color: #113;
  }
  @media only screen and (min-width: 1100px) {
    #left:hover .LeftNavigationArrow {
      left: 0%;
    }

    #left:hover .LeftOption {
      left: 3%;
    }

    #right:hover .RightNavigationArrow {
      right: 0%; 
    }

    #right:hover .RightOption {
      right: 3%;
    }
  }
  .AboveFooter {
    text-align: center;
    font-family: Ubuntu, sans-serif;
    font-size: 1.5rem;
    color: #111166;
    margin: 10vh;
  }
  .FooterContainer {
    background-color: #ccccff;
    width: 100%;
    height: auto;
    margin-top: 5vh;
    display: flex;
    justify-content: space-around;
    border-top: solid 1vh #222;
    padding: 2% 5%;
  }
  .FooterContent {
    padding: 1%;
    width: 50%;
  }
  .SocialMediaSection {
    display: flex;
  }
  .Contact {
    font-size: 1.7rem;
    letter-spacing: 1px;
    padding-bottom: 0.5%;
    color: #333;
    border-bottom: solid #444 0.3vh;
    margin-bottom: 2vh;
    font-family: Abel;
    display: inline-block;
  }
  .SocialMediaIcon {
    color: #555;
    font-size: 3rem;
    margin-right: 5%;
  }
  @media only screen and (min-width: 1100px) {
    .SocialMediaIcon {
      transition: all 0.5s;
    }
    .SocialMediaIcon:hover {
      transform: scale(1.3);
    }
  }
  .ContactDeveloper {
    margin-top: 2%;
  }
  .ContactDeveloper p {
    color: #336;
    font-size: 1.2rem;
    font-family: Ubuntu, sans-serif;
  }
  .FormLabel {
    font-family: Ubuntu, sans-serif;
    color: #222;
    margin-top: 1vh;
  }
  .LoginError {
    background-color: #ffcccc;
    color: #333;
    font-family: Abel, sans-serif;
    display: inline-block;
    margin: 1vh 0;
    padding: 1vh 2%;
    border-radius: 5px;
    border: solid 1px #000;
    font-weight: 600;
    font-size: 1.2rem;
  }
  .LoginErrorIcon {
    color: #444;
  }
  .LoginButton {
    margin-top: 2vh;
    padding: 1vh 2%;
    display: block;
    border: none;
    background-color: #110099;
    font-family: Ubuntu, sans-serif;
    color: #eee;
    font-size: 1.1rem;
    border-radius: 5px;
  }
  .SigninLabel {
    background-color: #eee;
    border: solid 1px #333;
    padding: 0.7% 1%;
    border-radius: 3px;
    width: 50%;
    color: #222;
    font-family: Nunito, sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
  }
  .ContentManagerLink {
    color: #333;
    font-family: Ubuntu;
  }
  @media only screen and (max-width: 1000px) {
    .FooterContainer{
      display: block;
      width: 100%;
    }
    .FooterContent{
      width: 100%;
    }
    .SocialMediaIcon{
      font-size: 2.4rem;
    }
  }
  @media only screen and (max-width: 510px) {
    .Contact{
      font-size: 1.4rem;
    }
    .SigninLabel {
      width: 100%;
    }
    .LoginButton{
      width: 100%;
    }
    .SocialMediaIcon{
      font-size: 2rem;
    }
    .AboveFooter {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 300px) {
    .Contact{
      font-size: 1rem;
    }
  }
  .NoMatchPageDiv {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
  }
  .NoMatchPageDiv h3 {
    font-family: Ubuntu, sans-serif;
    color: #444;
    font-size: 1.5rem;
  }
  .Warning {
    text-align: center;
    font-family: Ubuntu, sans-serif;
    color: #339;
    font-size: 1.3rem;
    margin: 10%;
  }
  .SlideImage {
    width: 60%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .SlideDescription {
    width: 25%;
    height: 65vh;
    background-color: #110044;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .SlideDescription h2{
    color: #fff;
    font-size: 1rem;
    font-family: Ubuntu, sans-serif;
    margin-top: -2vh;
  }
  .VideoSection {
    position: relative;
    display: flex;
    height: auto;
    background-color: #aaaaff;
    margin: 5vh 0;
    padding: 5vh 5%;
  }
  .Video {
    height: 50vh;
    width: 100%;
    border: none;
    border-radius: 2vh;
  }
  .VideoDescription {
    width: 100%;
    padding-right: 5%;
  }
  .VideoDescription h2 {
    font-size: 2rem;
    font-family: Oxygen, sans-serif;
    color: #111144;
    margin: 2%;
  }
  .VideoDescription p {
    font-size: 1.5rem;
    font-family: Abel, sans-serif;
    margin: 1%;
    color: #212131;
    font-weight: 600;
  }
  @media only screen and (max-width: 800px) {
    .VideoSection{
      display: block;
    }
    .VideoDescription{
      padding-bottom: 5vh;
    }
  }
  @media only screen and (max-width: 567px) {
    .VideoDescription {
      width: 90%;
    }
    .VideoDescription h2{
      font-size: 1.6rem;
    }
    .VideoDescription p {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
  @media only screen and (max-height: 500px){
    .VideoDescription{
      margin: 0;
      margin-top: 1%;
    }
    .VideoDescription h2 {
      font-size: 1.4rem;
    }
    .VideoDescription p {
      font-size: 1.2rem;
    }
  }
  @media only screen and (min-height: 1000px){
    .Video{
      height: 25vh;
    }
    .VideoSection{
      padding: 2vh 2%;
    }
  }
  .CityServicesSection {
    width: 100%;
    display: flex;
    padding: 5vh 0;
    height: auto;
    text-align: center;
  }
  .CityServicesIcon {
    font-size: 3rem;
    color: #886611;
    margin: 5%;
  }
  .CityServicesHeadline {
    font-size: 1.2rem;
    color: #111177;
    font-family: Ubuntu, sans-serif;
    margin-top: 3vh;
  }
  .CityServicesText {
    font-size: 1rem;
    color: #111155;
    font-family: Oxygen, sans-serif;
  }
  .CityService {
    border-radius: 2vh;
    padding: 2%;
    width: 25%;
  }
  @media only screen and (max-width: 750px){
    .CityServicesSection {
      display: block;
      text-align: left;
    }
    .CityServicesHeadline{
      display: inline-block;
    }
    .CityService{
      width: auto;
    }
    .CityServicesIcon{
      margin: 0;
      margin-right: 5%;
      margin-top: 2vh;
      font-size: 2.2rem;
    }
  }
  @media only screen and (max-width: 1000px){
    .CityServicesText{
      display: none;
    }
  }
  .MainSectionContainer {
    position: relative;
    margin-top: 10vh;
    margin-left: 5%;
    width: 90%;
  }
  .TableSection {
    text-align: center;
    margin-top: 7.5vh;
  }
  @media only screen and (min-width: 1000px){
    .MainSectionContainer {
      margin-left: 10%;
      width: 80%;
    }
  }
  .SettingSection {
    margin: 7vh 0;
  }
  .ModifyingCategory {
    width: 100%;
    background-color: #ccccff;
    position: relative;
    margin: 2vh 0; 
    padding: 2vh 2%;
    border-radius: 1vh;
    border: solid 1px #333;
    transition: all 0.5s;
  }
  .ModifyingCategory h2{
    font-size: 1.2rem;
    font-family: Nunito, sans-serif;
    color: #110033;
  }
  .DownArrow{
    position: absolute;
    top: 1vh;
    right: 2%;
    transform: rotate(-1deg);
    transition: all 0.5s;
    padding: 2vh 2%;
  }
  .ArrowPart {
    height: 2.5vh;
    width: 0.5vh;
    background-color: #110044;
    display: inline-block;
    border-radius: 0.4vh;
  }
  .LeftSide {
    transform: rotate(-45deg);
    margin-right: 1vh;
  }
  .RightSide {
    transform: rotate(45deg);
  }
  .CategoryTextArea {
    width: 50%;
    margin: 3vh 0;
    max-width: 95%;
    height: 50vh;
    border: solid 1px #333;
    border-radius: 2px;
    padding: 2vh 2%;
    color: #222;
    font-family: Abel, sans-serif;
    font-size: 1.5rem;
    background-color: #ccc;
  }
  @media only screen and (max-width: 1000px){
    .CategoryTextArea{
      width: 90%;
    }
  }
  .SendDataBtn {
    color: #eee;
    font-size: 1.3rem;
    font-family: Ubuntu, sans-serif;
    background-color: #110044;
    padding: 2vh 3%;
    width: 50%;
    text-align: center;
    border-radius: 5px;
    border: none;
  }
  .KeyWestLogo {
    position: absolute;
    top: 5%;
    left: 20px;
    display: flex;
    width: 70%;
    padding-bottom: 1.5rem;
  }
  .KeyWestLogoImage{
    width: 5rem;
  }
  .KeyWestLogoLabel{
    color: #ccf;
    font-family: Nunito, sans-serif;
    font-size: 1.4rem;
  }
  .KeyWestLogoLabelBox{
    display: flex;
    align-items: center;
    padding-left: 3%;
  }
  @media only screen and (max-width: 1000px){
    .KeyWestLogoImage{
      width: 3.7rem;
    }
    .KeyWestLogo {
      top: 7%;
      left: 20px;
      display: flex;
      width: 70%;
    }
    .KeyWestLogoLabel{
      font-size: 1.2rem;
    }
  }
  .Chapter {
    color: #222255;
    font-family: Ubuntu, sans-serif;
    margin: 3%;
    margin-left: 0;
    font-size: 1.8rem;
  }
  .Text {
    color: #111133;
    font-family: Josefin Sans, sans-serif;
    font-size: 1.4rem;
  }
  .Link {
    color: #222255;
    font-family: Nunito, sans-serif;
    font-size: 1.6rem;
    text-decoration: none;
    line-height: 8vh;
  }
  @media only screen and (max-width: 750px){
    .Chapter{
      font-size: 1.3rem;
    }
    .Text{
      font-size: 1.1rem;
    }
    .Link{
      font-size: 1.2rem;
    }
  }
  .Service-Description { 
    margin-bottom: 1vh;
    margin-top: 3vh;
  }
  #StickyNavbar {
    width: 100%;
    height: 13vh;
    min-height: 4rem;
    background-color: rgba(51, 34, 136, 0.9);
    left: 0;
    transition: top 0.5s;
    z-index: 2;
  }
  .Header-LowerSection{
    position: relative;
    box-shadow: inset 0 0 40vh black, inset 0 0 40vh black;
    background-position: center;
    background-size: cover;
    height: 50vh;
  }
  @media only screen and (min-height: 950px){
    .Header-LowerSection{
      height: 70vh;
    }
  }
`

export default global