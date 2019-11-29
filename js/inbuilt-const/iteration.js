let arr=[34,53,3,4]

//for in loop
for(x in arr)
{
		//console.log(x) //givs index
		console.log(arr[x])
}

//for of
//gives the direct values
for (var ele of arr)
	{
		console.log(ele) 
}

//we can iterate through the object

let obj={
	name:'nagarjuna',
	gender:'male',
	age:23
}

for(var x in obj)
	{
		//console.log(x) //givs key values like name gende age
		console.log(obj[x]) //gives values like nagarjuna,male,23
}
//for in iterates over prototype proerties also,to avoid that we use has own proerty

for(var ele in obj)
{
		if (obj.hasOwnProperty(ele)){ //if the object has only its proerty like name etc then only it executes
			console.log(obj[ele]) 
		}
}

//we can use object class also to access key and values 

console.log('using global onject we get keys in array', Object.keys(obj))
//we can iterate over it and access the value using for loop

//or

Object.keys(obj).forEach( function (ele)
					{
						console.log('inside for each  '+ele+' key',obj[ele])
					});




















