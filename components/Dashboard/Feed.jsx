const Feed = ({ data }) => {
	return (
		<div className="bg-white w-full rounded-lg p-5 border-[1px] overflow-hidden">
			<div className="flex items-center gap-12 my-3">
				<div className="text-inline">
					<div className="text-red-500 mr-2">
						Today
						<span className="ml-2 text-gray-500">Feed / Activity</span>
					</div>
				</div>
			</div>

			<div className="items-center text-center pt-10">
				<div className="">
					<div className="text-6xl p4">1</div>
					<div className="pt-2">
						of{' '}
						<span className="text-green-400">
							{data['Card Feed Activity']['Total person']}
						</span>{' '}
						person
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feed;
