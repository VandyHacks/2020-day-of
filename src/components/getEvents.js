// import axios from 'axios';

const CALENDAR_ID = 'vanderbilt.edu_8p58kn7032badn5et22pq1iqjs@group.calendar.google.com';
const EVENTTYPE = 'VEVENT';

// // const API_KEY = `${process.env.GATSBY_API_KEY}`;
// const TIME_MIN = '2019-10-01T00:00:00Z';
// const TIME_MAX = '2019-11-04T10:00:00Z';
// let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&orderBy=startTime&&singleEvents=true&timeMin=${TIME_MIN}&timeMax=${TIME_MAX}`;

// import ical, { CalendarResponse, CalendarComponent, VEvent } from 'node-ical';

// const filterByCalType = (
// 	objNames,
// 	cal,
// 	type
// ) => {
// 	return objNames.filter(obj => cal[obj].type === type).map(key => `${key}`);
// };

// export async function getEvents() {
//     if(CALENDAR_ID){
//         const url = `https://www.google.com/calendar/ical/${CALENDAR_ID}/public/basic.ics`;
// 		const cal = await ical.fromURL(url).catch(err => {
// 			throw new Error(`Could not fetch calendar at URL: ${url}; Error: ${err.message}`);
//         });
//         const calKeys = Object.keys(cal);
//         const eventsKeys = filterByCalType(calKeys, cal, EVENTTYPE);
//         console.log(eventsKeys);

//     }
// }


// export async function getEvents() {
// 	axios
// 		.get(url)
// 		.then(resp => {
// 			const events = [];
// 			resp.data.items.map(event => {
// 				let newEvent = {
// 					start: event.start.dateTime || event.start.date,
// 					end: event.end.dateTime || event.end.date,
// 					title: event.summary,
// 				};
// 				newEvent.start = new Date(newEvent.start);
// 				newEvent.end = new Date(newEvent.end);
// 				events.push(newEvent);
// 			});
// 			callback(events);
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// }
