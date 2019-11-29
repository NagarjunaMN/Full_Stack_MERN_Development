const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
// Q. Give array of inventors ' first and last name '
// ['Albert Entn', 'Isaac Newton', ...]
let name= []
for(i=0;i<inventors.length;i++){
    var fullnm=inventors[i].first+' '+inventors[i].last
    name.push(fullnm)
}
console.log(name)

//map it loops through the array like a for loop and executes the function
//whatever we return it taks it return value and converts it into an array
var fullnm=inventors.map(function(ele,i,arr){//we pass 2 proerties->element,index and whole array
    // console.log(ele)
    // console.log(i)
    // console.log(arr)
    return `${ele.first} ${ele.last}`
})
console.log(fullnm) //we get the same value as above solution

//by usinf fat arrow method we can reduce the above function
var fullnm=inventors.map((ele)=>`${ele.first} ${ele.last}`)
console.log("Map function using here",fullnm)
 
//creating our own function my map
Array.prototype.myMap=function(cb){
	console.log(this) //gives array of all the elements as its used in array object
	var storage=[];
		for (var i=0;i<this.length;i++){
			var value =cb(this[i],i,this) //full names are returned here
			console.log(value)
			storage.push(value)
	}
	return storage
}

var res=inventors.myMap((ele,i,arr) =>`${ele.first} ${ele.last}`)
console.log("own funcrion mymap",res)



// Q. Filter the list of inventors for those who were born in the 1500's;

var storage=[]
for(var i=0;i<inventors.length;i++)
{	
	if(inventors[i].year >=1500 && inventors[i].year <1600)
	{
		var value=inventors[i].first+' '+inventors[i].last
		storage.push(inventors[i])
	}
}
console.log('1500 ppl',storage)

//filter method->same as map accets 3 param, filters the array based on some condition returning true or false ,true->filtered ,false->ignored


var yearfifteen = inventors.filter(function(ele,i,arr)
{
	
	if(ele.year >= 1500 && ele.year < 1600)
	{ele
		console.log(ele)
		return true
	}else
	{
		return false
	}
});

console.log('using filter method',yearfifteen)
	
var yearfatarrow = inventors.filter((ele,i,arr)=>ele.year >= 1500 && ele.year < 1600 )
console.log('fat arrow filter use',yearfatarrow)

//own filter funnction
Array.prototype.myfilter = function(cb)
{
	var storage=[]
	for(var i=0;i<this.length;i++)
	{
		var value=cb(this[i],i,this)
		if (value == true){
			storage.push(this[i])
		}
	}
	return storage
	
}
var res = inventors.myfilter((ele,i,arr)=>ele.year >= 1500 && ele.year < 1600 )
console.log("own my filter function",res)


// 3. Sort the inventors by birthdate, oldest to youngest
//we use sort method
//if we returnf from -1 then we do it by older to younger,for younger to older we return 1

var sorted = inventors.sort(function(a,b)
{
	if (a.year > b.year)
	{
		return -1;
	}
	else
	{
		return 1;
	}
}
)

console.log("sorting the array",sorted);

var ternsort =inventors.sort((a,b)=>(a.year > b.year)? -1 : 1)
console.log("ternary operator sorting",ternsort)




// Q. How many years did all the inventors live?

var age =0;
for(var i=0;i<inventors.length;i++){
	//var age = `${inventors[i].first} ${inventors[i].last} lived till ${inventors[i].passed - inventors[i].year} years`   for each inventor
	age += inventors[i].passed - inventors[i].year
}
	console.log('lived of inventors',age)

//reduce() takes 2  parameters , a callback function and a initial vlaue
//initial value is given as 0 ,it iterates for each element inside array and executes the function 
//total var points to the initial value 0

var totalAge = inventors.reduce(function (total,ele)
	{
		total+=ele.passed - ele.year;
		return total
	}, 0 );
	
console.log('reduce method',totalAge)



//isArray function to check if its an array

console.log(typeof inventors) //it gives object even if its an array so to check  we use isArray
let chk  = Array.isArray(inventors) //returns boolean value
console.log(chk)


//reverse sorts in large to small value
let arr = [2,3,6,5,7,1]
let rev = arr.reverse()
console.log(rev)










