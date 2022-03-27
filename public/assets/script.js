$('#call-test').on('click', () => {
    summaryCall()
})

function summaryCall() {
    $.ajax({
        url: `./assets/json/order-summary-list.json`,
        method: "GET"
    }).then(function(data) {
        console.log(data)
    })
}

function detailCall() {

}