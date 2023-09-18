import Button from "./Button";
import CardTag from "./CardTag";
import ChallengePage from "./ChallengePage";
import Createpage from "./Createpage";
import CTAitem from "./CTAitem";
import Hackathoncard from "./Hackathoncard";
import Header from "./Header"
import Homepage from "./Homepage"
import Heading from "./Heading";
import Herofooteritem from "./Herofooteritem";
import Herotitle from "./Herotitle";
import Searchbar from "./Searchbar";
import Timer from "./Timer";

const today = new Date()
const difference = (date1, date2) => (date1.getTime() - date2.getTime());
const statusCheck = ((startDate, endDate) => (difference(today, endDate) > 0)?"Past":
                        ((difference(startDate, today) > 0)?"Upcoming":"Active"))

export { Button, CardTag, ChallengePage, Createpage, CTAitem, Hackathoncard, Header, Heading, Homepage, Herofooteritem, Herotitle, Searchbar, statusCheck, Timer };