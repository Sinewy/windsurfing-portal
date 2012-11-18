AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {
		$.imJQMosaic(
			{ 
				image:'/windsurfing-portal-theme/images/surfer3.jpg', 
				target: 'logo', 
				frameWidth: '960', 
				frameHeight:'300', 
				numberOfTilesX: '4', 
				numberOfTilesY: '3', 
				tileMargin: '2', 
				tileBorderRadius: '5', 
				effectIntensity: '0.6', 
				effectColor: '#cccccc' 
			},
			{ 
				menuStyle:
				{
					font:"Lucida Grande", 
					fontColor:"#fff", 
					fontSize:"4.2em", 
					background:"#064C8A" 
				}, 
				menu:
				[ 
					{
						tileNumber: '7', 
						title: 'wind'
					}, 
					{
						tileNumber: '8', 
						title: 'portal'
					} 
				] 
			}
		);
	}
);