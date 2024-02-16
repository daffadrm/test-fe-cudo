const Patroli = ({ data }) => {
	return (
		<div className="bg-white w-full rounded-lg p-5 border-[1px] overflow-hidden">
			<div className="flex items-center gap-12 my-3">
				<div className="text-inline">
					<div className="text-red-500 mr-2">
						Today
						<span className="ml-2 text-gray-500">Patroli</span>
					</div>
				</div>
			</div>

			<div className="text-center items-center pt-10">
				<div className="text-6xl p4">{data['Card Patrol']['Total Patrol']}</div>
				<div className="pt-2">person</div>
			</div>
		</div>
	);
};

export default Patroli;
