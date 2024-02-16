import dynamic from 'next/dynamic';
import { useState } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

const OnDuty = ({ data }) => {
	const [series] = useState([
		data['Card On Duty']['On Duty'],
		data['Card On Duty']['Total'],
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
		labels: ['On Duty', 'Total'],
		stroke: { width: 3 },
		plotOptions: {
			pie: {
				donut: {
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
							label: '',
							show: true,
							showAlways: true,
							position: ['50%', '50%'],
							formatter: function (w) {
								return w.globals.seriesTotals.reduce((a, b) => {
									return `${a} /${b} `;
								});
							},
							fontSize: 15,
							color: 'gray',
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
						Today
						<span className="ml-2 text-gray-500">On Duty</span>
					</div>
				</div>
			</div>

			<div className="items-center pt-10">
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

export default OnDuty;
