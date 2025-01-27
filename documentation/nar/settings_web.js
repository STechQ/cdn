var settings = {
	"settings": {
		"value": {
			cssPath: [
			"../dip/assets/static/css/plateau_ui.css",
			"../dip/assets/static/css/dx.light.css"
			],
			"rootqjson": "/microUI/authorization/qjson/buyer",
			"pipelineqjson": "../dip/assets/settings/qjson/pipeline.qjson",
			"localport": 3003,
			"singleTab": false,
			"backendInf": {
			  "Backend": "Rally",
			  "isKibanaLogEnabled": false,
			  "containerName": "NAR",
			  "iam": {
				"active": false,
				"options": {
				  "url": 'http://identity-provider.tkb-int.dev.rally.softtech/auth/',
				  "realm": 'main',
				  "clientId": 'ui-web-client',
				  "onLoad": 'login-required'
				},
			  },
			  "PredefinedBackendHeaders": {
				"Rally": {
				  "x-rly-tenant": {
					"overwrite": false,
					"value": 1
				  },
				  "x-rly-session": {
					"overwrite": false,
					"value": 1
				  },
				//   "x-rly-corr": {
				// 	"overwrite": false,
				// 	"value": 1
				//   },
				  "x-rly-ins-unit": {
					"overwrite": false,
					"value": 'cs:branchCode'
				  },
				  "x-rly-user-id": {
					"overwrite": false,
					"value": 'cs:userid'
				  }
				}
			  },
			  "DomainModuleList": {
				"timemanagement": "/microui/timemanagement/compVNames_timemanagement.js"
			  },
			  "Header": {
				"x-rly-user-id": {
				  "overwrite": false,
				  "value": 'cs:userid'
						  },
				  "x-rly-ins-unit": {
					 "overwrite": false,
					 "value": 'cs:branchCode'
				},
				"Content-Type": {
				  "overwrite": true,
				  "value": "application/json"
				},
				"userId": {
				  "overwrite": false,
				  "value": 'cs:userid'
				},
				"corrr": {
				  "overwrite": false,
				  "value": "test3"
				},
			   /* "X-Consumer": {
				  "overwrite": false,
				  "value": "cs:consumer"
				},*/
				 "X-Customer": {
				  "overwrite": false,
				  "value": "cs:customer"
				},
				"LtpaToken": {
				  "overwrite": false,
				  "value": "cs:token"
				},
				"Authorization": {
				  "overwrite": false,
				  "value": "cs:authorization"
				},
				"Accept": {
				  "overwrite": false,
				  "value": "*/*"
				}
			  }
			},
			"HeaderExceptionList": {
			  "login": "/services/authorization/api/authentication/authenticate"
			},
		  },
		"type": "object"
	},
	"localProxy": {	},
	"containerServices": {
		"value": window["plateauUIContainerServices"],
		"type": "object"
	},
	"componentList": {
		"value": "../dip/assets/static/js/componentList.js",
		"type": "path"
	}
}
if (typeof exports === 'object' && typeof module === 'object'){
 	module.exports = settings;
}else{ 
	window['plateauUISettings'] = settings;
}