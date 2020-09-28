/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 */

const ical = require('node-ical');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

// const superagent = require('superagent');

const CALENDAR_ID = 'c_cnqdsllqeigeg775do4jvnukgs@group.calendar.google.com';
const EVENTTYPE = 'VEVENT';
const API_KEY = `${process.env.API_KEY}`;
const TIME_MIN = '2020-10-01T00:00:00Z';
const TIME_MAX = '2020-11-04T10:00:00Z';
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&orderBy=startTime&&singleEvents=true&timeMin=${TIME_MIN}&timeMax=${TIME_MAX}`;

// const startEventTime = new Date('2019-10-01T00:00:00.000Z');
// const endEventTime = new Date('2019-11-03T23:59:59.999Z');

// async function getEvents() {
// async function getEvents() {
// 	try {
// 		const events = [];
// 		const res = await superagent.get(url);
// 		await JSON.parse(res.text).items.map(event => {
// 			events.push({
// 				start: event.start.dateTime || event.start.date,
// 				end: event.end.dateTime || event.end.date,
// 				title: event.summary,
// 			});
// 		});
// 		return events;
// 	} catch (err) {
// 		console.error(err);
// 	}
// }
// }

const filterByCalType = (objNames, cal, type) => {
	return objNames.filter(obj => cal[obj].type === type).map(key => `${key}`);
};

const filterCalByObjectNames = (objNames, cal) => {
	return objNames.map(key => cal[key]);
};

async function getEvents() {
	if (CALENDAR_ID) {
		const url = `https://www.google.com/calendar/ical/${CALENDAR_ID}/public/basic.ics`;
		const cal = await ical.fromURL(url).catch(err => {
			throw new Error(`Could not fetch calendar at URL: ${url}; Error: ${err.message}`);
		});
		const calKeys = Object.keys(cal);
		const eventsKeys = filterByCalType(calKeys, cal, EVENTTYPE);
		const eventsObjects = filterCalByObjectNames(eventsKeys, cal);
		return eventsObjects.map(event => ({
			title: event.summary,
			start: new Date(event.start),
			end: new Date(event.end),
		}));
	}
	return [];
}

async function repeatGetEvent() {
	await getEvents();
}

setInterval(repeatGetEvent, 300000);

exports.createPages = async ({ actions: { createPage } }) => {
	const events = await getEvents();
	createPage({
		path: `/`,
		component: require.resolve('./src/templates/index.js'),
		context: { events },
	});
};
