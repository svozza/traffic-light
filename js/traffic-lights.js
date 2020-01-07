window.setInterval(function() {
    resetView();
	response = getCarParkStatus();
	modifyView(response);
}, 2000);

function getCarParkStatus() {
    //Need to replace this with a call to APIGW
    permitted = Math.round(Math.random()) == 1;
    color = permitted ? 'green':'red'
    spaceNumber = Math.floor(Math.random() * 100) + 1;

    response = {
        "color": color,
        "permitted": permitted,
        "spaceNumber": spaceNumber
    }

    return response
}

function resetView() {
    $('.light').toggleClass('light-visible', false);
    $('#parkingPermitted').hide();
    $('#parkingDenied').hide();
    $('#parkingPermissions').show();
}

function modifyView(response) {
    console.log(response.permitted);
    $('#parkingPermissions').hide();
    if (response.permitted) {
        $('#parkingPermitted').show();
    } else $('#parkingDenied').show();
    $('#parkingSpaceId').text(response.spaceNumber);
    $('#'+response.color).toggleClass('light-visible', true);
}
