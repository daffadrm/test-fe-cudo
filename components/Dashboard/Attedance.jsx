import dynamic from 'next/dynamic';
import { useState } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

const Attedance = ({ data }) => {
	const [series] = useState([
		data['Card Attendance']['Attend'],
		data['Card Attendance']['Total'],
	]);
	const chartOptions = {
		chart: { type: 'donut' },
		legend: { show: false },
		dataLabels: { enabled: false },
		tooltip: { enabled: true },
		states: {
			hover: { filter: { type: 'lighten', value: 0.5 } },
			active: { filter: { type: 'none', value: 0 } },
		},
		labels: ['Attend', 'Total'],

		stroke: { width: 3 },
		plotOptions: {
			pie: {
				startAngle: 0,
				endAngle: 360,
				expandOnClick: false,
				offsetX: 0,
				offsetY: 0,
				customScale: 1,
				dataLabels: {
					offset: 0,
					minAngleToShowLabel: 10,
				},
				size: 800,
				donut: {
					size: '65%',
					background: 'transparent',
					labels: {
						show: true,
						name: {
							show: true,
							fontSize: '12px',
							fontFamily: 'Helvetica, Arial, sans-serif',
							fontWeight: 600,
							color: '#373d3f',
							offsetY: -10,
							formatter: function (val) {
								return val;
							},
						},
						value: {
							show: true,
							fontSize: '14px',
							fontFamily: 'Helvetica, Arial, sans-serif',
							fontWeight: 400,
							color: '#373d3f',
							offsetY: 16,
							formatter: function (val) {
								return val;
							},
						},
						total: {
							show: true,
							showAlways: false,
							label: '',
							fontSize: '22px',
							fontFamily: 'Helvetica, Arial, sans-serif',
							fontWeight: 600,
							color: '#373d3f',
							formatter: function (w) {
								const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
								const percentage = (w.globals.seriesTotals[0] / total) * 100;
								return `${percentage.toFixed(2) * 1}%`;
							},
						},
					},
				},
			},
		},
	};

	return (
		<div className="bg-white w-full rounded-lg p-5 border-[1px] overflow-hidden">
			<div className="flex items-center gap-12 my-3">
				<div className="text-inline">
					<div className="text-red-500 mr-2">
						Total
						<span className="ml-2 text-gray-500">Attendance</span>
					</div>
				</div>
			</div>

			<div className="pt-10">
				<ReactApexChart
					width={'100%'}
					height={'auto'}
					type="donut"
					options={chartOptions}
					series={series}
				/>
			</div>
		</div>
	);
};

export default Attedance;
