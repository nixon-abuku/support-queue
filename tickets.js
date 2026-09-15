const tickets = [
  { id: 1, customer: "Ada Lovelace",   issue: "Cannot log in",           status: "open" },
  { id: 2, customer: "Linus Torvalds", issue: "Payment failed at checkout", status: "pending" },
  { id: 3, customer: "Grace Hopper",   issue: "App crashes on startup",   status: "open" },
  { id: 4, customer: "Alan Turing",    issue: "Password reset email missing", status: "closed" }
];

// SUMMARY OF TICKETS
const getTicketSummaries = (tickets) => {
    const collectSummary = tickets.map(
        ticket => `#${ticket.id} - ${ticket.customer}: ${ticket.issue} (${ticket.status}) `
    );
    return collectSummary;
}

// FIND TICKET BY ID
const getTicketById = (tickets, id) => {
    return tickets.find((ticket) => 
        ticket.id === id
    );
}


// 
const getOpenIssues = (tickets) => {
    return tickets.filter((ticket) => ticket.status === "open").map((ticket) => ticket.issue)
}

//console.log(getOpenIssues(tickets));


// 
const hasUnresolvedTickets = (tickets) => {
    return tickets.some((ticket) => ticket.status != "closed")
}


//COUNT OPEN TICKETS
const countOpenTickets = (tickets) => {
    return tickets.reduce((acc, ticket) => {
        let total = 0;
        if (ticket.status === "open"){
            total = acc + 1
        }else {
            total = acc + 0
        }
        return total;
    }, 0);
}

console.log(countOpenTickets(tickets));


//SUMMARY OF TICKETS
//console.log(getTicketSummaries(tickets));


//GET TICKETS BY ID
//console.log(getTicketById(tickets, 2));
//console.log(getTicketById(tickets, 99));
