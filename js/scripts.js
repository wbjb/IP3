function submitAnswers(){
	var total = 5;
	var score = 0;


	var q1 = document.forms["questionForm"]["q1"].value;
	var q2 = document.forms["questionForm"]["q2"].value;
	var q3 = document.forms["questionForm"]["q3"].value;
	var q4 = document.forms["questionForm"]["q4"].value;
	var q5 = document.forms["questionForm"]["q5"].value;
	var q6 = document.forms["questionForm"]["q6"].value;
	var q7 = document.forms["questionForm"]["q7"].value;
	var q8 = document.forms["questionForm"]["q8"].value;
	var q9 = document.forms["questionForm"]["q9"].value;
	var q10 = document.forms["questionForm"]["q10"].value;



	var answers = ["c","d","d","d","c","a","a","d","b","b"]
	for (i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i-1]){
			score++;
		}
	}
		$("#hide").click(function(){
    		$("section").slideUp();
    		var results = document.getElementById('results');
			results.innerHTML = 'Score:'+score/total*100+"%";
		});

	
	

		return false;


}
