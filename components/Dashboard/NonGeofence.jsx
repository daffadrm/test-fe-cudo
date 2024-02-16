import { chartOptions } from '@/data/data';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';

const NonGeofence = ({ data }) => {
	return (
		<div className="bg-white w-full rounded-lg p-5 border-[1px] overflow-hidden">
			<div className="flex items-center gap-12 my-3">
				<div className="text-inline">
					<div className="text-red-500 mr-2">
						Today
						<span className="ml-2 text-gray-500">Non Geofance</span>
					</div>
				</div>
			</div>

			<div className="items-center text-center pt-10">
				<div className="text-6xl">
					{data['Card Non Geofence']['Total person']}
				</div>
				<div className="pt-2">person</div>
			</div>
		</div>
	);
};

export default NonGeofence;
