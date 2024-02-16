import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});
const AttedanceShift = ({ data }) => {
	const processedData = Object.keys(data['Attendance Per Shift']).reduce(
		(result, key) => {
			const seriesData = Object.entries(data['Attendance Per Shift'][key]).map(
				([date, value]) => ({ x: date, y: value })
			);
			result[key] = seriesData;
			return result;
		},
		{}
	);
	const attendData = processedData['Attend'];
	const attendYValues = attendData.map((dataPoint) => dataPoint.y);

	const unAttendData = processedData['Un-attend'];
	const unAttendYValues = unAttendData.map((dataPoint) => dataPoint.y);

	const lateCheckInData = processedData['Late Check-in'];
	const lateCheckInYValues = lateCheckInData.map((dataPoint) => dataPoint.y);

	const nonScheduleData = processedData['Non Schedule'];
	const nonScheduleYValues = nonScheduleData.map((dataPoint) => dataPoint.y);

	const totalAttendData = processedData['Total Attend'];
	const totalAttendYValuesst = totalAttendData.map((dataPoint) => dataPoint.y);

	const totalUnAttendData = processedData['Total Attend'];
	const totalUnAttendYValuesst = totalUnAttendData.map(
		(dataPoint) => dataPoint.y
	);

	const totalLateCheckInData = processedData['Total Late Check-in'];
	const totalLateCheckInYValues = totalLateCheckInData.map(
		(dataPoint) => dataPoint.y
	);

	const totalNonScheduleData = processedData['Total Non Schedule'];
	const totalNonScheduleYValues = totalNonScheduleData.map(
		(dataPoint) => dataPoint.y
	);

	const options = {
		series: [
			{
				name: 'Attend',
				type: 'bar',
				data: attendData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				max: Math.max(...attendYValues),
			},
			{
				name: 'Un Attend',
				data: unAttendData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				type: 'bar',
				max: Math.max(...unAttendYValues),
			},
			{
				name: 'Late Check-in',
				data: lateCheckInData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				type: 'bar',
				max: Math.max(...lateCheckInYValues),
				min: 0,
			},
			{
				name: 'Non Schedule',
				data: nonScheduleData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				type: 'bar',
				min: 0,
				max: Math.max(...nonScheduleYValues),
			},
			{
				name: 'Total Attend',
				data: totalAttendData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				type: 'line',
				min: -100,
				max: Math.max(...totalAttendYValuesst),
			},
			{
				name: 'Total Un-Attend',
				data: totalUnAttendData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				type: 'line',
				min: -300,
				max: Math.max(...totalUnAttendYValuesst),
			},
			{
				name: 'Total Late Check in',
				data: totalLateCheckInData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				min: -100,
				type: 'line',
				max: Math.max(...totalLateCheckInYValues),
			},
			{
				name: 'Total Non Schedule',
				data: totalNonScheduleData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				type: 'line',
				min: -100,
				max: Math.max(...totalNonScheduleYValues),
			},
		],
		chart: {
			stacked: true,
			stackType: 'normal',
		},
		plotOptions: {
			line: {
				horizontal: true,
				columnWidth: '100%',
			},
		},
		stroke: {
			curve: 'smooth',
			width: [0, 0, 0, 0, 5, 5, 5, 5],
		},
		fill: {
			opacity: 1,
		},

		dataLabels: {
			enabled: false,
		},

		yaxis: [
			{
				title: {
					text: 'Precentage',
					style: {
						color: '#FF0000',
					},
				},
				min: 0,
				labels: {
					style: {
						colors: '#FF0000',
					},
				},
				max: 100,
			},
			{
				opposite: true,
				title: {
					text: 'Total',
					style: {
						color: '#FF0000',
					},
				},
				labels: {
					style: {
						colors: '#FF0000',
					},
				},
				max: 100,
			},
		],
	};
	return (
		<div className="bg-white w-full rounded-lg p-5 border-[1px] overflow-hidden">
			<div className="flex items-center gap-12 my-3">
				<div className="text-inline">
					<div className="text-gray-500 mr-2">Attedance - Per Shift</div>
				</div>
			</div>

			<div className="">
				<div>
					<ReactApexChart
						width={'100%'}
						height={'350'}
						type="bar"
						options={options}
						series={options.series}
					/>
				</div>
			</div>
		</div>
	);
};

export default AttedanceShift;
