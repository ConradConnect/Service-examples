function goToCompetition(elem, id) {
  let event = new CustomEvent("mdc-service-page-navigation", { bubbles: true, detail: { id: id.toString() } });
  elem.dispatchEvent(event);
}

function deleteCompetition(event, elem, id) {
  event.preventDefault();
  event.stopPropagation();
  let eventToDispatch = new CustomEvent("mdc-form", { 
    bubbles: true, 
    detail: { 
      id: id.toString(),
      endpoint: 'deleteCompetition'
    } 
  });
  elem.dispatchEvent(eventToDispatch);
}

function leaveCompetition(event, elem, id) {
  event.preventDefault();
  event.stopPropagation();
  let eventToDispatch = new CustomEvent("mdc-form", { 
    bubbles: true, 
    detail: { 
      id: id.toString(),
      endpoint: 'leaveCompetition'
    } 
  });
  elem.dispatchEvent(eventToDispatch);
}