import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

const AttedanceDaily = ({ data }) => {
	const processedData = Object.keys(data['Attendance Daily']).reduce(
		(result, key) => {
			const seriesData = Object.entries(data['Attendance Daily'][key]).map(
				([date, value]) => ({ x: date, y: value })
			);
			result[key] = seriesData;
			return result;
		},
		{}
	);
	const attendData = processedData['Attend'];
	const attendYValues = attendData.map((dataPoint) => dataPoint.y);
	// Unattend
	const UnattendData = processedData['Unattend'];
	const unAttendYValues = UnattendData.map((dataPoint) => dataPoint.y);

	// Non Schedule
	const NonScheduleData = processedData['Non Schedule'];
	const NonScheduleYValues = NonScheduleData.map((dataPoint) => dataPoint.y);

	// Accumulation Attend
	const AccumulationAttendData = processedData['Accumulation Attend'];
	const AccumulationAttendYValues = AccumulationAttendData.map(
		(dataPoint) => dataPoint.y
	);

	// Accumulation Un-attend
	const AccumulationUnAttendData = processedData['Accumulation Un-attend'];
	const AccumulationUnAttendYValues = AccumulationUnAttendData.map(
		(dataPoint) => dataPoint.y
	);

	// Accumulation Non Schedule
	const AccumulationNonScheduleData =
		processedData['Accumulation Non Schedule'];
	const AccumulationNonScheduleYValues = AccumulationNonScheduleData.map(
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
				data: UnattendData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				type: 'bar',
				max: Math.max(...unAttendYValues),
			},
			{
				name: 'Non Schedule',
				data: NonScheduleData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				type: 'bar',
				max: Math.max(...NonScheduleYValues),
				min: 0,
			},
			{
				name: 'Accumulation Attend',
				data: AccumulationAttendData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				type: 'line',
				min: 0,
				max: Math.max(...AccumulationAttendYValues),
			},
			{
				name: 'Accumulation Un-attend',
				data: AccumulationUnAttendData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				type: 'line',
				min: -100,
				max: Math.max(...AccumulationUnAttendYValues),
			},
			{
				name: 'Accumulation Non Schedule',
				data: AccumulationNonScheduleData.map((value) => ({
					x: value.x,
					y: value.y,
				})),
				type: 'line',
				max: Math.max(...AccumulationNonScheduleYValues),
			},
		],
		chart: {
			height: 350,
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
			width: [0, 0, 0, 5, 5, 5],
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
				max: 100,
				labels: {
					style: {
						colors: '#FF0000',
					},
				},
			},
			{
				opposite: true,
				title: {
					text: 'Total',
					style: {
						color: '#FF0000',
					},
				},
				max: 100,
				labels: {
					style: {
						colors: '#FF0000',
					},
				},
			},
		],
	};

	return (
		<div className="bg-white w-full rounded-lg p-5 border-[1px] overflow-hidden">
			<div className="flex items-center gap-12 my-3">
				<div className="text-inline">
					<div className="text-gray-500 mr-2">Attendance - Daily</div>
				</div>
			</div>

			<div className="items-center">
				<ReactApexChart
					width={'100%'}
					height={'350'}
					type="bar"
					options={options}
					series={options.series}
				/>
			</div>
		</div>
	);
};

export default AttedanceDaily;
