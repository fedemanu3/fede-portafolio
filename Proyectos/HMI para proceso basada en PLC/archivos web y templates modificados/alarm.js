	//var intervalId;
	$(document).ready(function () {	
	
		//Hide the Option panel since Alarm screen doesnot have any options
        $("#OptionDiv").hide();
        $("#OptionDD").hide();
        $(".closeIconSmallDevices").hide();
		
		//Handle alarm status change 
		window.setInterval(handleAlarmStatusChange, 500);
		
		/*Sript to show the Active alarms by default on page load locally.
		This function needs to be commented before pushing the code into hareware
		Just testing purpose*/
		/*$("[SubParamId]").each(function (idx, item) {
			var idStatus = $(this).children().eq(1).children("div").attr('Id').trim();
			if(idx == 0 || idx == 1 ||idx == 2) {
				var idVal = idStatus;
				idVal += "_1";
				$(this).children().eq(1).children("div").children("img").removeAttr("class");
				$(this).children().eq(1).children("div").children("img").addClass(idVal);
			}
			else {
				var idVal = idStatus;
				idVal += "_0";
				$(this).children().eq(1).children("div").children("img").removeAttr("class");
				$(this).children().eq(1).children("div").children("img").addClass(idVal);
			}
		});*/
       
	  
        /* Crear the text in search field when the check box has been cheked */
        $("#selectActive").click(function () {
           
            $("#alarmNameSearch").val("");
        });
		
		
    });
	
	/* Handle the alarm status in the Alarm list */
	var handleAlarmStatusChange = function () {
		
		//Search input field text 
	    var q = $("#alarmNameSearch").val().toLowerCase();
		
		//Show active / all alarms based on check box selection
		if ($("#selectActive").is(':checked')) {
			$("[SubParamId]").each(function (idx, item) {
				var idStatus = $(this).children().eq(1).children("div").attr('Id');
				idStatus += "_1";
				//Active Status
				if($(this).children().eq(1).children("div").children("img").attr('class') == idStatus) {
					$(this).children().eq(2).children("input[type='text']").val("Active");
					
					//Show alarms based on search input text
					if ($(this).children().eq(0).text().toLowerCase().indexOf(q) == -1) {
						$(this).hide();
					}
					else {
						$(this).show();
					}
				}
				else {
					var alarmStatus = $(this).children().eq(2).children("input[type='text']").val("Inactive");
					$(item).hide();
				}
			});
		}
		else {
			 $("[SubParamId]").each(function (idx, item) {
				var idStatus = $(this).children().eq(1).children("div").attr('Id');
				idStatus += "_1";
				//Show alarms based on search input text
				if($(this).children().eq(1).children("div").children("img").attr('class') == idStatus) {
					$(this).children().eq(2).children("input[type='text']").val("Active");
				}
				else {
					$(this).children().eq(2).children("input[type='text']").val("Inactive");
				}
				//Show / hide the alarms from the list based on search input field text
				if ($(this).children().eq(0).text().toLowerCase().indexOf(q) == -1) {
					$(this).hide();
				}
				else {
					$(this).show();
				}
			});
		}
    }
	
