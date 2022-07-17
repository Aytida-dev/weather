// import { Accordion } from "react-accessible-accordion";
// import { AccordionItemHeading } from "react-accessible-accordion/dist/types/components/AccordionItemHeading";
// import { AccordionItemHeading } from "react-accessible-accordion/dist/types/components/AccordionItemHeading";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


export default function Forecast(props) {

    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const day = new Date().getDay();

    const dayInWeek = week.slice(day, week.length).concat(week.slice(0, day));


    return (
        <>

            <Accordion allowZeroExpanded>
                {props.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="dailyItem">
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="" className="iconSmall" />
                                    <label htmlFor="" className="day">{dayInWeek[index]}</label>
                                    <label htmlFor="" className="dayTemp">{item.main.temp}°C</label>
                                    <label htmlFor="" className="dayDesc">{(item.weather[0].description).charAt(0).toUpperCase() + (item.weather[0].description).slice(1)}</label>

                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="dailyInfo">
                                <div className="row1">
                                    <label htmlFor="">Feels like</label>
                                    <label htmlFor="">Wind</label>
                                    <label htmlFor="">Humidity</label>
                                    <label htmlFor="">Pressure</label>
                                </div>
                                <div className="row2">
                                    <label htmlFor="">{item.main.feels_like}°C</label>
                                    <label htmlFor="">{item.wind.speed}m/s</label>
                                    <label htmlFor="">{item.main.humidity}%</label>
                                    <label htmlFor="">{item.main.pressure}Pa</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}
            </Accordion>


        </>
    )
}