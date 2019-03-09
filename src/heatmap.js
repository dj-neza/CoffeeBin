import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import React from 'react';

export default class Heatmap extends React.Component {

	constructor(props) {
    super(props);
	this.state = { coffees: 
				[{ date: '2019-03-01', count: 2 },
				{ date: '2019-03-02', count: 0 },
				{ date: '2019-03-03', count: 0 },
				{ date: '2019-03-04', count: 5 },
				{ date: '2019-03-03', count: 2 },
				{ date: '2019-03-03', count: 3 },
				{ date: '2019-03-07', count: 1 },
				{ date: '2019-03-08', count: 3 },
				{ date: '2019-03-09', count: 8 },
				{ date: '2019-03-03', count: 0 },
				]
			}
		}

render() {
	return (<CalendarHeatmap
  startDate={new Date('2019-02-28')}
  endDate={new Date('2019-03-10')}
  values={this.state.coffees}
  horizontal={false}
  showWeekdayLabels={true}
  classForValue={(value) => {
    if (!value) {
      return 'color-empty';
    }
    return `color-gitlab-${value.count}`;
  }}
/>);
}}