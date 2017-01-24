const pages = {
	'edit-language': {
		name: 'edit-language',
		label: 'Edit language',
		type: 'document',
		tabs: [
			{
				name: 'edit-language.form',
				type: 'form',
				fieldsets: [
					{
						name: 'edit-language.form.properties',
						label: 'Language Properties',
						fields: [
							{
								name: 'edit-language.form.properties.url-mapping-name',
								headline: 'URL mapping name',
								help: 'Base name in URLs'
							}
						]
					}
				]
			}
		],
		toolbars: [
			{
				name: 'edit-language.toolbar',
				style: 'light rightAligned',
				items: [
					{
						type: 'button',
						style: 'main',
						name: 'edit-language.toolbar.save',
						label: 'Save',
						icon: 'save',
						provider: { callAction: 'save' }
					}
				]
			}
		]
	},
	'other-page': {
		name: 'other-page',
		label: 'Other form page',
		type: 'document',
		tabs: [
			{
				name: 'other-page.form',
				type: 'form',
				fieldsets: [
					{
						name: 'other-page.form.properties',
						label: 'Language Properties',
						fields: [
							{
								name: 'other-page.form.properties.url-mapping-name',
								headline: 'URL mapping name',
								help: 'Base name in URLs'
							},
							{
								name: 'other-page.form.properties.pimp-my-select',
								headline: 'Xzibit says',
								type: 'select',
								options: [
									{ value: 'yo', label: 'Yo dawg,' },
									{ value: 'herd', label: 'I herd u like selects' },
									{ value: 'put', label: 'So I put a select in ur datafield' },
									{ value: 'react', label: 'so u can select in React' }
								],
								help: 'Wise words from a man who knows about putting things in other things'
							},
							{
								name: 'other-page.form.properties.check-one',
								headline: 'Some checkboxes',
								type: 'checkbox',
								help: 'Check it #1',
								label: 'The First'
							},
							{
								name: 'other-page.form.properties.check-two',
								type: 'checkbox',
								help: 'Check it #2',
								label: 'The Last'
							},
							{
								name: 'other-page.form.properties.check-three',
								type: 'checkbox',
								help: 'Check it #3',
								label: 'The Everything'
							}
						]
					},
					{
						name: 'other-page.form.stuff',
						label: 'Some things',
						fields: [
							{
								name: 'other-page.form.stuff.thing',
								headline: 'A value'
							}
						]
					},
					{
						name: 'other-page.form.morestuff',
						label: 'Some more things',
						fields: [
							{
								name: 'other-page.form.morestuff.thing',
								headline: 'A value'
							}
						]
					}
				]
			}
		],
		toolbars: [
			{
				name: 'other-page.toolbar',
				style: 'rightAligned',
				items: [
					{
						type: 'select',
						name: 'server-log.toolbar.date',
						placeholder: 'Select date',
						options: [
							{ value: '2016-09-23' },
							{ value: '2016-09-22' },
							{ value: '2016-09-21' },
							{ value: '2016-09-20' }
						]
					},
					{
						type: 'button',
						style: 'main',
						name: 'other-page.toolbar.save',
						label: 'Save',
						icon: 'save',
						provider: { callAction: 'save' }
					}
				]
			},
			{
				name: 'other-page.toolbar2',
				style: 'dark',
				items: [
					{
						type: 'button',
						name: 'other-page.toolbar2.sysviewToggle',
						style: 'small',
						icon: 'nodes',
						provider: { callAction: 'sysviewToggle' }
					},
					{
						type: 'button',
						name: 'other-page.toolbar2.labeled',
						style: 'icon-right',
						icon: 'cancel',
						label: 'Stuff',
						provider: { callAction: 'sysviewToggle' }
					},
					{
						type: 'select',
						name: 'server-log.toolbar2.date',
						placeholder: 'Select date',
						options: [
							{ value: '2016-09-23' },
							{ value: '2016-09-22' },
							{ value: '2016-09-21' },
							{ value: '2016-09-20' }
						]
					},
					{
						type: 'checkboxGroup',
						name: 'other-page.toolbar2.levels',
						options: [
							{ name: 'other-page.toolbar2.levels.critical', value: 'Critical', label: 'Critical' },
							{ name: 'other-page.toolbar2.levels.error', value: 'Error', label: 'Error' },
							{ name: 'other-page.toolbar2.levels.warning', value: 'Warning', label: 'Warning' },
							{ name: 'other-page.toolbar2.levels.info', value: 'Information', label: 'Information' },
							{ name: 'other-page.toolbar2.levels.verbose', value: 'Verbose', label: 'Verbose' }
						],
						default: [
							'Critical',
							'Error',
							'Warning',
							'Information'
						]
					}
				]
			}
		]
	},
	'tabbed-page': {
		name: 'tabbed-page',
		label: 'Tabbed page',
		type: 'document',
		defaultTab: 'tabbed-page.content',
		tabs: [
			{
				name: 'tabbed-page.settings',
				label: 'Settings',
				type: 'form',
				fieldsets: [
					{
						name: 'tabbed-page.settings.properties',
						label: 'Properties',
						fields: [
							{
								name: 'tabbed-page.settings.properties.name',
								headline: 'Name',
								help: 'What to call it'
							}
						]
					}
				]
			},
			{
				name: 'tabbed-page.content',
				label: 'Content',
				type: 'form',
				fieldsets: [
					{
						name: 'tabbed-page.content.properties',
						label: 'Imagine an editor here',
						fields: [
							{
								name: 'tabbed-page.content.properties.name',
								headline: 'Content',
								help: 'Should be an editor'
							}
						]
					}
				]
			}
		],
		toolbars: [
			{
				name: 'tabbed-page.toolbar',
				style: 'light rightAligned',
				items: [
					{
						type: 'button',
						style: 'main',
						name: 'tabbed-page.toolbar.save',
						label: 'Save',
						icon: 'save',
						provider: { callAction: 'save' }
					}
				]
			}
		]
	},
	'server-log': {
		name: 'server-log',
		label: 'Server log',
		type: 'document',
		toolbars: [
			{
				name: 'server-log.toolbar',
				style: 'light',
				items: [
					{
						type: 'select',
						name: 'server-log.date',
						optionLoader: 'getLogDates'
					},
					{
						type: 'button',
						name: 'server-log.toolbar.delete',
						label: 'Delete old',
						icon: 'trash',
						provider: { callAction: 'deleteOld' }
					},
					{
						type: 'button',
						name: 'server-log.toolbar.refresh',
						label: 'Refresh',
						icon: 'refresh',
						provider: { callAction: 'refresh' }
					},
					{
						type: 'checkboxGroup',
						name: 'server-log.levels',
						options: [
							{ name: 'server-log.levels.critical', value: 'Critical', label: 'Critical' },
							{ name: 'server-log.levels.error', value: 'Error', label: 'Error' },
							{ name: 'server-log.levels.warning', value: 'Warning', label: 'Warning' },
							{ name: 'server-log.levels.info', value: 'Information', label: 'Information' },
							{ name: 'server-log.levels.verbose', value: 'Verbose', label: 'Verbose' }
						],
						default: [
							'Critical',
							'Error',
							'Warning',
							'Information'
						]
					}
				]
			}
		],
		tabs: [
			{
				name: 'server-log.log',
				type: 'log',
				logURL: '/Composite/console/serverLog.json',
				logLevels: 'server-log.levels',
				logPageName: 'server-log.date',
				placeholder: 'No log data available...',
				headers: {
					timestamp: 'Date',
					message: 'Message',
					title: 'Title',
					severity: 'EventType'
				}
			}
		]
	},
	'svg-sprites': {
		name: 'svg-sprites',
		label: 'SVG Spritesheet',
		type: 'spritesheet'
	},
// New style of provider-heavy page. Not implemented yet.
	// 'component-selector-shim': {
	// 	name: 'component-selector-shim',
	// 	type: 'dialogPageShim',
	// 	dialog: {
	// 		name: 'component-selector',
	// 		panes: [{
	// 			name: 'component-list',
	// 			type: 'palette',
	// 			headline: 'Select a component',
	// 			noItemsText: 'No selectable component',
	// 			filter: 'left-aside',
	// 			categories: ['gallery', 'popular'],
	// 			topics: [
	// 				{
	// 					name: 'elementUpdate',
	// 					uri: 'components.new'
	// 				}
	// 			],
	// 			providers: [
	// 				{
	// 					name: 'elementSource',
	// 					uri: 'components.get',
	// 					protocol: 'wamp'
	// 				},
	// 				{
	// 					name: 'elementInsert',
	// 					protocol: 'post',
	// 					response: 'Dialog.RESPONSE_ACCEPT',
	// 					action: 'DialogPageBinding.ACTION_RESPONSE',
	// 					markup: ['selectedData'],
	// 					uri: ''
	// 				},
	// 				{
	// 					name: 'componentListCancel',
	// 					protocol: 'post',
	// 					response: 'Dialog.RESPONSE_CANCEL',
	// 					action: 'DialogPageBinding.ACTION_RESPONSE',
	// 					uri: ''
	// 				}
	// 			],
	// 			elements: {
	// 				fetch: 'elementSource',
	// 				update: 'elementUpdate'
	// 			},
	// 			buttons: [
	// 				{
	// 					name: 'cancelButton',
	// 					label: 'Cancel',
	// 					action: {
	// 						provider: 'componentListCancel'
	// 					}
	// 				},
	// 				{
	// 					name: 'finishButton',
	// 					label: 'Next',
	// 					style: 'main',
	// 					action: {
	// 						sendData: true,
	// 						provider: 'elementInsert'
	// 					}
	// 				}
	// 			]
	// 		}]
	// 	}
	// },
	'component-selector-shim': {
		name: 'component-selector-shim',
		type: 'dialogPageShim',
		dialog: {
			name: 'component-selector',
			panes: [
				{
					name: 'component-list',
					type: 'palette',
					headline: 'Select a component',
					noItemsText: 'No selectable component',
					context: 'left-aside',
					categories: ['Media', 'music'],
					select: {
						callAction: 'setDialogState',
						sendData: true
					},
					provider: {
						name: 'elementSource',
						protocol: 'wamp',
						uri: 'components.get',
						callAction: 'storeProviderData',
						sendData: true,
						sendNoCaller: true
					},
					finishButton: {
						label: 'Next',
						style: 'main'
					},
					finishProvider: {
						name: 'elementInsert',
						protocol: 'post',
						sendData: true,
						response: 'Dialog.RESPONSE_ACCEPT',
						action: 'DialogPageBinding.ACTION_RESPONSE',
						markup: ['selectedData']
					},
					cancelButton: {
						label: 'Cancel'
					},
					cancelProvider: {
						name: 'componentListCancel',
						protocol: 'post',
						response: 'Dialog.RESPONSE_CANCEL',
						action: 'DialogPageBinding.ACTION_RESPONSE'
					}
				}
			]
		}
	},
	search: {
		name: 'search',
		label: 'Search',
		type: 'search',
		placeholder: 'Search here',
		searchProvider: 'searchProvider',
		providers: [
			{
				name: 'searchProvider',
				protocol: 'wamp',
				uri: 'search.query',
				callAction: 'storeProviderData',
				sendData: true,
				sendNoCaller: true
			}
		],
		urlColumn: 'label'
	},
	'content-explorer': {
		name: 'content-explorer',
		label: 'Content',
		type: 'explorer',
		toolbars: [
			{
				name: 'content-browser-node-action-placeholder',
				items: []
			},
			{
				name: 'browser-navigation-toolbar',
				style: 'dark',
				items: [
					{
						type: 'button',
						style: 'small',
						name: 'navigation.showNodes',
						icon: 'nodes',
						provider: { callAction: 'toggleNodeTree' }
					},
					{
						type: 'button',
						name: 'navigation.back',
						style: 'join-right small',
						icon: 'previous',
						provider: { callAction: 'navigateBack' }
					},
					{
						type: 'button',
						name: 'navigation.forward',
						style: 'join-left small',
						icon: 'next',
						provider: { callAction: 'navigateForward' }
					},
					{
						type: 'button',
						style: 'small',
						name: 'navigation.refresh',
						icon: 'refresh',
						provider: { callAction: 'browserRefresh' }
					},
					{
						type: 'button',
						style: 'small',
						name: 'navigation.home',
						icon: 'home',
						provider: { callAction: 'navigateHome' }
					},
				]
			}
		],
		tabs: [{
			name: 'content-browser',
			type: 'browser',
			rootNode: 'contentRoot',
			provider: {
				protocol: 'wamp',
				uri: 'mock.struct.node'
			}
		}]
	},
	'media-explorer': {
		name: 'media-explorer',
		label: 'Media',
		type: 'explorer',
		tabs: [{
			name: 'media-browser',
			type: 'browser',
			rootNode: 'mediaRoot',
			provider: {
				protocol: 'wamp',
				uri: 'mock.struct.node'
			}
		}]
	},
	'data-explorer': {
		name: 'data-explorer',
		label: 'Data',
		type: 'explorer',
		tabs: [{
			name: 'data-browser',
			type: 'browser',
			rootNode: 'dataRoot',
			provider: {
				protocol: 'wamp',
				uri: 'mock.struct.node'
			}
		}]
	},
	'layout-explorer': {
		name: 'layout-explorer',
		label: 'Layout',
		type: 'explorer',
		tabs: [{
			name: 'layout-browser',
			type: 'browser',
			rootNode: 'layoutRoot',
			provider: {
				protocol: 'wamp',
				uri: 'mock.struct.node'
			}
		}]
	},
	'functions-explorer': {
		name: 'functions-explorer',
		label: 'Functions',
		type: 'explorer',
		tabs: [{
			name: 'functions-browser',
			type: 'browser',
			rootNode: 'functionsRoot',
			provider: {
				protocol: 'wamp',
				uri: 'mock.struct.node'
			}
		}]
	},
	'system-explorer': {
		name: 'system-explorer',
		label: 'System',
		type: 'explorer',
		tabs: [{
			name: 'system-browser',
			type: 'browser',
			rootNode: 'systemRoot',
			provider: {
				protocol: 'wamp',
				uri: 'mock.struct.node'
			}
		}]
	}
};

export default function (pageName) {
	return pages[pageName];
}