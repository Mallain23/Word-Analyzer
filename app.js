const wordCounter = input => input.split(" ").length;

const uniqueWordCounter = input => {
    let wordObj = {};
      input.split(" ").map(element => {
      return wordObj[element] = !wordObj[element] ? 1 : wordObj[element] + 1
      });
      return Object.keys(wordObj).length;
}

const averageWordLength = input => (input.split("").length - (wordCounter(input) - 1))  / wordCounter(input);



const updateReport = (text) => {
        let textReport = $(".js-text-report");
        $(".js-wordCount").text(wordCounter(text));
        $(".js-uniqueWordCount").text(uniqueWordCounter(text));
        $(".js-averageWordCount").text(averageWordLength(text) + " characters");
        textReport.removeClass("hidden");

};


const eventListeners = () => {
    $(".js-text-form").submit(function(event) {
        event.preventDefault();
       let userInput = $("#user-text").val();
        updateReport(userInput);
    });
};

const init = () => {
  eventListeners();
}

$(init)// your code here!
