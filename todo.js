var task = prompt("What yould you like to do?")
var lst=[]

while(task !="quit"){
	if(task == "new"){
		var ad = prompt("What would you like to add?")
		lst.push(ad)
		console.log(lst)
	}
	else if(task == "list"){
		console.log(lst)
	}
    else if(task=="delete"){
    	var del=prompt("What task you want to delete?")
    	if (lst.indexOf(del) != -1){
    		lst.splice(del,1)
    		console.log(lst)

    	}
    	else {
    		console.log("Task Not there on list")

    	}

    }

	task=prompt("What to do?")
	// console.log(lst)
}
