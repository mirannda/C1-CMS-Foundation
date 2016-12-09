const functionList = [
	{
		name: 'media',
		label: 'Media',
		entries: [
			{
				name: 'image-insert',
				label: 'Image',
				description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.',
				previewImageUrl: '/media/b72125aa-5828-463b-8548-f43d65ee33e0/-Rj7RQ/Copenhagen/Vikings__Photographer_Frederikssund_Turistbureau.jpg?w=100'
			},
			{
				name: 'video-insert',
				label: 'Video',
				description: 'Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
				previewImageUrl: '/media/393eeb79-ec4b-4a36-ab03-1b71e17112e2/vENN5g/Composite.Community.Profiles/Profiles-2.jpg?h=100'
			},
			{
				name: 'music-insert',
				label: 'Music',
				description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.',
				previewImageUrl: '/media/b72125aa-5828-463b-8548-f43d65ee33e0/-Rj7RQ/Copenhagen/Vikings__Photographer_Frederikssund_Turistbureau.jpg?w=100'
			},
			{
				name: 'banana-insert',
				label: 'Banana',
				description: 'Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
				previewImageUrl: '/media/393eeb79-ec4b-4a36-ab03-1b71e17112e2/vENN5g/Composite.Community.Profiles/Profiles-2.jpg?h=100'
			},
			{
				name: 'random-insert',
				label: 'Random',
				description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.',
				previewImageUrl: '/media/b72125aa-5828-463b-8548-f43d65ee33e0/-Rj7RQ/Copenhagen/Vikings__Photographer_Frederikssund_Turistbureau.jpg?w=100'
			},
			{
				name: 'absurd-insert',
				label: 'Absurdity',
				description: 'Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
				previewImageUrl: '/media/393eeb79-ec4b-4a36-ab03-1b71e17112e2/vENN5g/Composite.Community.Profiles/Profiles-2.jpg?h=100'
			}
		]
	},
	{
		name: 'social-network',
		label: 'Social Network',
		entries: [
			{
				name: 'fb-feed',
				label: 'Facebook feed',
				description: 'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.',
				previewImageUrl: '/media/393eeb79-ec4b-4a36-ab03-1b71e17112e2/vENN5g/Composite.Community.Profiles/Profiles-2.jpg?h=100'
			},
			{
				name: 'twitter-feed',
				label: 'Twitter feed',
				description: 'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.',
				previewImageUrl: '/media/b72125aa-5828-463b-8548-f43d65ee33e0/-Rj7RQ/Copenhagen/Vikings__Photographer_Frederikssund_Turistbureau.jpg?w=100'
			}
		]
	}
];

const fields = {
	'image-insert': [
		{
			name: 'image-insert.url',
			headline: 'Image URL'
		}
	],
	'video-insert': [
		{
			name: 'video-insert.url',
			headline: 'Video URL'
		}
	],
	'fb-feed': [
		{
			name: 'fb-feed.username',
			headline: 'User name'
		}
	],
	'twitter-feed': [
		{
			name: 'fb-feed.username',
			headline: 'User name'
		}
	]
};

export function getFunctions(context) {
	if (context) {
		return functionList;
	}
}

export function pickFunction(functionName) {
	console.log('Saved values', functionName); // eslint-disable-line no-console
}

export function getFunctionFields(functionName) {
	return fields[functionName];
}