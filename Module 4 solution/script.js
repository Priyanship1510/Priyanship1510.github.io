var names=new Array();
names[0]="Soham";
names[1]="Ved";
names[2]="Dhruv";
names[3]="Kirti";
names[4]="Rutu";
names[5]="Ritu";
names[6]="Jeel";
names[7]="Riya";
names[8]="Janaki";
names[9]="Jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}