// const $ = require('jquery')

$("input[data-spellcheck='true']").on("keydown, keyup",function() {
  const inputString = $(this).val();
  updateDummyField(inputString, $(this));
  if(inputString.length > 2) {
    spellcheck(inputString).then(function(results) {
      //DO STUFF 
      if(!results.isValid) {
        renderSuggestions(results.suggestions)
      }
    });
  }
});

function updateDummyField(string, inputField) {
  inputField
    .closest(".form-group")
    .find("div[data-spellcheck-suggestions='true']")
    .text(string);
}

function renderSuggestions() {
  
}

function spellcheck(string) {
  return Promise.resolve({
    checkString: string,
    valid: false,
    suggestions: {
      'thes': [
        'this'
      ]
    }
  });
}