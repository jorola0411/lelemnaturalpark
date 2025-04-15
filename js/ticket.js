document.addEventListener("DOMContentLoaded", function() {
    const adultTicketInput = document.getElementById("adultTickets");
    const childTicketInput = document.getElementById("childTickets");
    const seniorTicketInput = document.getElementById("seniorTickets");
    const totalCostElement = document.getElementById("totalCost");

    function updateTotalCost() {
        const adultTickets = parseInt(adultTicketInput.value) || 0;
        const childTickets = parseInt(childTicketInput.value) || 0;
        const seniorTickets = parseInt(seniorTicketInput.value) || 0;

        const totalCost = (adultTickets * 25) + (childTickets * 15) + (seniorTickets * 20);
        totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
    }

    adultTicketInput.addEventListener("input", updateTotalCost);
    childTicketInput.addEventListener("input", updateTotalCost);
    seniorTicketInput.addEventListener("input", updateTotalCost);

    document.getElementById("ticketForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Tickets purchased successfully!");
    });
});