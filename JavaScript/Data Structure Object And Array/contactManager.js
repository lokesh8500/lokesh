//Store five contacts.
//Each contact has name, phone, city Print only contacts from a specific city.
let contact1,contact2,contact3,contact4,contact5;
let contacts =[
	contact1 = { Name: "lokesh", Age: 19, Course: "BCA" },
	contact2 = { Name: "kartik", Age: 21, Course: "BBA" },
	contact3 = { Name: "harsh", Age: 22, Course: "BCOM" },
	contact4 = { Name: "sonali", Age: 33, Course: "BA" },
	contact5 = { Name: "vijay", Age: 45, Course: "MCA" }
];
let target = "MCA";
for(i=0;i<contacts.length;i++)
{
	if(contacts[i].Course === target)
	{
		console.log(target+" found!!!");
	}
}