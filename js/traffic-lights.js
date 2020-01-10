var client = new AWS.DynamoDB.DocumentClient({
        accessKeyId: 'xxx',
        secretAccessKey: 'xxx',
        region: 'us-east-1'
    });

window.setInterval(function() {
    //resetView();
    getCarParkStatus().then(modifyView);
}, 2000);

let allowedIn = false;

function getCarParkStatus() {
    return client.scan({TableName: 'EntryStatus'}).promise()
        .then(({Items}) => {
            const first = Items[0];
            if(allowedIn !== first.AllowedIn) resetView();
            allowedIn = first.AllowedIn;
            return {
                "color": first.AllowedIn ? 'green' : 'red',
                "permitted": first.AllowedIn,
                "spaceNumber": first.SpaceNumber
            }
        });
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
    response.permitted ? $('#parkingPermitted').show() : $('#parkingDenied').show();
    $('#parkingSpaceId').text(response.spaceNumber);
    $('#'+response.color).toggleClass('light-visible', true);
}
