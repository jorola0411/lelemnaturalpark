document.addEventListener("DOMContentLoaded", function() {
    const adultTicketInput = document.getElementById("adultTickets");
    const childTicketInput = document.getElementById("childTickets");
    const seniorTicketInput = document.getElementById("seniorTickets");
    const totalCostElement = document.getElementById("totalCost");

    function updateTotalCost() {
        const adultTickets = parseInt(adultTicketInput.value) || 0;
        const childTickets = parseInt(childTicketInput.value) || 0;
        const seniorTickets = parseInt(seniorTicketInput.value) || 0;

        const totalCost = (adultTickets * 20) + (childTickets * 10) + (seniorTickets * 15);
        totalCostElement.textContent = totalCost;
    }

    adultTicketInput.addEventListener("input", updateTotalCost);
    childTicketInput.addEventListener("input", updateTotalCost);
    seniorTicketInput.addEventListener("input", updateTotalCost);

    document.getElementById("ticketForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Tickets purchased successfully!");
    });
});