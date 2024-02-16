import React, { useContext } from 'react';
import { GlobalContext } from '@/layouts';
import OnDuty from './OnDuty';
import Attedance from './Attedance';
import NonSchedule from './NonSchedule';
import Feed from './Feed';
import Patroli from './Patroli';
import NonGeofence from './NonGeofence';
import AttedanceDaily from './AttedanceDaily';
import AttedanceShift from './AttedanceShift';
import dataJson from '@/data/dummy chart interview 1.json';
import dataJson2 from '@/data/dummy chart interview 2.json';

const DashboardPage = () => {
	const { collapse } = useContext(GlobalContext);
	const data = JSON.parse(JSON.stringify(dataJson));
	const dataChart = JSON.parse(JSON.stringify(dataJson2));

	return (
		<div className="min-h-screen">
			<h4 className="text-xl font-medium mb-3">Dashboard Attedance</h4>
			<div
				className={`grid grid-cols-1 ${
					collapse
						? 'sm:grid-cols-1 lg:grid-cols-3'
						: 'sm:grid-cols-2 xl:grid-cols-3'
				} gap-5`}
			>
				<div
					className={`grid grid-cols-1 ${
						collapse
							? 'sm:grid-cols-1 lg:grid-cols-2'
							: 'sm:grid-cols-2 xl:grid-cols-2'
					} gap-5`}
				>
					<OnDuty data={data} />
					<Attedance data={data} />
					<Feed data={data} />
					<Patroli data={data} />
					<NonSchedule data={data} />
					<NonGeofence data={data} />
				</div>
				<div className="grid grid-cols-1 col-span-2 gap-5">
					<AttedanceDaily data={dataChart} />
					<AttedanceShift data={dataChart} />
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
